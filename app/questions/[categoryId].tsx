import React, { useEffect, useState } from "react";
import { ScrollView, Text, TouchableOpacity, View, Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useLocalSearchParams } from "expo-router";
import { FontAwesome6, Ionicons, MaterialIcons } from "@expo/vector-icons";
import ResultModal from "@/components/modal/ResultModal";

// Data imports
import animals from "../../data/animals.json";
import brainTeasers from "../../data/brain-teasers.json";
import celebrities from "../../data/celebrities.json";
import entertainment from "../../data/entertainment.json";
import forKids from "../../data/for-kids.json";
import general from "../../data/general.json";
import geography from "../../data/geography.json";
import history from "../../data/history.json";
import hobbies from "../../data/hobbies.json";
import humanities from "../../data/humanities.json";
import literature from "../../data/literature.json";
import movies from "../../data/movies.json";
import music from "../../data/music.json";
import newest from "../../data/newest.json";
import people from "../../data/people.json";
import religionFaith from "../../data/religion-faith.json";
import science from "../../data/science-technology.json";
import sports from "../../data/sports.json";
import television from "../../data/television.json";
import videoGames from "../../data/video-games.json";
import world from "../../data/world.json";
import { router } from "expo-router";
import { BackHandler } from "react-native";
import { useTheme } from "@/components/themeContext/ThemeContext";

const dataMap: Record<string, any[]> = {
  animals,
  brainTeasers,
  celebrities,
  entertainment,
  forKids,
  general,
  geography,
  history,
  hobbies,
  humanities,
  literature,
  movies,
  music,
  newest,
  people,
  religionFaith,
  science,
  sports,
  television,
  videoGames,
  world,
};

const QuestionScreen = () => {
  const { categoryId } = useLocalSearchParams();
  const categoryKey = categoryId?.toString() || "animals";

  const [currentPosition, setCurrentPosition] = useState(0); // Position in current quiz (0-14)
  const [questionIndices, setQuestionIndices] = useState<number[]>([]); // Indices of questions for this quiz
  const [questionData, setQuestionData] = useState<any>(null);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [answered, setAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [showResultModal, setShowResultModal] = useState(false);
  const [loading, setLoading] = useState(true);

  const questions = dataMap[categoryKey] || [];
  const totalQuestions = Math.min(questions.length, 15);
  const { theme } = useTheme();

  const initializeQuiz = async () => {
    try {
      setLoading(true);

      // Get seen question indices
      const seenKey = `${categoryKey}_seen`;
      const seenString = await AsyncStorage.getItem(seenKey);
      let seenIndices: number[] = seenString ? JSON.parse(seenString) : [];

      // Get current quiz progress
      const quizKey = `${categoryKey}_quiz`;
      const quizString = await AsyncStorage.getItem(quizKey);
      let quizData = quizString ? JSON.parse(quizString) : null;

      if (quizData && quizData.position < totalQuestions) {
        // Resume in-progress quiz
        setQuestionIndices(quizData.indices);
        setCurrentPosition(quizData.position);
        setScore(quizData.score || 0);
        setCorrectAnswers(quizData.correctAnswers || 0);
      } else {
        // Start a new quiz
        // Reset score
        setScore(0);
        setCorrectAnswers(0);

        // Get available indices (exclude seen ones)
        let availableIndices = [];
        for (let i = 0; i < questions.length; i++) {
          if (!seenIndices.includes(i)) {
            availableIndices.push(i);
          }
        }

        // If we've seen all questions, reset seen indices
        if (availableIndices.length < totalQuestions) {
          availableIndices = [];
          for (let i = 0; i < questions.length; i++) {
            availableIndices.push(i);
          }
          seenIndices = [];
          await AsyncStorage.setItem(seenKey, JSON.stringify(seenIndices));
        }

        // Shuffle available indices and select first 15
        const shuffled = availableIndices.sort(() => 0.5 - Math.random());
        const selectedIndices = shuffled.slice(0, totalQuestions);

        // Save new quiz state
        const newQuizData = {
          indices: selectedIndices,
          position: 0,
          score: 0,
          correctAnswers: 0,
        };

        await AsyncStorage.setItem(quizKey, JSON.stringify(newQuizData));
        setQuestionIndices(selectedIndices);
        setCurrentPosition(0);
      }

      setLoading(false);
    } catch (error) {
      console.log("Error initializing quiz:", error);
      setLoading(false);
    }
  };

  // Initialize quiz - get unique question indices
  useEffect(() => {
    initializeQuiz();
  }, [categoryKey]);

  // Set question when position changes
  useEffect(() => {
    if (
      questionIndices.length > 0 &&
      currentPosition < questionIndices.length
    ) {
      const questionIndex = questionIndices[currentPosition];
      setQuestionData(questions[questionIndex]);
      setSelectedOption(null);
      setAnswered(false);
    }
  }, [currentPosition, questionIndices, questions]);

  // Save quiz progress
  useEffect(() => {
    const saveProgress = async () => {
      if (questionIndices.length > 0) {
        try {
          const quizKey = `${categoryKey}_quiz`;
          const quizData = {
            indices: questionIndices,
            position: currentPosition,
            score,
            correctAnswers,
          };
          await AsyncStorage.setItem(quizKey, JSON.stringify(quizData));
        } catch (error) {
          console.log("Error saving quiz progress:", error);
        }
      }
    };

    saveProgress();
  }, [currentPosition, score, correctAnswers]);

  const handleExit = () => {
    Alert.alert(
      "Quit Quiz",
      "Are you sure you want to quit and see your results?",
      [
        { text: "Cancel", style: "cancel" },
        { text: "Yes", onPress: () => setShowResultModal(true) },
      ],
      {
        userInterfaceStyle: theme === "dark" ? "dark" : "light",
      }
    );
  };

  const handleOptionPress = (opt: string) => {
    if (answered) return;
    setSelectedOption(opt);
    setAnswered(true);

    // Update score immediately for correct choices
    if (opt === questionData.answer) {
      setCorrectAnswers((s) => s + 1);
      setScore((s) => s + 3);
    }
  };

  const handleNext = async () => {
    if (!answered) return;

    // Mark current question as seen
    try {
      const questionIndex = questionIndices[currentPosition];
      const seenKey = `${categoryKey}_seen`;
      const seenString = await AsyncStorage.getItem(seenKey);
      const seenIndices = seenString ? JSON.parse(seenString) : [];

      if (!seenIndices.includes(questionIndex)) {
        seenIndices.push(questionIndex);
        await AsyncStorage.setItem(seenKey, JSON.stringify(seenIndices));
      }
    } catch (error) {
      console.log("Error marking question as seen:", error);
    }

    // Move to next question or finish quiz
    const nextPosition = currentPosition + 1;
    if (nextPosition >= totalQuestions) {
      // Quiz complete
      setShowResultModal(true);
    } else {
      setCurrentPosition(nextPosition);
    }
  };

  const handleFinishQuiz = async () => {
    // Mark quiz as finished
    try {
      const quizKey = `${categoryKey}_quiz`;
      const quizData = {
        indices: questionIndices,
        position: totalQuestions, // Mark as completed
        score,
        correctAnswers,
      };
      await AsyncStorage.setItem(quizKey, JSON.stringify(quizData));
    } catch (error) {
      console.log("Error finishing quiz:", error);
    }
  };

  const handleRestart = async () => {
    try {
      setLoading(true);
      // Clear current quiz progress and start a new quiz
      await AsyncStorage.removeItem(`${categoryKey}_quiz`);

      // Restart component to trigger a new quiz
      setShowResultModal(false);

      // Reset state
      setQuestionIndices([]);
      setCurrentPosition(0);
      setScore(0);
      setCorrectAnswers(0);
      await initializeQuiz();

      // // This will trigger the initialization effect to create a new quiz
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  const handleStartOver = async () => {
    try {
      // Clear all progress for this category
      await AsyncStorage.multiRemove([
        `${categoryKey}_quiz`,
        `${categoryKey}_seen`,
      ]);

      setLoading(true);
      setShowResultModal(false);

      // Reset state
      setQuestionIndices([]);
      setCurrentPosition(0);
      setScore(0);
      setCorrectAnswers(0);

      // This will trigger the initialization effect to create a new quiz
    } catch (err) {
      console.log(err);
    }
  };

  const handleClose = () => {
    handleFinishQuiz();
    setShowResultModal(false);
    router.push("/home");
  };

  useEffect(() => {
    return () => {
      handleFinishQuiz();
    };
  }, []);

  if (loading) {
    return (
      <View
        className={`flex-1 justify-center items-center ${
          theme === "dark" ? "bg-[#1c1c1c]" : "bg-white"
        }`}
      >
        <Text>Loading quiz...</Text>
      </View>
    );
  }

  if (!questionData) {
    return (
      <View
        className={`flex-1 justify-center items-center ${
          theme === "dark" ? "bg-[#1c1c1c]" : "bg-white"
        }`}
      >
        <Text>No questions available</Text>
        <TouchableOpacity
          className="mt-4 bg-[#3eb8d4] px-4 py-2 rounded-lg"
          onPress={handleStartOver}
        >
          <Text className="text-white font-semibold">Reset Quiz</Text>
        </TouchableOpacity>
      </View>
    );
  }

  const correct = questionData.answer;
  const isWrong = answered && selectedOption !== correct;

  return (
    <>
      <ScrollView
        style={{ flex: 1 }}
        className={`w-full h-full ${
          theme === "dark" ? "bg-[#1c1c1c]" : "bg-white"
        }`}
      >
        <View
          className="flex flex-col justify-between items-center p-5 h-full w-full gap-8"
          style={{ flex: 1 }}
        >
          {/* progress */}
          <View className="flex w-full flex-row items-center gap-x-4">
            <TouchableOpacity
              className={`w-8 h-8 border ${
                theme === "dark" ? "border-[#5f5f5f]" : "border-[#efefef]"
              } rounded-full flex justify-center items-center`}
              onPress={handleExit}
            >
              <FontAwesome6
                name="xmark"
                size={16}
                color={theme === "dark" ? "white" : "black"}
              />
            </TouchableOpacity>

            <View
              className={`flex-1 border ${
                theme === "dark" ? "border-[#5f5f5f]" : "border-[#efefef]"
              } rounded-full p-1 px-1.5 flex-row items-center gap-x-4`}
            >
              <View className="relative w-full flex-1">
                <View
                  className="w-full p-1.5 rounded-full"
                  style={{
                    backgroundColor: theme === "dark" ? "#323232" : "#efefef",
                  }}
                ></View>
                <View
                  className="bg-[#ff9b3b] w-[50%] p-1.5 rounded-full absolute left-0 top-0"
                  style={{
                    width: `${(currentPosition / totalQuestions) * 100}%`,
                  }}
                ></View>
              </View>

              <Text className="text-sm text-[#3eb8d4] font-bold">
                {currentPosition + 1}/{totalQuestions}
              </Text>
            </View>
          </View>

          <View
            className={`w-full rounded-xl p-5 py-10 pb-4 relative mt-8 ${
              theme === "dark" ? "bg-[#323232]" : "bg-[#dcf8ff]"
            }`}
          >
            <View className="flex-1 justify-center items-center -mt-20">
              <View
                className={`border-[3px] rounded-full w-20 h-20 ${
                  theme === "dark"
                    ? "bg-[#1c1c1c] border-[#1c1c1c]"
                    : "bg-white border-white"
                }`}
              >
                <View className="w-full h-full rounded-full flex justify-center items-center border-[4px] border-[#3eb8d4]">
                  <Text className="text-[#3eb8d4] font-bold text-xl">
                    {score}
                  </Text>
                </View>
              </View>
            </View>

            <View className="mt-4">
              <Text
                className="text-sm text-[#3eb8d4] italic"
                style={{ fontFamily: "serif" }}
              >
                Question
              </Text>
              <Text
                className="font-bold text-lg"
                style={{
                  color: theme === "dark" ? "white" : "black",
                }}
              >
                {questionData.question}
              </Text>
            </View>
          </View>

          {/* Options */}
          <View className="flex flex-col w-full gap-2">
            {questionData.choices.map((opt: string, idx: number) => {
              const isCorrectOpt = opt === correct;
              const isSelectedWrong = opt === selectedOption && isWrong;
              const bgClass = answered
                ? isCorrectOpt
                  ? `border-[#3eb8d4] ${
                      theme === "dark" ? "bg-transparent" : "bg-[#dcf8ff]"
                    }`
                  : isSelectedWrong
                  ? `border-[#ff5644] ${
                      theme === "dark" ? "bg-transparent" : "bg-[#ffdfdc]"
                    }`
                  : `${
                      theme === "dark"
                        ? "bg-[#1c1c1c] border-[#555555]"
                        : "bg-white border-[#efefef]"
                    }`
                : `${
                    theme === "dark"
                      ? "bg-[#1c1c1c] border-[#555555]"
                      : "bg-white border-[#efefef]"
                  }`;
              const borderClass = answered
                ? isCorrectOpt
                  ? "border-2 border-[#3eb8d4]"
                  : isSelectedWrong
                  ? "border-2 border-[#ff5644]"
                  : `border-2 border-[#efefef]`
                : "border-2 border-[#efefef]";

              return (
                <TouchableOpacity
                  key={idx}
                  onPress={() => handleOptionPress(opt)}
                  disabled={answered}
                  className={`flex-row justify-between items-center p-4 w-full rounded-xl ${bgClass} ${borderClass}`}
                  activeOpacity={0.5}
                >
                  <View className="flex-1">
                    <Text
                      className={`${
                        theme === "dark" ? "font-normal" : "font-medium"
                      } ${
                        answered
                          ? isCorrectOpt
                            ? "text-[#3eb8d4]"
                            : isSelectedWrong
                            ? "text-[#ff5644]"
                            : `${
                                theme === "dark"
                                  ? "text-white"
                                  : "text-[#797979]"
                              }`
                          : `${
                              theme === "dark" ? "text-white" : "text-[#797979]"
                            }`
                      }`}
                    >
                      {opt}
                    </Text>
                  </View>
                  <View className="flex-shrink-0 ml-1">
                    {answered && isCorrectOpt && (
                      <Ionicons
                        name="checkmark-circle-sharp"
                        size={21}
                        color="#3eb8d4"
                      />
                    )}
                    {answered && isSelectedWrong && (
                      <MaterialIcons name="cancel" size={21} color="#ff5644" />
                    )}
                    {!answered && (
                      <View
                        className={`border-2 ${
                          theme === "dark"
                            ? "border-[#555555]"
                            : "border-[#efefef]"
                        } w-6 h-6 rounded-full`}
                      ></View>
                    )}
                  </View>
                </TouchableOpacity>
              );
            })}
          </View>

          <TouchableOpacity
            className={`w-full items-center p-4 py-3 ${
              answered
                ? "bg-[#3eb8d4] border-[#3eb8d4]"
                : theme === "dark"
                ? "bg-gray-500 border-gray-500"
                : "bg-gray-300 border-gray-300"
            } border-2 rounded-xl`}
            activeOpacity={0.5}
            onPress={handleNext}
            disabled={!answered}
          >
            <Text className="text-white font-semibold text-base">
              {currentPosition + 1 >= totalQuestions ? "Submit" : "Next"}
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      <ResultModal
        isVisible={showResultModal}
        score={score}
        total={totalQuestions}
        onClose={handleClose}
        onRestart={handleRestart}
      />
    </>
  );
};

export default QuestionScreen;

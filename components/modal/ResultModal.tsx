import React from "react";
import { Modal, Text, TouchableOpacity, View } from "react-native";
import { useTheme } from "../themeContext/ThemeContext";

interface Props {
  onClose: () => void;
  onRestart: () => void;
  score: number;
  total: number;
  isVisible: boolean;
}

const ResultModal = ({
  onClose,
  score,
  total,
  onRestart,
  isVisible,
}: Props) => {
  const percent = (score / total) * 100;
  let title = "";
  let subtitle = "";
  const { theme } = useTheme();

  if (percent >= 80) {
    title = "Excellent! 🎉";
    subtitle = "You aced this quiz. Fantastic job!";
  } else if (percent >= 50) {
    title = "Good Effort!";
    subtitle = "You're doing well. Keep it up!";
  } else {
    title = "Keep Trying";
    subtitle = "Don't give up—practice makes perfect!";
  }

  return (
    <Modal
      visible={isVisible}
      // transparent
      animationType="slide"
      // presentationStyle="fullScreen"
      onRequestClose={onClose}
    >
      <View className="flex-1 bg-[#000000cf] justify-center items-center w-full h-full">
        <View
          className={`w-full h-full p-5 items-center justify-center ${
            theme === "dark" ? "bg-[#1c1c1c]" : "bg-white"
          }`}
        >
          <View className="flex flex-col justify-between w-full items-center">
            <View
              style={{
                width: 200,
                height: 200,
                borderWidth: 6,
                borderColor: "#dcf8ff",
                borderRadius: 200, // half of 52
                shadowColor: "#0dc8f2",
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 1,
                shadowRadius: 2.54,
                elevation: 15,
              }}
            >
              <View
                className="w-full h-full rounded-full flex justify-center items-center flex-col gap-y-2"
                style={{
                  borderWidth: 6,
                  borderColor: "#b4effe",
                }}
              >
                <View
                  className="w-full h-full rounded-full flex justify-center items-center flex-col gap-y-2"
                  style={{
                    borderWidth: 6,
                    borderColor: "#98def0",
                    backgroundColor: "#3eb8d4",
                  }}
                >
                  <Text
                    className=" text-white font-light"
                    style={{
                      fontSize: 24,
                      lineHeight: 32,
                    }}
                  >
                    Your Score
                  </Text>
                  <Text
                    className="font-semibold text-white"
                    style={{
                      fontSize: 24,
                      lineHeight: 32,
                    }}
                  >
                    {score}/30
                  </Text>
                </View>
              </View>
            </View>

            <Text
              className="font-bold text-[#3eb8d4]"
              style={{
                fontSize: 30,
                lineHeight: 36,
                marginTop: 30,
              }}
            >
              {title}
            </Text>
            <Text
              className=" text-[#3eb8d4]"
              style={{
                fontSize: 16,
                lineHeight: 24,
              }}
            >
              {subtitle}
            </Text>

            <View
              className="flex flex-row justify-between gap-4"
              style={{
                marginTop: 30,
                columnGap: 16,
              }}
            >
              <TouchableOpacity
                className="flex-1  w-full bg-[#3eb8d4] rounded-lg p-3"
                onPress={onClose}
              >
                <Text
                  className=" text-white font-semibold text-lg"
                  style={{
                    textAlign: "center",
                  }}
                >
                  Home
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                className="flex-1  w-full bg-[#3eb8d4] rounded-lg p-3"
                onPress={onRestart}
              >
                <Text
                  className=" text-white font-semibold text-lg"
                  style={{
                    textAlign: "center",
                  }}
                >
                  Play Again
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default ResultModal;

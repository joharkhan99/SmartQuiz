import React from "react";
import { Modal, Text, TouchableOpacity, View } from "react-native";

interface Props {
  onClose: () => void;
  onRestart: () => void;
  score: number;
  total: number;
}

const ResultModal = ({ onClose, score, total, onRestart }: Props) => {
  const percent = (score / total) * 100;
  let title = "";
  let subtitle = "";

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
      visible={true}
      transparent
      animationType="slide"
      presentationStyle="fullScreen"
      onRequestClose={onClose}
    >
      <View className="flex-1 bg-[#000000cf] justify-center items-center w-full h-full">
        <View className="w-full h-full bg-white p-5 items-center justify-center">
          <View className="flex flex-col justify-between w-full items-center">
            <View
              className="w-52 h-52 border-[6px] border-[#dcf8ff] rounded-full"
              style={{
                shadowColor: "#0dc8f2",
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 1,
                shadowRadius: 2.54,
                elevation: 15,
              }}
            >
              <View className="w-full h-full rounded-full flex justify-center items-center flex-col gap-y-2 border-[6px] border-[#b4effe]">
                <View className="w-full h-full rounded-full flex justify-center items-center flex-col gap-y-2 bg-[#3eb8d4] border-[6px] border-[#98def0]">
                  <Text className="text-2xl text-white font-light">
                    Your Score
                  </Text>
                  <Text className="font-semibold text-2xl text-white">
                    {score}/30
                  </Text>
                </View>
              </View>
            </View>

            <Text className="text-3xl font-bold mt-10 text-[#3eb8d4]">
              {title}
            </Text>
            <Text className="text-base text-[#3eb8d4]">{subtitle}</Text>

            <View className="flex flex-row justify-between gap-4 mt-10">
              <TouchableOpacity
                className="flex-1 text-center w-full bg-[#3eb8d4] rounded-lg p-3"
                onPress={onClose}
              >
                <Text className="text-center text-white font-semibold text-lg">
                  Home
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                className="flex-1 text-center w-full bg-[#3eb8d4] rounded-lg p-3"
                onPress={onRestart}
              >
                <Text className="text-center text-white font-semibold text-lg">
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

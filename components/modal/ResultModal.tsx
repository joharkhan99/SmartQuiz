import React from "react";
import { Modal, Text, TouchableOpacity, View } from "react-native";

const ResultModal = () => {
  return (
    <Modal
      visible={true}
      transparent
      animationType="slide"
      presentationStyle="fullScreen"
      // onRequestClose={() => setModalVisible(false)}
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
              <View className="w-full h-full rounded-full flex justify-center items-center flex-col gap-y-2 bg-[#3eb8d4] border-[6px] border-[#b7edfa]">
                <Text className="text-2xl text-white font-light">
                  Your Score
                </Text>
                <Text className="font-semibold text-2xl text-white">15/30</Text>
              </View>
            </View>

            <Text className="text-3xl font-bold mt-10 text-[#3eb8d4]">
              Congratulations
            </Text>
            <Text className="text-base text-[#3eb8d4]">
              Great Job! You Did it.
            </Text>

            <View className="flex flex-row justify-between gap-4 mt-10">
              <TouchableOpacity className="flex-1 text-center w-full bg-[#3eb8d4] rounded-lg p-3">
                <Text className="text-center text-white font-semibold text-lg">
                  Home
                </Text>
              </TouchableOpacity>
              <TouchableOpacity className="flex-1 text-center w-full bg-[#3eb8d4] rounded-lg p-3">
                <Text className="text-center text-white font-semibold text-lg">
                  Start Again
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

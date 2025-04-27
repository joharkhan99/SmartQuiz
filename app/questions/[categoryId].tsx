import ResultModal from "@/components/modal/ResultModal";
import { FontAwesome6, Ionicons, MaterialIcons } from "@expo/vector-icons";
import { useLocalSearchParams } from "expo-router";
import React from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";

const SingleMusicScreen = () => {
  // params.categoryId
  const params = useLocalSearchParams();

  return (
    <>
      <ScrollView style={{ flex: 1 }} className="w-full h-full bg-white">
        <View
          className="flex flex-col justify-between items-center p-5 h-full w-full gap-8"
          style={{ flex: 1 }}
        >
          {/* progress */}
          <View className="flex w-full flex-row items-center gap-x-4">
            <TouchableOpacity className="w-8 h-8 border border-[#efefef] rounded-full flex justify-center items-center">
              <FontAwesome6 name="xmark" size={16} color="black" />
            </TouchableOpacity>

            <View className="flex-1 border border-[#efefef] rounded-full p-1 px-1.5 flex-row items-center gap-x-4">
              <View className="relative w-full flex-1">
                <View className="bg-[#efefef] w-full p-1.5 rounded-full"></View>
                <View className="bg-[#ff9b3b] w-[50%] p-1.5 rounded-full absolute left-0 top-0"></View>
              </View>

              <Text className="text-sm text-[#3eb8d4] font-bold">5/10</Text>
            </View>
          </View>

          {/* question box */}
          <View className="bg-[#dcf8ff] w-full rounded-xl p-5 py-10 relative mt-12">
            <View className="flex-1 justify-center items-center -mt-20">
              <View className="border-[3px] border-white rounded-full w-20 h-20 bg-white">
                <View className="w-full h-full rounded-full flex justify-center items-center border-[4px] border-[#3eb8d4]">
                  <Text className="text-[#3eb8d4] font-bold text-xl">30</Text>
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
              <Text className="font-bold text-lg">
                One of the following snakes does not belong to the Viperidae
                family.
              </Text>
            </View>
          </View>

          {/* choices */}
          <View className="flex flex-col w-full gap-3">
            <TouchableOpacity
              className="flex flex-row justify-between items-center p-4 py-2.5 bg-[#dcf8ff] border-2 border-[#3eb8d4] rounded-xl"
              activeOpacity={0.6}
            >
              <Text className="text-[#3eb8d4] font-semibold text-base">
                Volleyball
              </Text>
              <Ionicons
                name="checkmark-circle-sharp"
                size={24}
                color="#3eb8d4"
              />
            </TouchableOpacity>

            <TouchableOpacity
              className="flex flex-row justify-between items-center p-4 py-2.5 border-2 border-[#efefef] rounded-xl"
              activeOpacity={0.6}
            >
              <Text className="text-[#797979] font-semibold text-base">
                Basketball
              </Text>
              <View className="border-2 border-[#efefef] w-6 h-6 rounded-full"></View>
            </TouchableOpacity>

            <TouchableOpacity
              className="flex flex-row justify-between items-center p-4 py-2.5 border-2 border-[#efefef] rounded-xl"
              activeOpacity={0.6}
            >
              <Text className="text-[#797979] font-semibold text-base">
                Badminton
              </Text>
              <View className="border-2 border-[#efefef] w-6 h-6 rounded-full"></View>
            </TouchableOpacity>

            <TouchableOpacity
              className="flex flex-row justify-between items-center p-4 py-2.5 bg-[#ffdfdc] border-2 border-[#ff5644] rounded-xl"
              activeOpacity={0.6}
            >
              <Text className="text-[#ff5644] font-semibold text-base">
                Football
              </Text>
              <MaterialIcons name="cancel" size={24} color="#ff5644" />
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            className="w-full items-center p-4 py-2.5 bg-[#3eb8d4] border-2 border-[#3eb8d4] rounded-xl"
            activeOpacity={0.5}
          >
            <Text className="text-white font-semibold text-base">Next</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* Result Modal */}
      {/* <ResultModal /> */}
    </>
  );
};

export default SingleMusicScreen;

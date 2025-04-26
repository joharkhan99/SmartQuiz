import { Link } from "expo-router";
import React from "react";
import { ScrollView, Text, View } from "react-native";

const GetStarted = () => {
  return (
    <View className="flex-1 justify-center items-center">
      <ScrollView style={{ flex: 1 }} className="w-full">
        <View className="w-full p-5">
          <Text className="text-left font-bold text-xl">Let's play</Text>

          <View className="flex flex-col flex-wrap w-full gap-5">
            <View className="flex flex-row">
              <View>
                <Text>1</Text>
              </View>
              <View>
                <Text>2</Text>
              </View>
            </View>
            <View className="flex flex-row">
              <View>
                <Text>3</Text>
              </View>
              <View>
                <Text>4</Text>
              </View>
            </View>
            <View className="flex flex-row">
              <View>
                <Text>5</Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default GetStarted;

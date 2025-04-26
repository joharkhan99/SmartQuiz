import { Link } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

const GetStarted = () => {
  return (
    <View className="flex-1 justify-center items-center">
      <Text>GetStarted Page</Text>
      <Link
        href={"/(tabs)/home"}
        className="bg-red-400 text-white p-3 my-4 rounded-lg px-10"
      >
        Start
      </Link>
    </View>
  );
};

export default GetStarted;

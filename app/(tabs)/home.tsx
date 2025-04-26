import { Link } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

const GetStarted = () => {
  return (
    <View className="flex-1 justify-center items-center">
      <Text>Home Page</Text>
      <Link
        href={{
          pathname: "/questions/[categoryId]",
          params: {
            categoryId: 123,
          },
        }}
        className="bg-red-400 text-white p-3 my-4 rounded-lg px-10"
      >
        Questions
      </Link>
    </View>
  );
};

export default GetStarted;

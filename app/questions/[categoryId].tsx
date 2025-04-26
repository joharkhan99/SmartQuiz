import { useLocalSearchParams } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

const SingleMusicScreen = () => {
  const params = useLocalSearchParams();
  return (
    <View>
      <Text>Questions Page: {params.categoryId}</Text>
    </View>
  );
};

export default SingleMusicScreen;

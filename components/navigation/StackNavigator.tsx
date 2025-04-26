import React from "react";
import { Stack } from "expo-router";

const StackNavigator = () => {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen
        name="getstarted/index"
        options={{ headerShown: false, title: "Get Started" }}
      />
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen
        name="questions/[categoryId]"
        options={{
          title: "Questions Screen",
        }}
      />
    </Stack>
  );
};

export default StackNavigator;

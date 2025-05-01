import React, { useRef, useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Swiper, { SwiperInternals } from "react-native-swiper";
import { MaterialIcons } from "@expo/vector-icons";
import { NativeScrollEvent } from "react-native";
import { NativeSyntheticEvent } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";

const Slide = (emoji: string, title: string, paragraph: string) => (
  <View className="flex-1 items-center justify-center w-full h-full">
    <Text className="text-6xl" style={{ lineHeight: 80 }}>
      {emoji}
    </Text>
    <Text className="text-[28px] text-white font-bold text-center my-3 w-[95%]">
      {title}
    </Text>
    <Text className="text-lg text-white text-center w-4/5">{paragraph}</Text>
  </View>
);

const Welcome = () => {
  const [isLastSlide, setIsLastSlide] = useState(false);
  const swiperRef = useRef<Swiper | null>(null);
  const router = useRouter();

  const next = () => {
    swiperRef.current?.scrollBy(1);
  };

  const onMomentumScrollEnd = (
    e: NativeSyntheticEvent<NativeScrollEvent>,
    state: SwiperInternals,
    swiper: Swiper
  ) => {
    const lastIndex = state.total - 1;
    if (!state.loopJump && state.index === lastIndex) {
      setIsLastSlide(true);
    }
  };

  const handleGetStarted = async () => {
    await AsyncStorage.setItem("hasShownWelcome", "true");
    router.replace("/(tabs)/home");
  };

  return (
    <View className="flex-1 items-center justify-center w-full h-full bg-[#3eb8d4]">
      <Swiper
        loop={false}
        showsButtons={false}
        showsPagination={false}
        ref={swiperRef}
        scrollEnabled={false}
        onMomentumScrollEnd={onMomentumScrollEnd}
      >
        {Slide(
          "👋",
          "Welcome to Smart Quiz",
          "Thank you for downloading our app! Enjoy a variety of great quizzes."
        )}
        {Slide(
          "📚🧠💡",
          "Test Your Knowledge",
          "Choose from dozens of categories, each with hundreds of questions waiting for you."
        )}
        {Slide(
          "🔥✨😂🎓",
          "Engaging, Entertaining & Educational",
          "Have fun with quizzes that keep you hooked and teach you something new."
        )}
        {Slide(
          "🚀",
          "Get Started",
          "Tap below to jump right into your first quiz!"
        )}
      </Swiper>

      <View className="flex-row justify-end items-center z-[100] gap-5 p-10 pt-0 w-full">
        <TouchableOpacity
          className="bg-white p-2.5 rounded-full px-4"
          onPress={isLastSlide ? handleGetStarted : next}
        >
          {isLastSlide ? (
            <Text className="text-center font-semibold text-lg text-[#3eb8d4]">
              Get Started
            </Text>
          ) : (
            <MaterialIcons
              name="keyboard-arrow-right"
              size={24}
              color={"#3eb8d4"}
            />
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Welcome;

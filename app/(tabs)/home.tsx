import { Link } from "expo-router";
import React from "react";
import {
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { categories } from "@/data/utils";

// shadow style reused on each card
const shadowStyle = {
  shadowColor: "#bababa",
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.17,
  shadowRadius: 2.54,
  elevation: 15,
};

// chunk categories into rows of 2
const rows: any[] = [];
for (let i = 0; i < categories.length; i += 2) {
  rows.push(categories.slice(i, i + 2));
}

const Home = () => {
  return (
    <View className="flex-1 justify-center items-center">
      <ScrollView style={{ flex: 1 }} className="w-full bg-[#fafafa]">
        <View className="w-full p-5">
          <View className="flex-row items-center bg-[#e4e4e492] px-5 py-0 rounded-lg mb-5">
            <TextInput
              placeholder="Search"
              className="flex-1 text-base text-gray-800"
              placeholderTextColor="#999"
            />
            <Ionicons name="search-outline" size={20} color="#bbb" />
          </View>

          <View className="flex flex-col flex-wrap w-full gap-5 my-10">
            {rows.map((row, rowIndex) => (
              <View
                key={rowIndex}
                className={`flex flex-row ${
                  row.length > 1 ? "w-full gap-6" : "w-1/2 gap-6"
                } items-start ${rowIndex > 0 ? "mt-2" : ""}`}
              >
                {row.map((cat: any, idx: any) => (
                  <View
                    key={idx}
                    className={`bg-white ${
                      row.length > 1 ? "flex-1" : "w-full"
                    } rounded-xl p-3 ${cat.wrapperClass}`}
                    style={shadowStyle}
                  >
                    <Link
                      href={{
                        pathname: "/questions/[categoryId]",
                        params: {
                          categoryId: cat.id,
                        },
                      }}
                    >
                      <View className="flex flex-col items-start gap-0">
                        <Image source={cat.image} className={cat.imageClass} />
                        <Text className="text-lg font-bold mt-2 capitalize">
                          {cat.title}
                        </Text>
                        <Text className="text-sm text-neutral-400">
                          {cat.length} questions
                        </Text>
                      </View>
                    </Link>
                  </View>
                ))}
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;

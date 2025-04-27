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
import animals from "../../data/animals.json";
import brainTeasers from "../../data/brain-teasers.json";
import celebrities from "../../data/celebrities.json";
import entertainment from "../../data/entertainment.json";
import forKids from "../../data/for-kids.json";
import general from "../../data/general.json";
import geography from "../../data/geography.json";
import history from "../../data/history.json";
import hobbies from "../../data/hobbies.json";
import humanities from "../../data/humanities.json";
import literature from "../../data/literature.json";
import movies from "../../data/movies.json";
import music from "../../data/music.json";
import newest from "../../data/newest.json";
import people from "../../data/people.json";
import religionFaith from "../../data/religion-faith.json";
import science from "../../data/science-technology.json";
import sports from "../../data/sports.json";
import television from "../../data/television.json";
import videoGames from "../../data/video-games.json";
import world from "../../data/world.json";

// shadow style reused on each card
const shadowStyle = {
  shadowColor: "#bababa",
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.17,
  shadowRadius: 2.54,
  elevation: 15,
};

// array of category data
const categories = [
  {
    id: "animals",
    title: "Animals",
    image: require("../../assets/category/animal.png"),
    imageClass: "-mt-10",
    wrapperClass: "",
    length: animals.length,
  },
  {
    id: "brainTeasers",
    title: "Brain Teasers",
    image: require("../../assets/category/brain-teasers.png"),
    imageClass: "-mt-16 w-40 h-40",
    wrapperClass: "",
    length: brainTeasers.length,
  },
  {
    id: "celebrities",
    title: "Celebrities",
    image: require("../../assets/category/celebrities.png"),
    imageClass: "-mt-8 w-28 h-28",
    wrapperClass: "-mt-6",
    length: celebrities.length,
  },
  {
    id: "entertainment",
    title: "Entertainment",
    image: require("../../assets/category/entertainment.png"),
    imageClass: "-mt-8",
    wrapperClass: "-mt-2",
    length: entertainment.length,
  },
  {
    id: "forKids",
    title: "For Kids",
    image: require("../../assets/category/for-kids.png"),
    imageClass: "-mt-11 w-32 h-32",
    wrapperClass: "-mt-5",
    length: forKids.length,
  },
  {
    id: "general",
    title: "General",
    image: require("../../assets/category/general.png"),
    imageClass: "-mt-10",
    wrapperClass: "",
    length: general.length,
  },
  {
    id: "geography",
    title: "Geography",
    image: require("../../assets/category/geography.png"),
    imageClass: "-mt-8 w-24 h-24",
    wrapperClass: "-mt-3.5",
    length: geography.length,
  },
  {
    id: "history",
    title: "History",
    image: require("../../assets/category/history.png"),
    imageClass: "-mt-10",
    wrapperClass: "",
    length: history.length,
  },
  {
    id: "hobbies",
    title: "Hobbies",
    image: require("../../assets/category/hobbies.png"),
    imageClass: "-mt-10 w-28 h-28",
    wrapperClass: "-mt-6",
    length: hobbies.length,
  },
  {
    id: "humanities",
    title: "Humanities",
    image: require("../../assets/category/humanities.png"),
    imageClass: "-mt-10",
    wrapperClass: "",
    length: humanities.length,
  },
  {
    id: "literature",
    title: "Literature",
    image: require("../../assets/category/literature.png"),
    imageClass: "-mt-8 w-24 h-24",
    wrapperClass: "-mt-6",
    length: literature.length,
  },
  {
    id: "movies",
    title: "Movies",
    image: require("../../assets/category/movies.png"),
    imageClass: "-mt-10",
    wrapperClass: "",
    length: movies.length,
  },
  {
    id: "music",
    title: "Music",
    image: require("../../assets/category/music.png"),
    imageClass: "-mt-10 w-24 h-24",
    wrapperClass: "-mt-8",
    length: music.length,
  },
  {
    id: "newest",
    title: "Newest",
    image: require("../../assets/category/newest.png"),
    imageClass: "-mt-10",
    wrapperClass: "",
    length: newest.length,
  },
  {
    id: "people",
    title: "People",
    image: require("../../assets/category/people.png"),
    imageClass: "-mt-10 w-24 h-24",
    wrapperClass: "-mt-12",
    length: people.length,
  },
  {
    id: "religionFaith",
    title: "Religion & Faith",
    image: require("../../assets/category/religion-faith.png"),
    imageClass: "-mt-10",
    wrapperClass: "",
    length: religionFaith.length,
  },
  {
    id: "science",
    title: "Science & Tech",
    image: require("../../assets/category/science.png"),
    imageClass: "-mt-10 w-24 h-24",
    wrapperClass: "-mt-16",
    length: science.length,
  },
  {
    id: "sports",
    title: "Sports",
    image: require("../../assets/category/sports.png"),
    imageClass: "-mt-10",
    wrapperClass: "",
    length: sports.length,
  },
  {
    id: "television",
    title: "Television",
    image: require("../../assets/category/television.png"),
    imageClass: "-mt-10 w-24 h-24",
    wrapperClass: "-mt-20",
    length: television.length,
  },
  {
    id: "videoGames",
    title: "Video Games",
    image: require("../../assets/category/video-games.png"),
    imageClass: "-mt-9",
    wrapperClass: "",
    length: videoGames.length,
  },
  {
    id: "world",
    title: "World",
    image: require("../../assets/category/world.png"),
    imageClass: "-mt-8 w-24 h-24",
    wrapperClass: "-mt-[94px]",
    length: world.length,
  },
];

// chunk categories into rows of 2
const rows: any[] = [];
for (let i = 0; i < categories.length; i += 2) {
  rows.push(categories.slice(i, i + 2));
}

const GetStarted = () => {
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

export default GetStarted;

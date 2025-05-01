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
    <View className="flex-1 justify-center items-center ">
      <ScrollView style={{ flex: 1 }} className="w-full bg-[#fafafa]">
        <View className="w-full p-5">
          <View className="flex flex-col flex-wrap w-full gap-5 my-10">
            <View className="flex flex-row w-full gap-6 items-start">
              <View
                className="bg-white flex-1 rounded-xl p-3"
                style={{
                  shadowColor: "#bababa",
                  shadowOffset: {
                    width: 0,
                    height: 2,
                  },
                  shadowOpacity: 0.17,
                  shadowRadius: 2.54,
                  elevation: 15,
                }}
              >
                <Link
                  href={{
                    pathname: "/questions/[categoryId]",
                    params: {
                      categoryId: "animals",
                    },
                  }}
                >
                  <View className="flex flex-col items-start gap-0">
                    <Image
                      source={require("../../assets/category/animal.png")}
                      className="-mt-10"
                    />

                    <Text className="text-lg font-bold mt-2 capitalize">
                      Animals
                    </Text>
                    <Text className="text-sm text-neutral-400">
                      {categories[0].length} questions
                    </Text>
                  </View>
                </Link>
              </View>
              <View
                className="bg-white flex-1 rounded-xl p-3"
                style={{
                  shadowColor: "#bababa",
                  shadowOffset: {
                    width: 0,
                    height: 2,
                  },
                  shadowOpacity: 0.17,
                  shadowRadius: 2.54,
                  elevation: 15,
                }}
              >
                <Link
                  href={{
                    pathname: "/questions/[categoryId]",
                    params: {
                      categoryId: "brainTeasers",
                    },
                  }}
                >
                  <View className="flex flex-col items-start gap-0">
                    <Image
                      source={require("../../assets/category/brain-teasers.png")}
                      className="-mt-16 w-40 h-40"
                    />

                    <Text className="text-lg font-bold mt-2 capitalize">
                      Brain Teasers
                    </Text>
                    <Text className="text-sm text-neutral-400">
                      {categories[1].length} questions
                    </Text>
                  </View>
                </Link>
              </View>
            </View>

            {/*  */}
            <View className="flex flex-row w-full gap-6 items-start mt-2">
              <View
                className="bg-white flex-1 rounded-xl p-3 -mt-6"
                style={{
                  shadowColor: "#bababa",
                  shadowOffset: {
                    width: 0,
                    height: 2,
                  },
                  shadowOpacity: 0.17,
                  shadowRadius: 2.54,
                  elevation: 15,
                }}
              >
                <Link
                  href={{
                    pathname: "/questions/[categoryId]",
                    params: {
                      categoryId: "celebrities",
                    },
                  }}
                >
                  <View className="flex flex-col items-start gap-0">
                    <Image
                      source={require("../../assets/category/celebrities.png")}
                      className="-mt-8 w-28 h-28"
                    />

                    <Text className="text-lg font-bold mt-2 capitalize">
                      Celebrities
                    </Text>
                    <Text className="text-sm text-neutral-400">
                      {categories[2].length} questions
                    </Text>
                  </View>
                </Link>
              </View>
              <View
                className="bg-white flex-1 rounded-xl p-3 -mt-2"
                style={{
                  shadowColor: "#bababa",
                  shadowOffset: {
                    width: 0,
                    height: 2,
                  },
                  shadowOpacity: 0.17,
                  shadowRadius: 2.54,
                  elevation: 15,
                }}
              >
                <Link
                  href={{
                    pathname: "/questions/[categoryId]",
                    params: {
                      categoryId: "entertainment",
                    },
                  }}
                >
                  <View className="flex flex-col items-start gap-0">
                    <Image
                      source={require("../../assets/category/entertainment.png")}
                      className="-mt-8"
                    />

                    <Text className="text-lg font-bold mt-2 capitalize">
                      Entertainment
                    </Text>
                    <Text className="text-sm text-neutral-400">
                      {categories[3].length} questions
                    </Text>
                  </View>
                </Link>
              </View>
            </View>

            {/*  */}
            <View className="flex flex-row w-full gap-6 items-start mt-2">
              <View
                className="bg-white flex-1 rounded-xl p-3 -mt-5"
                style={{
                  shadowColor: "#bababa",
                  shadowOffset: {
                    width: 0,
                    height: 2,
                  },
                  shadowOpacity: 0.17,
                  shadowRadius: 2.54,
                  elevation: 15,
                }}
              >
                <Link
                  href={{
                    pathname: "/questions/[categoryId]",
                    params: {
                      categoryId: "forKids",
                    },
                  }}
                >
                  <View className="flex flex-col items-start gap-0">
                    <Image
                      source={require("../../assets/category/for-kids.png")}
                      className="-mt-11 w-32 h-32"
                    />

                    <Text className="text-lg font-bold mt-2 capitalize">
                      For Kids
                    </Text>
                    <Text className="text-sm text-neutral-400">
                      {categories[4].length} questions
                    </Text>
                  </View>
                </Link>
              </View>
              <View
                className="bg-white flex-1 rounded-xl p-3"
                style={{
                  shadowColor: "#bababa",
                  shadowOffset: {
                    width: 0,
                    height: 2,
                  },
                  shadowOpacity: 0.17,
                  shadowRadius: 2.54,
                  elevation: 15,
                }}
              >
                <Link
                  href={{
                    pathname: "/questions/[categoryId]",
                    params: {
                      categoryId: "general",
                    },
                  }}
                >
                  <View className="flex flex-col items-start gap-0">
                    <Image
                      source={require("../../assets/category/general.png")}
                      className="-mt-10"
                    />

                    <Text className="text-lg font-bold mt-2 capitalize">
                      General
                    </Text>
                    <Text className="text-sm text-neutral-400">
                      {categories[5].length} questions
                    </Text>
                  </View>
                </Link>
              </View>
            </View>

            {/*  */}
            <View className="flex flex-row w-full gap-6 items-start mt-2">
              <View
                className="bg-white flex-1 rounded-xl p-3 -mt-3.5"
                style={{
                  shadowColor: "#bababa",
                  shadowOffset: {
                    width: 0,
                    height: 2,
                  },
                  shadowOpacity: 0.17,
                  shadowRadius: 2.54,
                  elevation: 15,
                }}
              >
                <Link
                  href={{
                    pathname: "/questions/[categoryId]",
                    params: {
                      categoryId: "geography",
                    },
                  }}
                >
                  <View className="flex flex-col items-start gap-0">
                    <Image
                      source={require("../../assets/category/geography.png")}
                      className="-mt-8 w-24 h-24"
                    />

                    <Text className="text-lg font-bold mt-2 capitalize">
                      Geography
                    </Text>
                    <Text className="text-sm text-neutral-400">
                      {categories[6].length} questions
                    </Text>
                  </View>
                </Link>
              </View>
              <View
                className="bg-white flex-1 rounded-xl p-3"
                style={{
                  shadowColor: "#bababa",
                  shadowOffset: {
                    width: 0,
                    height: 2,
                  },
                  shadowOpacity: 0.17,
                  shadowRadius: 2.54,
                  elevation: 15,
                }}
              >
                <Link
                  href={{
                    pathname: "/questions/[categoryId]",
                    params: {
                      categoryId: "history",
                    },
                  }}
                >
                  <View className="flex flex-col items-start gap-0">
                    <Image
                      source={require("../../assets/category/history.png")}
                      className="-mt-10"
                    />

                    <Text className="text-lg font-bold mt-2 capitalize">
                      History
                    </Text>
                    <Text className="text-sm text-neutral-400">
                      {categories[7].length} questions
                    </Text>
                  </View>
                </Link>
              </View>
            </View>

            {/*  */}
            <View className="flex flex-row w-full gap-6 items-start mt-2">
              <View
                className="bg-white flex-1 rounded-xl p-3 -mt-6"
                style={{
                  shadowColor: "#bababa",
                  shadowOffset: {
                    width: 0,
                    height: 2,
                  },
                  shadowOpacity: 0.17,
                  shadowRadius: 2.54,
                  elevation: 15,
                }}
              >
                <Link
                  href={{
                    pathname: "/questions/[categoryId]",
                    params: {
                      categoryId: "hobbies",
                    },
                  }}
                >
                  <View className="flex flex-col items-start gap-0">
                    <Image
                      source={require("../../assets/category/hobbies.png")}
                      className="-mt-10 w-28 h-28"
                    />

                    <Text className="text-lg font-bold mt-2 capitalize">
                      Hobbies
                    </Text>
                    <Text className="text-sm text-neutral-400">
                      {categories[8].length} questions
                    </Text>
                  </View>
                </Link>
              </View>
              <View
                className="bg-white flex-1 rounded-xl p-3"
                style={{
                  shadowColor: "#bababa",
                  shadowOffset: {
                    width: 0,
                    height: 2,
                  },
                  shadowOpacity: 0.17,
                  shadowRadius: 2.54,
                  elevation: 15,
                }}
              >
                <Link
                  href={{
                    pathname: "/questions/[categoryId]",
                    params: {
                      categoryId: "humanities",
                    },
                  }}
                >
                  <View className="flex flex-col items-start gap-0">
                    <Image
                      source={require("../../assets/category/humanities.png")}
                      className="-mt-10"
                    />

                    <Text className="text-lg font-bold mt-2 capitalize">
                      Humanities
                    </Text>
                    <Text className="text-sm text-neutral-400">
                      {categories[9].length} questions
                    </Text>
                  </View>
                </Link>
              </View>
            </View>

            {/*  */}
            <View className="flex flex-row w-full gap-6 items-start mt-2">
              <View
                className="bg-white flex-1 rounded-xl p-3 -mt-6"
                style={{
                  shadowColor: "#bababa",
                  shadowOffset: {
                    width: 0,
                    height: 2,
                  },
                  shadowOpacity: 0.17,
                  shadowRadius: 2.54,
                  elevation: 15,
                }}
              >
                <Link
                  href={{
                    pathname: "/questions/[categoryId]",
                    params: {
                      categoryId: "literature",
                    },
                  }}
                >
                  <View className="flex flex-col items-start gap-0">
                    <Image
                      source={require("../../assets/category/literature.png")}
                      className="-mt-8 w-24 h-24"
                    />

                    <Text className="text-lg font-bold mt-2 capitalize">
                      Literature
                    </Text>
                    <Text className="text-sm text-neutral-400">
                      {categories[10].length} questions
                    </Text>
                  </View>
                </Link>
              </View>
              <View
                className="bg-white flex-1 rounded-xl p-3"
                style={{
                  shadowColor: "#bababa",
                  shadowOffset: {
                    width: 0,
                    height: 2,
                  },
                  shadowOpacity: 0.17,
                  shadowRadius: 2.54,
                  elevation: 15,
                }}
              >
                <Link
                  href={{
                    pathname: "/questions/[categoryId]",
                    params: {
                      categoryId: "movies",
                    },
                  }}
                >
                  <View className="flex flex-col items-start gap-0">
                    <Image
                      source={require("../../assets/category/movies.png")}
                      className="-mt-10"
                    />

                    <Text className="text-lg font-bold mt-2 capitalize">
                      Movies
                    </Text>
                    <Text className="text-sm text-neutral-400">
                      {categories[11].length} questions
                    </Text>
                  </View>
                </Link>
              </View>
            </View>

            {/*  */}
            <View className="flex flex-row w-full gap-6 items-start mt-2">
              <View
                className="bg-white flex-1 rounded-xl p-3 -mt-8"
                style={{
                  shadowColor: "#bababa",
                  shadowOffset: {
                    width: 0,
                    height: 2,
                  },
                  shadowOpacity: 0.17,
                  shadowRadius: 2.54,
                  elevation: 15,
                }}
              >
                <Link
                  href={{
                    pathname: "/questions/[categoryId]",
                    params: {
                      categoryId: "music",
                    },
                  }}
                >
                  <View className="flex flex-col items-start gap-0">
                    <Image
                      source={require("../../assets/category/music.png")}
                      className="-mt-10 w-24 h-24"
                    />

                    <Text className="text-lg font-bold mt-2 capitalize">
                      Music
                    </Text>
                    <Text className="text-sm text-neutral-400">
                      {categories[12].length} questions
                    </Text>
                  </View>
                </Link>
              </View>
              <View
                className="bg-white flex-1 rounded-xl p-3"
                style={{
                  shadowColor: "#bababa",
                  shadowOffset: {
                    width: 0,
                    height: 2,
                  },
                  shadowOpacity: 0.17,
                  shadowRadius: 2.54,
                  elevation: 15,
                }}
              >
                <Link
                  href={{
                    pathname: "/questions/[categoryId]",
                    params: {
                      categoryId: "newest",
                    },
                  }}
                >
                  <View className="flex flex-col items-start gap-0">
                    <Image
                      source={require("../../assets/category/newest.png")}
                      className="-mt-10"
                    />

                    <Text className="text-lg font-bold mt-2 capitalize">
                      Newest
                    </Text>
                    <Text className="text-sm text-neutral-400">
                      {categories[13].length} questions
                    </Text>
                  </View>
                </Link>
              </View>
            </View>

            {/*  */}
            <View className="flex flex-row w-full gap-6 items-start mt-2">
              <View
                className="bg-white flex-1 rounded-xl p-3 -mt-12"
                style={{
                  shadowColor: "#bababa",
                  shadowOffset: {
                    width: 0,
                    height: 2,
                  },
                  shadowOpacity: 0.17,
                  shadowRadius: 2.54,
                  elevation: 15,
                }}
              >
                <Link
                  href={{
                    pathname: "/questions/[categoryId]",
                    params: {
                      categoryId: "people",
                    },
                  }}
                >
                  <View className="flex flex-col items-start gap-0">
                    <Image
                      source={require("../../assets/category/people.png")}
                      className="-mt-10 w-24 h-24"
                    />

                    <Text className="text-lg font-bold mt-2 capitalize">
                      People
                    </Text>
                    <Text className="text-sm text-neutral-400">
                      {categories[14].length} questions
                    </Text>
                  </View>
                </Link>
              </View>
              <View
                className="bg-white flex-1 rounded-xl p-3"
                style={{
                  shadowColor: "#bababa",
                  shadowOffset: {
                    width: 0,
                    height: 2,
                  },
                  shadowOpacity: 0.17,
                  shadowRadius: 2.54,
                  elevation: 15,
                }}
              >
                <Link
                  href={{
                    pathname: "/questions/[categoryId]",
                    params: {
                      categoryId: "religionFaith",
                    },
                  }}
                >
                  <View className="flex flex-col items-start gap-0">
                    <Image
                      source={require("../../assets/category/religion-faith.png")}
                      className="-mt-10"
                    />

                    <Text className="text-lg font-bold mt-2 capitalize">
                      Religion & Faith
                    </Text>
                    <Text className="text-sm text-neutral-400">
                      {categories[15].length} questions
                    </Text>
                  </View>
                </Link>
              </View>
            </View>

            {/*  */}
            <View className="flex flex-row w-full gap-6 items-start mt-2">
              <View
                className="bg-white flex-1 rounded-xl p-3 -mt-16"
                style={{
                  shadowColor: "#bababa",
                  shadowOffset: {
                    width: 0,
                    height: 2,
                  },
                  shadowOpacity: 0.17,
                  shadowRadius: 2.54,
                  elevation: 15,
                }}
              >
                <Link
                  href={{
                    pathname: "/questions/[categoryId]",
                    params: {
                      categoryId: "science",
                    },
                  }}
                >
                  <View className="flex flex-col items-start gap-0">
                    <Image
                      source={require("../../assets/category/science.png")}
                      className="-mt-10 w-24 h-24"
                    />

                    <Text className="text-lg font-bold mt-2 capitalize">
                      Science & Tech
                    </Text>
                    <Text className="text-sm text-neutral-400">
                      {categories[16].length} questions
                    </Text>
                  </View>
                </Link>
              </View>
              <View
                className="bg-white flex-1 rounded-xl p-3"
                style={{
                  shadowColor: "#bababa",
                  shadowOffset: {
                    width: 0,
                    height: 2,
                  },
                  shadowOpacity: 0.17,
                  shadowRadius: 2.54,
                  elevation: 15,
                }}
              >
                <Link
                  href={{
                    pathname: "/questions/[categoryId]",
                    params: {
                      categoryId: "sports",
                    },
                  }}
                >
                  <View className="flex flex-col items-start gap-0">
                    <Image
                      source={require("../../assets/category/sports.png")}
                      className="-mt-10"
                    />

                    <Text className="text-lg font-bold mt-2 capitalize">
                      Sports
                    </Text>
                    <Text className="text-sm text-neutral-400">
                      {categories[17].length} questions
                    </Text>
                  </View>
                </Link>
              </View>
            </View>

            {/*  */}
            <View className="flex flex-row w-full gap-6 items-start mt-2">
              <View
                className="bg-white flex-1 rounded-xl p-3 -mt-20"
                style={{
                  shadowColor: "#bababa",
                  shadowOffset: {
                    width: 0,
                    height: 2,
                  },
                  shadowOpacity: 0.17,
                  shadowRadius: 2.54,
                  elevation: 15,
                }}
              >
                <Link
                  href={{
                    pathname: "/questions/[categoryId]",
                    params: {
                      categoryId: "television",
                    },
                  }}
                >
                  <View className="flex flex-col items-start gap-0">
                    <Image
                      source={require("../../assets/category/television.png")}
                      className="-mt-10 w-24 h-24"
                    />

                    <Text className="text-lg font-bold mt-2 capitalize">
                      Television
                    </Text>
                    <Text className="text-sm text-neutral-400">
                      {categories[18].length} questions
                    </Text>
                  </View>
                </Link>
              </View>
              <View
                className="bg-white flex-1 rounded-xl p-3"
                style={{
                  shadowColor: "#bababa",
                  shadowOffset: {
                    width: 0,
                    height: 2,
                  },
                  shadowOpacity: 0.17,
                  shadowRadius: 2.54,
                  elevation: 15,
                }}
              >
                <Link
                  href={{
                    pathname: "/questions/[categoryId]",
                    params: {
                      categoryId: "videoGames",
                    },
                  }}
                >
                  <View className="flex flex-col items-start gap-0">
                    <Image
                      source={require("../../assets/category/video-games.png")}
                      className="-mt-9"
                    />

                    <Text className="text-lg font-bold mt-2 capitalize">
                      Video Games
                    </Text>
                    <Text className="text-sm text-neutral-400">
                      {categories[19].length} questions
                    </Text>
                  </View>
                </Link>
              </View>
            </View>

            {/*  */}
            <View className="flex flex-row w-1/2 gap-6 items-start mt-2">
              <View
                className="bg-white w-full rounded-xl p-3 -mt-[94px]"
                style={{
                  shadowColor: "#bababa",
                  shadowOffset: {
                    width: 0,
                    height: 2,
                  },
                  shadowOpacity: 0.17,
                  shadowRadius: 2.54,
                  elevation: 15,
                }}
              >
                <Link
                  href={{
                    pathname: "/questions/[categoryId]",
                    params: {
                      categoryId: "world",
                    },
                  }}
                >
                  <View className="flex flex-col items-start gap-0">
                    <Image
                      source={require("../../assets/category/world.png")}
                      className="-mt-8 w-24 h-24"
                    />

                    <Text className="text-lg font-bold mt-2 capitalize">
                      World
                    </Text>
                    <Text className="text-sm text-neutral-400">
                      {categories[20].length} questions
                    </Text>
                  </View>
                </Link>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;

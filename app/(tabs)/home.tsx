import { Link } from "expo-router";
import React from "react";
import { Image, ScrollView, Text, View } from "react-native";
import { categories } from "@/data/utils";
import { useTheme } from "@/components/themeContext/ThemeContext";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Home = () => {
  // for testing
  // AsyncStorage.removeItem("hasShownWelcome");
  const { theme } = useTheme();

  return (
    <View className="flex-1 justify-center items-center">
      <ScrollView
        style={{ flex: 1 }}
        className={`w-full ${
          theme === "dark" ? "bg-[#1c1c1c]" : "bg-[#fafafa]"
        }`}
      >
        <View className="w-full p-5">
          <View className="flex flex-col flex-wrap w-full gap-5 my-10">
            <View className="flex flex-row w-full gap-6 items-start">
              <View
                className="flex-1 rounded-xl p-3"
                style={{
                  shadowColor: theme === "dark" ? "#000" : "#bababa",
                  shadowOffset: {
                    width: 0,
                    height: 2,
                  },
                  shadowOpacity: 0.17,
                  shadowRadius: 2.54,
                  elevation: 15,
                  backgroundColor: theme === "dark" ? "#323232" : "white",
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

                    <Text
                      className="text-lg font-bold mt-2 capitalize"
                      style={{
                        color: theme === "dark" ? "#fff" : "#000",
                      }}
                    >
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
                  shadowColor: theme === "dark" ? "#000" : "#bababa",
                  shadowOffset: {
                    width: 0,
                    height: 2,
                  },
                  shadowOpacity: 0.17,
                  shadowRadius: 2.54,
                  elevation: 15,
                  backgroundColor: theme === "dark" ? "#323232" : "white",
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

                    <Text
                      className="text-lg font-bold mt-2 capitalize"
                      style={{
                        color: theme === "dark" ? "#fff" : "#000",
                      }}
                    >
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
                  shadowColor: theme === "dark" ? "#000" : "#bababa",
                  shadowOffset: {
                    width: 0,
                    height: 2,
                  },
                  shadowOpacity: 0.17,
                  shadowRadius: 2.54,
                  elevation: 15,
                  backgroundColor: theme === "dark" ? "#323232" : "white",
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

                    <Text
                      className="text-lg font-bold mt-2 capitalize"
                      style={{
                        color: theme === "dark" ? "#fff" : "#000",
                      }}
                    >
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
                  shadowColor: theme === "dark" ? "#000" : "#bababa",
                  shadowOffset: {
                    width: 0,
                    height: 2,
                  },
                  shadowOpacity: 0.17,
                  shadowRadius: 2.54,
                  elevation: 15,
                  backgroundColor: theme === "dark" ? "#323232" : "white",
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

                    <Text
                      className="text-lg font-bold mt-2 capitalize"
                      style={{
                        color: theme === "dark" ? "#fff" : "#000",
                      }}
                    >
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
                  shadowColor: theme === "dark" ? "#000" : "#bababa",
                  shadowOffset: {
                    width: 0,
                    height: 2,
                  },
                  shadowOpacity: 0.17,
                  shadowRadius: 2.54,
                  elevation: 15,
                  backgroundColor: theme === "dark" ? "#323232" : "white",
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

                    <Text
                      className="text-lg font-bold mt-2 capitalize"
                      style={{
                        color: theme === "dark" ? "#fff" : "#000",
                      }}
                    >
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
                  shadowColor: theme === "dark" ? "#000" : "#bababa",
                  shadowOffset: {
                    width: 0,
                    height: 2,
                  },
                  shadowOpacity: 0.17,
                  shadowRadius: 2.54,
                  elevation: 15,
                  backgroundColor: theme === "dark" ? "#323232" : "white",
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

                    <Text
                      className="text-lg font-bold mt-2 capitalize"
                      style={{
                        color: theme === "dark" ? "#fff" : "#000",
                      }}
                    >
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
                  shadowColor: theme === "dark" ? "#000" : "#bababa",
                  shadowOffset: {
                    width: 0,
                    height: 2,
                  },
                  shadowOpacity: 0.17,
                  shadowRadius: 2.54,
                  elevation: 15,
                  backgroundColor: theme === "dark" ? "#323232" : "white",
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

                    <Text
                      className="text-lg font-bold mt-2 capitalize"
                      style={{
                        color: theme === "dark" ? "#fff" : "#000",
                      }}
                    >
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
                  shadowColor: theme === "dark" ? "#000" : "#bababa",
                  shadowOffset: {
                    width: 0,
                    height: 2,
                  },
                  shadowOpacity: 0.17,
                  shadowRadius: 2.54,
                  elevation: 15,
                  backgroundColor: theme === "dark" ? "#323232" : "white",
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

                    <Text
                      className="text-lg font-bold mt-2 capitalize"
                      style={{
                        color: theme === "dark" ? "#fff" : "#000",
                      }}
                    >
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
                  shadowColor: theme === "dark" ? "#000" : "#bababa",
                  shadowOffset: {
                    width: 0,
                    height: 2,
                  },
                  shadowOpacity: 0.17,
                  shadowRadius: 2.54,
                  elevation: 15,
                  backgroundColor: theme === "dark" ? "#323232" : "white",
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

                    <Text
                      className="text-lg font-bold mt-2 capitalize"
                      style={{
                        color: theme === "dark" ? "#fff" : "#000",
                      }}
                    >
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
                  shadowColor: theme === "dark" ? "#000" : "#bababa",
                  shadowOffset: {
                    width: 0,
                    height: 2,
                  },
                  shadowOpacity: 0.17,
                  shadowRadius: 2.54,
                  elevation: 15,
                  backgroundColor: theme === "dark" ? "#323232" : "white",
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

                    <Text
                      className="text-lg font-bold mt-2 capitalize"
                      style={{
                        color: theme === "dark" ? "#fff" : "#000",
                      }}
                    >
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
                  shadowColor: theme === "dark" ? "#000" : "#bababa",
                  shadowOffset: {
                    width: 0,
                    height: 2,
                  },
                  shadowOpacity: 0.17,
                  shadowRadius: 2.54,
                  elevation: 15,
                  backgroundColor: theme === "dark" ? "#323232" : "white",
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

                    <Text
                      className="text-lg font-bold mt-2 capitalize"
                      style={{
                        color: theme === "dark" ? "#fff" : "#000",
                      }}
                    >
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
                  shadowColor: theme === "dark" ? "#000" : "#bababa",
                  shadowOffset: {
                    width: 0,
                    height: 2,
                  },
                  shadowOpacity: 0.17,
                  shadowRadius: 2.54,
                  elevation: 15,
                  backgroundColor: theme === "dark" ? "#323232" : "white",
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

                    <Text
                      className="text-lg font-bold mt-2 capitalize"
                      style={{
                        color: theme === "dark" ? "#fff" : "#000",
                      }}
                    >
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
                  shadowColor: theme === "dark" ? "#000" : "#bababa",
                  shadowOffset: {
                    width: 0,
                    height: 2,
                  },
                  shadowOpacity: 0.17,
                  shadowRadius: 2.54,
                  elevation: 15,
                  backgroundColor: theme === "dark" ? "#323232" : "white",
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

                    <Text
                      className="text-lg font-bold mt-2 capitalize"
                      style={{
                        color: theme === "dark" ? "#fff" : "#000",
                      }}
                    >
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
                  shadowColor: theme === "dark" ? "#000" : "#bababa",
                  shadowOffset: {
                    width: 0,
                    height: 2,
                  },
                  shadowOpacity: 0.17,
                  shadowRadius: 2.54,
                  elevation: 15,
                  backgroundColor: theme === "dark" ? "#323232" : "white",
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

                    <Text
                      className="text-lg font-bold mt-2 capitalize"
                      style={{
                        color: theme === "dark" ? "#fff" : "#000",
                      }}
                    >
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
                  shadowColor: theme === "dark" ? "#000" : "#bababa",
                  shadowOffset: {
                    width: 0,
                    height: 2,
                  },
                  shadowOpacity: 0.17,
                  shadowRadius: 2.54,
                  elevation: 15,
                  backgroundColor: theme === "dark" ? "#323232" : "white",
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

                    <Text
                      className="text-lg font-bold mt-2 capitalize"
                      style={{
                        color: theme === "dark" ? "#fff" : "#000",
                      }}
                    >
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
                  shadowColor: theme === "dark" ? "#000" : "#bababa",
                  shadowOffset: {
                    width: 0,
                    height: 2,
                  },
                  shadowOpacity: 0.17,
                  shadowRadius: 2.54,
                  elevation: 15,
                  backgroundColor: theme === "dark" ? "#323232" : "white",
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

                    <Text
                      className="text-lg font-bold mt-2 capitalize"
                      style={{
                        color: theme === "dark" ? "#fff" : "#000",
                      }}
                    >
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
                  shadowColor: theme === "dark" ? "#000" : "#bababa",
                  shadowOffset: {
                    width: 0,
                    height: 2,
                  },
                  shadowOpacity: 0.17,
                  shadowRadius: 2.54,
                  elevation: 15,
                  backgroundColor: theme === "dark" ? "#323232" : "white",
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

                    <Text
                      className="text-lg font-bold mt-2 capitalize"
                      style={{
                        color: theme === "dark" ? "#fff" : "#000",
                      }}
                    >
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
                  shadowColor: theme === "dark" ? "#000" : "#bababa",
                  shadowOffset: {
                    width: 0,
                    height: 2,
                  },
                  shadowOpacity: 0.17,
                  shadowRadius: 2.54,
                  elevation: 15,
                  backgroundColor: theme === "dark" ? "#323232" : "white",
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

                    <Text
                      className="text-lg font-bold mt-2 capitalize"
                      style={{
                        color: theme === "dark" ? "#fff" : "#000",
                      }}
                    >
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
                  shadowColor: theme === "dark" ? "#000" : "#bababa",
                  shadowOffset: {
                    width: 0,
                    height: 2,
                  },
                  shadowOpacity: 0.17,
                  shadowRadius: 2.54,
                  elevation: 15,
                  backgroundColor: theme === "dark" ? "#323232" : "white",
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

                    <Text
                      className="text-lg font-bold mt-2 capitalize"
                      style={{
                        color: theme === "dark" ? "#fff" : "#000",
                      }}
                    >
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
                  shadowColor: theme === "dark" ? "#000" : "#bababa",
                  shadowOffset: {
                    width: 0,
                    height: 2,
                  },
                  shadowOpacity: 0.17,
                  shadowRadius: 2.54,
                  elevation: 15,
                  backgroundColor: theme === "dark" ? "#323232" : "white",
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

                    <Text
                      className="text-lg font-bold mt-2 capitalize"
                      style={{
                        color: theme === "dark" ? "#fff" : "#000",
                      }}
                    >
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
                  shadowColor: theme === "dark" ? "#000" : "#bababa",
                  shadowOffset: {
                    width: 0,
                    height: 2,
                  },
                  shadowOpacity: 0.17,
                  shadowRadius: 2.54,
                  elevation: 15,
                  backgroundColor: theme === "dark" ? "#323232" : "white",
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

                    <Text
                      className="text-lg font-bold mt-2 capitalize"
                      style={{
                        color: theme === "dark" ? "#fff" : "#000",
                      }}
                    >
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

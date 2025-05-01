import animals from "./animals.json";
import brainTeasers from "./brain-teasers.json";
import celebrities from "./celebrities.json";
import entertainment from "./entertainment.json";
import forKids from "./for-kids.json";
import general from "./general.json";
import geography from "./geography.json";
import history from "./history.json";
import hobbies from "./hobbies.json";
import humanities from "./humanities.json";
import literature from "./literature.json";
import movies from "./movies.json";
import music from "./music.json";
import newest from "./newest.json";
import people from "./people.json";
import religionFaith from "./religion-faith.json";
import science from "./science-technology.json";
import sports from "./sports.json";
import television from "./television.json";
import videoGames from "./video-games.json";
import world from "./world.json";

export const categories = [
  {
    id: "animals",
    title: "Animals",
    image: require("../assets/category/animal.png"),
    imageClass: "-mt-10",
    wrapperClass: "",
    length: animals.length,
  },
  {
    id: "brainTeasers",
    title: "Brain Teasers",
    image: require("../assets/category/brain-teasers.png"),
    imageClass: "-mt-16 w-40 h-40",
    wrapperClass: "",
    length: brainTeasers.length,
  },
  {
    id: "celebrities",
    title: "Celebrities",
    image: require("../assets/category/celebrities.png"),
    imageClass: "-mt-8 w-28 h-28",
    wrapperClass: "-mt-6",
    length: celebrities.length,
  },
  {
    id: "entertainment",
    title: "Entertainment",
    image: require("../assets/category/entertainment.png"),
    imageClass: "-mt-8",
    wrapperClass: "-mt-2",
    length: entertainment.length,
  },
  {
    id: "forKids",
    title: "For Kids",
    image: require("../assets/category/for-kids.png"),
    imageClass: "-mt-11 w-32 h-32",
    wrapperClass: "-mt-5",
    length: forKids.length,
  },
  {
    id: "general",
    title: "General",
    image: require("../assets/category/general.png"),
    imageClass: "-mt-10",
    wrapperClass: "",
    length: general.length,
  },
  {
    id: "geography",
    title: "Geography",
    image: require("../assets/category/geography.png"),
    imageClass: "-mt-8 w-24 h-24",
    wrapperClass: "-mt-3.5",
    length: geography.length,
  },
  {
    id: "history",
    title: "History",
    image: require("../assets/category/history.png"),
    imageClass: "-mt-10",
    wrapperClass: "",
    length: history.length,
  },
  {
    id: "hobbies",
    title: "Hobbies",
    image: require("../assets/category/hobbies.png"),
    imageClass: "-mt-10 w-28 h-28",
    wrapperClass: "-mt-6",
    length: hobbies.length,
  },
  {
    id: "humanities",
    title: "Humanities",
    image: require("../assets/category/humanities.png"),
    imageClass: "-mt-10",
    wrapperClass: "",
    length: humanities.length,
  },
  {
    id: "literature",
    title: "Literature",
    image: require("../assets/category/literature.png"),
    imageClass: "-mt-8 w-24 h-24",
    wrapperClass: "-mt-6",
    length: literature.length,
  },
  {
    id: "movies",
    title: "Movies",
    image: require("../assets/category/movies.png"),
    imageClass: "-mt-10",
    wrapperClass: "",
    length: movies.length,
  },
  {
    id: "music",
    title: "Music",
    image: require("../assets/category/music.png"),
    imageClass: "-mt-10 w-24 h-24",
    wrapperClass: "-mt-8",
    length: music.length,
  },
  {
    id: "newest",
    title: "Newest",
    image: require("../assets/category/newest.png"),
    imageClass: "-mt-10",
    wrapperClass: "",
    length: newest.length,
  },
  {
    id: "people",
    title: "People",
    image: require("../assets/category/people.png"),
    imageClass: "-mt-10 w-24 h-24",
    wrapperClass: "-mt-12",
    length: people.length,
  },
  {
    id: "religionFaith",
    title: "Religion & Faith",
    image: require("../assets/category/religion-faith.png"),
    imageClass: "-mt-10",
    wrapperClass: "",
    length: religionFaith.length,
  },
  {
    id: "science",
    title: "Science & Tech",
    image: require("../assets/category/science.png"),
    imageClass: "-mt-10 w-24 h-24",
    wrapperClass: "-mt-16",
    length: science.length,
  },
  {
    id: "sports",
    title: "Sports",
    image: require("../assets/category/sports.png"),
    imageClass: "-mt-10",
    wrapperClass: "",
    length: sports.length,
  },
  {
    id: "television",
    title: "Television",
    image: require("../assets/category/television.png"),
    imageClass: "-mt-10 w-24 h-24",
    wrapperClass: "-mt-20",
    length: television.length,
  },
  {
    id: "videoGames",
    title: "Video Games",
    image: require("../assets/category/video-games.png"),
    imageClass: "-mt-9",
    wrapperClass: "",
    length: videoGames.length,
  },
  {
    id: "world",
    title: "World",
    image: require("../assets/category/world.png"),
    imageClass: "-mt-8 w-24 h-24",
    wrapperClass: "-mt-[94px]",
    length: world.length,
  },
];

export type Theme = "light" | "dark";
export interface ThemeContextValue {
  theme: Theme;
  toggleTheme: () => void;
}

export const THEME_STORAGE_KEY = "@user-theme";

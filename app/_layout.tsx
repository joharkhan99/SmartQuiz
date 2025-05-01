import "../styles/global.css";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import StackNavigator from "@/components/navigation/StackNavigator";
import {
  ThemeProvider,
  useTheme,
} from "@/components/themeContext/ThemeContext";
import { StatusBar } from "react-native";

const ThemedStatusBar = () => {
  const { theme } = useTheme();

  return (
    <StatusBar
      barStyle={theme === "dark" ? "light-content" : "dark-content"}
      backgroundColor={theme === "dark" ? "#000" : "#fff"}
    />
  );
};

export default function RootLayout() {
  return (
    <ThemeProvider>
      <SafeAreaProvider>
        <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
          <ThemedStatusBar />
          <StackNavigator />
        </SafeAreaView>
      </SafeAreaProvider>
    </ThemeProvider>
  );
}

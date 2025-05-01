import { useTheme } from "@/components/themeContext/ThemeContext";
import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import { TouchableOpacity } from "react-native";

export default function TabLayout() {
  const { theme, toggleTheme } = useTheme();

  return (
    <Tabs>
      <Tabs.Screen
        name="home"
        options={{
          title: "Smart Quiz",
          tabBarStyle: { display: "none" },
          headerRight: () => {
            return (
              <TouchableOpacity className="mr-5" onPress={toggleTheme}>
                {theme === "dark" ? (
                  <Ionicons name="sunny" size={24} color="white" />
                ) : (
                  <Ionicons name="moon" size={24} color="black" />
                )}
              </TouchableOpacity>
            );
          },
          headerStyle: {
            backgroundColor: theme === "dark" ? "#1c1c1c" : "#fafafa",
            elevation: 0,
            height: 60,
          },
          headerTitleStyle: {
            fontFamily: "serif",
            fontStyle: "italic",
            fontWeight: "900",
            color: theme === "dark" ? "white" : "black",
          },
        }}
      />
    </Tabs>
  );
}

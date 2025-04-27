import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import { TouchableOpacity } from "react-native";

export default function TabLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="home"
        options={{
          title: "Smart Quiz",
          tabBarStyle: { display: "none" },
          headerRight: () => {
            return (
              <TouchableOpacity className="mr-5">
                {/* // <Ionicons name="sunny" size={24} color="black" /> */}
                <Ionicons name="moon" size={24} color="black" />
              </TouchableOpacity>
            );
          },
          headerStyle: {
            backgroundColor: "#fafafa",
            elevation: 0,
            height: 60,
          },
          headerTitleStyle: {
            fontFamily: "serif",
            fontStyle: "italic",
            fontWeight: "900",
          },
        }}
      />
    </Tabs>
  );
}

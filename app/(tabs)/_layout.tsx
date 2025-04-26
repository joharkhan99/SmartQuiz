import { Tabs } from "expo-router";

export default function TabLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="home"
        options={{
          title: "Smart Quiz",
          tabBarStyle: { display: "none" },
          headerStyle: {
            margin: 0,
            backgroundColor: "#fafafa",
            elevation: 0,
            height: 40,
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

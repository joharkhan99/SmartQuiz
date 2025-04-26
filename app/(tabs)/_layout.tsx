import { Tabs } from "expo-router";

export default function TabLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          tabBarStyle: { display: "none" },
          tabBarActiveBackgroundColor: "rgba(0,0,0,0.1)",
        }}
      />
    </Tabs>
  );
}

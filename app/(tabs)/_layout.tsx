import { Tabs } from "expo-router";

export default function TabLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="home"
        options={{
          title: "Smart Quiz",
          tabBarStyle: { display: "none" },
          tabBarActiveBackgroundColor: "rgba(0,0,0,0.1)",
          headerStyle: {
            margin: 0,
            backgroundColor: "transparent",
            elevation: 0,
          },
        }}
      />
    </Tabs>
  );
}

import AsyncStorage from "@react-native-async-storage/async-storage";
import { Redirect } from "expo-router";
import { useEffect, useState } from "react";
import { Text } from "react-native";

export default function Page() {
  const [showWelcome, setShowWelcome] = useState<boolean | null>(null);

  useEffect(() => {
    AsyncStorage.getItem("hasShownWelcome").then((value) => {
      // if we've already shown it => skip Welcome
      setShowWelcome(value !== "true");
    });
  }, []);

  // still loading AsyncStorage?
  if (showWelcome === null) {
    return null; // or a splash screen
  }

  return <Redirect href={showWelcome ? "/getstarted" : "/(tabs)/home"} />;
}

import "../styles/global.css";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import StackNavigator from "@/components/navigation/StackNavigator";

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
        {/* <StatusBar style="auto" /> */}
        <StackNavigator />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

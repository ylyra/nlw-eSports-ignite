import {
  Inter_400Regular,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_900Black,
  useFonts,
} from "@expo-google-fonts/inter";
import * as SplashScreenDep from "expo-splash-screen";
import { useCallback, useEffect, useState } from "react";
import { StatusBar, Text, View } from "react-native";

import { Background } from "./src/components/Background";
import { SplashScreen } from "./src/components/SplashScreen";
import { Home } from "./src/screens/Home";

// Keep the splash screen visible while we fetch resources
SplashScreenDep.preventAutoHideAsync();

export default function App() {
  const [isFontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_900Black,
  });

  if (!isFontsLoaded) {
    return <SplashScreen />;
  }

  return (
    <Background>
      <Home />
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
    </Background>
  );
}

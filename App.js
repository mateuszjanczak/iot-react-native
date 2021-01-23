import React from 'react';
import { useFonts, Oswald_700Bold } from '@expo-google-fonts/oswald';
import { Roboto_300Light, Roboto_400Regular } from '@expo-google-fonts/roboto';
import Home from "./Home";
import {View} from "react-native";

export default function App() {
  let [fontsLoaded] = useFonts({
    Oswald_700Bold,
    Roboto_400Regular,
    Roboto_300Light
  });

  if (!fontsLoaded) {
    return <View/>;
  }

  return (
      <Home />
  );
}
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import PlayButton from "../screens/PlayButton";
import RootNavigation from "./index";

const Stack = createNativeStackNavigator();

export default function InitialStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="Play"
      >
        <Stack.Screen name="Play" component={PlayButton} />
        <Stack.Screen name="Route Logic" component={RootNavigation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

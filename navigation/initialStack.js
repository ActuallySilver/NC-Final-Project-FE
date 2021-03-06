import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import PlayButton from "../screens/PlayButton";
import RootNavigation from ".";

const Stack = createStackNavigator();

export default function InitialStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Play"
    >
      <Stack.Screen name="Play" component={PlayButton} options={{ unmountOnBlur: true }}/>
      <Stack.Screen name="Route Logic" component={RootNavigation} options={{ unmountOnBlur: true }}/>
    </Stack.Navigator>
  );
}

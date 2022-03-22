import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";

import HomeScreen from "../screens/Home";
import Animals from "../screens/Animals";

const Drawer = createDrawerNavigator();

export default function UserStack() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRootName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Animals" component={Animals} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

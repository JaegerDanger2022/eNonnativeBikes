import { View, Text, StatusBar } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import AuthNavigator from "../AuthNavigator/AuthNavigator";
import MainStackNavigator from "../MainStackNavigator/MainStackNavigator";
import BottomTabNavigator from "../BottomTabsNavigator/BottomTabsNavigator";

const RootNavigator = () => {
  return (
    <NavigationContainer>
      {/* <AuthNavigator /> */}
      {/* <MainStackNavigator /> */}
      <BottomTabNavigator />
      <StatusBar style="auto" />
    </NavigationContainer>
  );
};

export default RootNavigator;

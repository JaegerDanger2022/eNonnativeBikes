import { View, Text, StatusBar } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import AuthNavigator from "../AuthNavigator/AuthNavigator";

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <AuthNavigator />
      <StatusBar style="auto" />
    </NavigationContainer>
  );
};

export default RootNavigator;

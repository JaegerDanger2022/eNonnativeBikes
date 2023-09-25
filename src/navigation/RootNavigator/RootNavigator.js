import {  StatusBar } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import AuthNavigator from "../AuthNavigator/AuthNavigator";
import BottomTabNavigator from "../BottomTabsNavigator/BottomTabsNavigator";
import { PaperProvider, useTheme } from "react-native-paper";
import { lightTheme } from "../../constants/lightTheme";
import { useAuthentication } from "../../../app/hooks/useAuthentication";

const RootNavigator = () => {
  const theme = useTheme()
  const {user} = useAuthentication()
  return (
    <NavigationContainer>
        <StatusBar
        barStyle={colorScheme = "light-content"}
        backgroundColor={theme.colors.primary}
      />
          <PaperProvider theme={lightTheme}>
          {user ?  <BottomTabNavigator /> : <AuthNavigator />}
          {/* <AuthNavigator /> */}
          </PaperProvider>
   
    </NavigationContainer>
  );
};

export default RootNavigator;

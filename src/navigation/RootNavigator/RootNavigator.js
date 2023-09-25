import {  StatusBar } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import AuthNavigator from "../AuthNavigator/AuthNavigator"; 
import { PaperProvider, useTheme } from "react-native-paper";
import { lightTheme } from "../../constants/lightTheme";
import { useAuthentication } from "../../../app/hooks/useAuthentication";
import SideDrawer from "../SideDrawer/SideDrawer";


const RootNavigator = () => {
  const theme = useTheme()
  const {user} = useAuthentication()
  return (
    <NavigationContainer>
        <StatusBar

        barStyle={colorScheme = "dark-content"}
        backgroundColor={theme.colors.primary}
      />
          <PaperProvider theme={lightTheme}>
          {user ?  <SideDrawer /> : <AuthNavigator />} 

          </PaperProvider>
   
    </NavigationContainer>
  );
};

export default RootNavigator;

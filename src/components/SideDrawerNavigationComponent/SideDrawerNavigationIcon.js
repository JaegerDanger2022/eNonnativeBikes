import { View, Text } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";

const SideDrawerNavigationIcon = ({ iconName }) => {
  return (
    <View>
      <AntDesign
        name={iconName}
        size={30}
        color="black"
        style={{ marginHorizontal: 20 }}
      />
    </View>
  );
};

export default SideDrawerNavigationIcon;

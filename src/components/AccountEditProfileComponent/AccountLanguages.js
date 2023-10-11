import { View, Text } from "react-native";
import React from "react";

const AccountLanguages = ({ countryName, iconName }) => {
  const imageSource = require("../../../assets/images/mtnLogo/united-states-flag.png");
  return (
    <View
      style={{
        position: "relative",
        marginVertical: 70,
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <View
        style={{
          flexDirection: "row",
          gap: 20,
          alignItems: "center",
        }}
      >
        <Image source={imageSource} style={{ width: "20%", height: "70%" }} />
        <Text>{countryName}</Text>
      </View>
      <View>
        <Ionicons name={iconName} size={24} color="black" />
      </View>
    </View>
  );
};

export default AccountLanguages;

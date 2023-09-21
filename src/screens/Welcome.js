import { ImageBackground, StyleSheet, View } from "react-native";
import React from "react";
import ActionButton from "../components/ActionButton";
import { Avatar } from "react-native-paper";
import { globalStyles } from "../constants/styles/global";

const Welcome = () => {
  return (
    <ImageBackground
      source={require("../../assets/images/welcomeImage.jpg")}
      style={{ height: "100%", width: "100%", ...globalStyles.container }}
    >
      <View
        style={{ flex: 2, flexDirection: "row", justifyContent: "flex-end" }}
      >
        <Avatar.Image
          size={100}
          source={require("../../assets/images/enonnativeLogo.png")}
          style={{ backgroundColor: "white" }}
        />
      </View>

      <View style={{ flex: 5 }}>
        <ActionButton label={"Join Us"} />
      </View>
    </ImageBackground>
  );
};

export default Welcome;

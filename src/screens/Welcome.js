import { ImageBackground, View } from "react-native";
import React from "react";
import ActionButton from "../components/ActionButton";
import { Avatar, Text } from "react-native-paper";
import { globalStyles } from "../constants/styles/global";
import { SafeAreaView } from "react-native-safe-area-context";

const Welcome = ({ navigation }) => {
  return (
    <ImageBackground
      source={require("../../assets/images/welcomeImage.jpg")}
      style={{ height: "100%", width: "100%", ...globalStyles.container }}
    >
      <SafeAreaView style={{ flex: 1, width: "100%" }}>
        <View
          style={{ flex: 2, flexDirection: "row", justifyContent: "flex-end" }}
        >
          <Avatar.Image
            size={100}
            source={require("../../assets/images/enonnativeLogo.png")}
            style={{
              backgroundColor: "white",
              marginRight: 15,
              marginTop: 10,
            }}
          />
        </View>

        <View
          style={{
            flex: 5,
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
          }}
        >
          <ActionButton
            label={"Join Us"}
            handleActionButton={() => navigation.navigate("SignUp")}
          />
        </View>
        <View>
          <Text>
            By clicking 'Get Started you accept the user agreement and privacy
            policy'
          </Text>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default Welcome;

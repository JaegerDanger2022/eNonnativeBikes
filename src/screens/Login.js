import { View, Text } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomTextInput from "../components/CustomTextInput";
import ActionButton from "../components/ActionButton";
import { Avatar, Divider } from "react-native-paper";
import CustomCheckBox from "../components/CustomCheckBox";

const Login = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  //   checkbox state
  const [checked, setChecked] = useState(false);

  return (
    <SafeAreaView>
      <View style={{ paddingLeft: 10 }}>
        <View style={{ gap: 50, alignItems: "center" }}>
          <Text style={{ fontSize: 50, fontFamily: "Lexend_300Light" }}>
            Create Account
          </Text>
          <Text>Sign up to get started!</Text>
          {/* name */}
          <CustomTextInput
            label={"Name"}
            value={name}
            textInputOnchange={(text) => setName(text)}
          />
          {/* phone */}
          <CustomTextInput
            label={"Phone"}
            value={phone}
            textInputOnchange={(text) => setPhone(text)}
          />
          {/* name */}
          <CustomTextInput
            label={"Name"}
            value={email}
            textInputOnchange={(text) => setEmail(text)}
          />
        </View>
        <View
          style={{
            paddingVertical: 10,
            paddingHorizontal: 10,
            width: 380,
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          {/* checkbox */}
          <CustomCheckBox
            checked={checked}
            onCheckBoxPress={() => {
              setChecked(!checked);
            }}
          />
          <Text
            style={{
              fontSize: 15,
              fontFamily: "Lexend_300Light",
              paddingLeft: 5,
            }}
          >
            I agree with the Terms of Service and Privacy Policy
          </Text>
        </View>
        {/* button */}
        <View style={{ alignItems: "center", paddingVertical: 20 }}>
          <ActionButton
            label={"Create Account"}
            buttonStyle={{ width: 300 }}
            labelStyle={{ fontSize: 20, fontFamily: " Lexend_200ExtraLight" }}
          />
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Divider bold style={{ width: 100 }} />
          <Text
            style={{
              marginHorizontal: 15,
              fontSize: 20,
              fontFamily: " Lexend_100Thin",
            }}
          >
            Or sign up with
          </Text>
          <Divider bold style={{ width: 100 }} />
        </View>
        {/* Social Logins */}
        {/* Google */}
        <Avatar.Image size={24} source={require("../assets/avatar.png")} />
      </View>
    </SafeAreaView>
  );
};

export default Login;

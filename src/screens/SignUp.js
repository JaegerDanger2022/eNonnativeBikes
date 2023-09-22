import {
  View,
  Text,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomTextInput from "../components/CustomTextInput";
import ActionButton from "../components/ActionButton";
import { Avatar, Divider } from "react-native-paper";
import CustomCheckBox from "../components/CustomCheckBox";

const SignUp = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //   checkbox state
  const [checked, setChecked] = useState(false);

  return (
    <SafeAreaView>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={{ paddingLeft: 10 }}>
          {/* titles */}
          <View style={{ paddingLeft: 10, paddingBottom: 15 }}>
            <Text style={{ fontSize: 50, fontFamily: "Lexend_300Light" }}>
              Create Account
            </Text>
            <Text style={{ fontSize: 20, fontFamily: "Lexend_400Regular" }}>
              Sign up to get started!
            </Text>
          </View>
          {/* input fields */}
          <View style={{ gap: 30, alignItems: "center" }}>
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
            {/* email */}
            <CustomTextInput
              label={"Email"}
              value={email}
              textInputOnchange={(text) => setEmail(text)}
            />
            {/* password */}
            <CustomTextInput
              label={"Password"}
              value={password}
              textInputOnchange={(text) => setPassword(text)}
            />
          </View>
          {/* checkbox */}
          <View
            style={{
              paddingVertical: 10,
              paddingHorizontal: 10,
              width: 380,
              flexDirection: "row",
              alignItems: "center",
            }}
          >
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
          <View style={{ alignItems: "center", paddingTop: 20 }}>
            <ActionButton
              label={"Create Account"}
              buttonStyle={{ width: 300, borderRadius: 10, paddingVertical: 5 }}
              labelStyle={{ fontSize: 20, fontFamily: " Lexend_200ExtraLight" }}
            />
          </View>
          {/* divider */}
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              paddingVertical: 40,
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
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              gap: 50,
            }}
          >
            {/* Google */}
            <TouchableOpacity>
              <Avatar.Image
                style={{ backgroundColor: "transparent" }}
                size={50}
                source={require("../../assets/images/socialmedialogos/google.png")}
              />
            </TouchableOpacity>
            {/* Facebook */}
            <TouchableOpacity>
              <Avatar.Image
                style={{ backgroundColor: "transparent" }}
                size={50}
                source={require("../../assets/images/socialmedialogos/facebook.png")}
              />
            </TouchableOpacity>

            {/* apple */}
            <TouchableOpacity>
              <Avatar.Image
                style={{ backgroundColor: "transparent" }}
                size={50}
                source={require("../../assets/images/socialmedialogos/apple.png")}
              />
            </TouchableOpacity>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
};

export default SignUp;

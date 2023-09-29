import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native";
import CustomTextInput from "../../../../components/CustomTextInput";

const AccountUpdate = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ padding: 20 }}>
        <Text style={{ fontSize: 20, fontWeight: "600" }}>
          Please enter your name as it appears on your ID or Passport.
        </Text>
      </View>
      <View style={{ flexDirection: "column", gap: 10, padding: 20 }}>
        <CustomTextInput label={"First Name"} />
        <CustomTextInput label={"Last Name"} />
      </View>
    </SafeAreaView>
  );
};

export default AccountUpdate;

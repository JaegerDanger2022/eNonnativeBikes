import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import ToggleSwitch from "../../../components/ToggleSwitch/ToggleSwitch";
import { Divider } from "react-native-paper";

const AccountCommunicationProduct = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#DED8D8" }}>
      <View style={{ padding: 10 }}>
        <View style={{ flexDirection: "column", gap: 20 }}>
          <View>
            <Text
              style={{ fontSize: 30, fontWeight: "bold", alignSelf: "center" }}
            >
              Our Products
            </Text>
            <Text style={{ fontSize: 10 }}>Register our product for free</Text>
          </View>
          <View style={{ backgroundColor: "#C93D5D" }}>
            <ToggleSwitch name={"E-mail"} />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default AccountCommunicationProduct;

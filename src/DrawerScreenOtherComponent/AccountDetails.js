import { View, Text } from "react-native";
import React from "react";
import { Divider } from "react-native-paper";
import { SafeAreaView } from "react-native";
import { EvilIcons } from "@expo/vector-icons";
import { Foundation } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

const AccountDetails = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View
        style={{
          padding: 20,
          //   margin: 20,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <View style={{ flexDirection: "row", gap: 10, alignItems: "center" }}>
          <EvilIcons name="user" size={30} color="black" />
          <Text style={{ fontSize: 20 }}>UserName</Text>
        </View>
        <View>
          <Text style={{ color: "green" }}>Edit</Text>
        </View>
      </View>
      <Divider />

      {/* =================================== */}
      <View
        style={{
          padding: 20,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <View style={{ flexDirection: "row", gap: 10, alignItems: "center" }}>
          <Foundation name="telephone" size={30} color="black" />
          <Text style={{ fontSize: 20 }}>Telephon no.</Text>
        </View>
        <View>
          <Text style={{ color: "green" }}>Edit</Text>
        </View>
      </View>
      <Divider />
      {/* ========================= */}
      <View
        style={{
          padding: 20,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <View style={{ flexDirection: "row", gap: 10, alignItems: "center" }}>
          <FontAwesome name="envelope-open-o" size={30} color="black" />
          <Text style={{ fontSize: 20 }}>UserName@gmail.com</Text>
        </View>
        <View>
          <Text style={{ color: "green" }}>Edit</Text>
        </View>
      </View>
      <Divider />
    </SafeAreaView>
  );
};

export default AccountDetails;

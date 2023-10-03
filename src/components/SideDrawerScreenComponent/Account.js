import { View, Text } from "react-native";
import React from "react";
import { Button, Divider } from "react-native-paper";
import { SafeAreaView } from "react-native";
import { EvilIcons } from "@expo/vector-icons";

const Account = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View
        style={{ alignItems: "center", justifyContent: "center", padding: 5 }}
      >
        <View>
          <EvilIcons name="user" size={90} color="black" />
        </View>
        <View style={{ alignItems: "center" }}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: "bold",
              alignItems: "center",
            }}
          >
            UserName
          </Text>
          <Text> +233 0467782778 </Text>
        </View>
      </View>

      <Divider style={{ height: 2, backgroundColor: "#F5F4F2" }} />
    </SafeAreaView>
  );
};

export default Account;

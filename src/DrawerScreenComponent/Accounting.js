import { View, Text } from "react-native";
import React from "react";
import { Button, Divider } from "react-native-paper";
import { SafeAreaView } from "react-native";
import { EvilIcons } from "@expo/vector-icons";

const Accounting = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ alignItems: "center", justifyContent: "center" }}>
        <View>
          <EvilIcons name="user" size={60} color="black" />
        </View>
        <View>
          <Text
            style={{
              fontSize: 20,
              fontWeight: "bold",
              alignItems: "flex-start",
            }}
          >
            UserName
          </Text>
          <Text> +233 0467782778 </Text>
        </View>
      </View>

      <Divider style={{ height: 10, backgroundColor: "#F5F4F2" }} />
    </SafeAreaView>
  );
};

export default Accounting;

import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { Divider } from "react-native-paper";
import { TouchableOpacity } from "react-native-gesture-handler";

const AccountCommunication = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#DED8D8" }}>
      <View style={{ padding: 10 }}>
        <View style={{ flexDirection: "column", gap: 20 }}>
          <View>
            <Text
              style={{ fontSize: 30, fontWeight: "bold", alignSelf: "center" }}
            >
              Communication Preference
            </Text>
          </View>
          <Divider />
          <TouchableOpacity onPress={() => navigation.navigate("product")}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Text style={{ fontSize: 17, fontWeight: "700" }}>
                Ride's Product
              </Text>
              <AntDesign name="arrowright" size={24} color="green" />
            </View>
          </TouchableOpacity>
          <Divider />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default AccountCommunication;

import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Divider } from "react-native-paper";
import { Feather } from "@expo/vector-icons";

const SideDrawerItems = ({ label, iconName, icon }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            // backgroundColor: "white",
            alignItems: "flex-start",
            fontWeight: "bold",
            padding: 5,
          }}
        >
          <View style={{ flexDirection: "column" }}>
            <Text style={{ fontSize: 17, fontWeight: "bold" }}>{label}</Text>
            {/* <Text>{cash}</Text> */}
          </View>
          <View>
            <Text>
              <MaterialCommunityIcons name={iconName} size={24} color="green" />
              <Feather name={icon} size={24} color="black" />
            </Text>
          </View>
        </View>
        <Divider style={{ height: 2, backgroundColor: "#008A9A" }} />
      </View>
    </SafeAreaView>
  );
};

export default SideDrawerItems;

import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Divider } from "react-native-paper";

const SideDrawerItems = ({ cash, label, iconName }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View>
        <View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              // backgroundColor: "white",
              alignContent: "center",
              fontWeight: "bold",
              // padding: 10,
            }}
          >
            <View style={{ flexDirection: "column" }}>
              <Text style={{ fontSize: 17, fontWeight: "bold" }}>{label}</Text>
              <Text>{cash}</Text>
            </View>
            <View>
              <MaterialCommunityIcons name={iconName} size={24} color="black" />
            </View>
          </View>
          <Divider style={{ height: 5, backgroundColor: "#F5F4F2" }} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SideDrawerItems;

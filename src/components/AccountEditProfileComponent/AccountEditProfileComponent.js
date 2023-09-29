import { View, Text } from "react-native";
import React from "react";
import { Divider } from "react-native-paper";
import { AntDesign } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";

const AccountEditProfileComponent = ({ address, iconName, edit, icon }) => {
  return (
    <View style={{ padding: 20 }}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            gap: 10,
            alignItems: "center",
          }}
        >
          <Text>
            <AntDesign name={iconName} size={24} color="black" />

            <SimpleLineIcons name={icon} size={24} color="black" />
          </Text>

          <Text style={{ fontWeight: "500", fontSize: 20 }}>{address}</Text>
        </View>
        <View>
          <Text style={{ fontWeight: "500", fontSize: 15, color: "green" }}>
            {edit}
          </Text>
        </View>
      </View>
      <Divider />
    </View>
  );
};

export default AccountEditProfileComponent;

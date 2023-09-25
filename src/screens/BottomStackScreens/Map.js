import { View, Text, SafeAreaView, Pressable } from "react-native";
import React from "react";
import CustomMap from "../../components/MapComponents/CustomMap";
import { Ionicons } from "@expo/vector-icons";
import { clearAllData } from "../../../app/utils/AsyncStorage/ClearData";

const Map = ({ navigation }) => {
  // clearAllData()
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <CustomMap />
        <View
          style={{
            position: "absolute",
            zIndex: 10,
            top: 80,
            left: 16,
          }}
        >
          <Pressable onPress={() => navigation.openDrawer()}>
            <Ionicons name="menu-sharp" size={40} color="black" />
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default Map;

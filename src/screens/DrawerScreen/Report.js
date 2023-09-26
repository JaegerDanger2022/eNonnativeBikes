import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native";
import DrawerComponent from "./DrawerComponent/DrawerComponent";

const Report = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View>
        <View>
          <DrawerComponent names={"Report"} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Report;

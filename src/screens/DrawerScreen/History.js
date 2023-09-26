import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native";
import DrawerComponent from "./DrawerComponent/DrawerComponent";

const History = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View>
        <View>
          <DrawerComponent names={"History"} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default History;

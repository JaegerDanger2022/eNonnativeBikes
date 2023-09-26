import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native";
import DrawerComponent from "./DrawerComponent/DrawerComponent";

const Rider = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View>
        <View>
          <DrawerComponent names={"Become a rider"} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Rider;

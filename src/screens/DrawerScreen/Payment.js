import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native";
import DrawerComponent from "./DrawerComponent/DrawerComponent";

const Payment = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View>
        <View>
          <DrawerComponent names={"payment"} iconName={"cash"} text={"cash"} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Payment;

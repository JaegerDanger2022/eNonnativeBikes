import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native";
import DrawerComponent from "./DrawerComponent/DrawerComponent";

const Discount = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View>
        <View>
          <DrawerComponent
            names={"Discount"}
            iconName={"gift"}
            text={"Enter promo code"}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Discount;

import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import { Divider } from "react-native-paper";
import ToggleSwitch from "../Switch/ToggleSwitch";

const Notification = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View>
        <View>
          <Text style={{ marginHorizontal: 10 }}>
            Notifications about the statuses and prices of your rides and
            deliveries will stay enabled
          </Text>
        </View>
        <View style={{ backgroundColor: "#D3CED8" }}>
          <Text style={{ marginHorizontal: 10 }}>In cycle</Text>
        </View>
        <View>
          <ToggleSwitch names={"Promotions"} />
          <Divider style={{ height: 2 }} />
        </View>
        <View>
          <ToggleSwitch names={"New features"} />
          <Divider style={{ height: 2 }} />
        </View>
        <View>
          <ToggleSwitch names={"Recommended rides"} />
          <Divider style={{ height: 2 }} />
        </View>
        <View>
          <ToggleSwitch names={"Partner Programs"} />
          <Divider style={{ height: 2 }} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Notification;

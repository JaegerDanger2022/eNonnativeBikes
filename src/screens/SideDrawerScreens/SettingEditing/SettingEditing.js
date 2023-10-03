import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import { Divider } from "react-native-paper";
import ToggleSwitch from "../../../components/ToggleSwitch/ToggleSwitch";

const SettingEditing = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View>
        <View>
          <Text style={{ marginHorizontal: 10, fontSize: 18 }}>
            Notifications about the statuses and prices of your rides and
            deliveries will stay enabled
          </Text>
        </View>
        <View style={{ backgroundColor: "#D3CED8" }}>
          <Text style={{ marginHorizontal: 10 }}>In cycle</Text>
        </View>
        <View>
          <ToggleSwitch name={"Promotions"} />
          <Divider style={{ height: 2 }} />
        </View>
        <View>
          <ToggleSwitch name={"New features"} />
          <Divider style={{ height: 2 }} />
        </View>
        <View>
          <ToggleSwitch name={"Recommended rides"} />
          <Divider style={{ height: 2 }} />
        </View>
        <View>
          <ToggleSwitch name={"Partner Programs"} />
          <Divider style={{ height: 2 }} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SettingEditing;

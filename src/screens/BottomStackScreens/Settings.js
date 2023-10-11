import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";
import React from "react";
import { Divider } from "react-native-paper";
import ToggleSwitch from "../../components/ToggleSwitch/ToggleSwitch";

const Settings = () => {
  return (
    <View style={{ flex: 1, backgroundColor: "#F2D3D3" }}>
      <View style={{ backgroundColor: "#F2D3D3", height: "100%" }}>
        <View style={{ padding: 15 }}>
          <Text style={{ fontSize: 40 }}>Settings</Text>
        </View>
        <Divider style={{ height: 5, width: 390, alignSelf: "center" }} />

        <View>
          <ToggleSwitch names={"App Language"} belowNames={"English"} />
        </View>
        <Divider style={{ height: 6 }} />
        <View>
          <ToggleSwitch
            names={"Don't call me"}
            belowNames={"Don't call unless it's emergency"}
          />
        </View>
        <Divider />
        <View>
          <ToggleSwitch
            names={"Share my location"}
            belowNames={"Not neccesary"}
          />
        </View>
        <Divider style={{ height: 20 }} />
        <View>
          {/* <TouchableOpacity onPress={() => navigation.navigate("Notification")}> */}
          <View>
            <ToggleSwitch names={"Notification"} />
          </View>
          {/* </TouchableOpacity> */}
        </View>
        <Divider />
        <View>
          <ToggleSwitch names={"More"} />
        </View>
      </View>
    </View>
  );
};

export default Settings;

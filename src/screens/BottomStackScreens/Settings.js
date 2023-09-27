import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import { Divider } from "react-native-paper";
import ToggleSwitch from "../../components/ToggleSwitch/ToggleSwitch";

const Settings = ({ navigation }) => {
  const handleToggleSwitch = () => {
    navigation.navigate("Notification");
  };
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ padding: 15 }}>
        <Text style={{ fontSize: 40 }}>Settings</Text>
      </View>
      <Divider style={{ height: 5, width: 390, alignSelf: "center" }} />
      <View>
        <ToggleSwitch names={"Display Traffic"} />
      </View>
      <Divider style={{ height: 10 }} />
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
        <View>
          <ToggleSwitch names={"Notification"} onPress={handleToggleSwitch} />
        </View>
      </View>
      <Divider />
      <View>
        <ToggleSwitch names={"More"} />
      </View>
    </SafeAreaView>
  );
};

export default Settings;

import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Switch } from "react-native-paper";

const ToggleSwitch = ({ names, belowNames, onPress }) => {
  const [isSwitchOn, setIsSwitchOn] = React.useState(false);
  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);
  return (
    <TouchableOpacity onPress={onPress}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "stretch",
          justifyContent: "space-between",
          backgroundColor: "white",
          height: 80,
          padding: 20,
          width: "100%",
        }}
      >
        <View
          style={{
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "center",
          }}
        >
          <Text style={{ fontSize: 20 }}>{names}</Text>
          <Text style={{ fontSize: 15 }}>{belowNames}</Text>
        </View>
        <Text>
          <Switch value={isSwitchOn} onValueChange={onToggleSwitch} />
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default ToggleSwitch;

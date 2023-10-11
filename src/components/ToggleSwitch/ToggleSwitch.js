import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Switch } from "react-native-paper";

const ToggleSwitch = ({ name, belowname }) => {
  const [isSwitchOn, setIsSwitchOn] = React.useState(false);
  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);
  return (
    // <TouchableOpacity onPress={onPress}>  backgroundColor: "#F2D3D3"
    <View
      style={{
        flexDirection: "row",
        alignItems: "stretch",
        justifyContent: "space-between",
        backgroundColor: "#C93D5D",
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
        <Text style={{ fontSize: 20 }}>{name}</Text>
        <Text style={{ fontSize: 15 }}>{belowname}</Text>
      </View>
      <Text>
        <Switch value={isSwitchOn} onValueChange={onToggleSwitch} />
      </Text>
    </View>
    // </TouchableOpacity>
  );
};

export default ToggleSwitch;

import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { View, Text, TouchableOpacity } from "react-native";
import { FontAwesome } from '@expo/vector-icons';
import React from "react";

const RideSummary = ({
  address,
  date,
  amount,
  belowAmount,
  onpress,
  startIcon,
  endIcon,
  underdate,
}) => {
  return (
    <TouchableOpacity onPress={onpress}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          //   alignItems: "center",
          alignContent: "center",
          padding: 20,
          backgroundColor: "white",
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
          <View>
          <FontAwesome name={startIcon} size={30} color="black" />
          </View>
          <View style={{ flexDirection: "column", alignItems: "center" }}>
            <View>
              <Text style={{ fontSize: 17, fontWeight: "800" }}>{address}</Text>
              <Text style={{ fontWeight: "500", color: "#6750A4" }}>
                {date}
              </Text>
            </View>
            <View>
              <Text>{underdate}</Text>
            </View>
          </View>
        </View>
        <View style={{ flexDirection: "row", alignItems: "flex-start" }}>
          <View>
            <Text style={{ fontWeight: "900", color: "green" }}>{amount}</Text>
            <Text style={{ color: "red" }}>{belowAmount}</Text>
          </View>
          <View>
          <FontAwesome name={endIcon} size={40} color="black" />
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default RideSummary;

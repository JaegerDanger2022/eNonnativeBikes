import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import RideSummary from "../../components/RidesComponents/RideSummary";

const RideDetail = ({ navigation }) => {
  return (
    <View>
      <RideSummary
        onpress={() => navigation.navigate("RideDetail")}
        startIcon="bicycle"
        address={"Virginia Walk"}
        date={"24th September, 2023"}
        amount={60.0}
      />
    </View>
  );
};

export default RideDetail;

import { View } from "react-native";
import React from "react";
import RideSummary from "../../components/RidesComponents/RideSummary";
import { useTheme } from "react-native-paper";

const Rides = ({ navigation }) => {
  const handlePress = () => {
    navigation.navigate("RideDetails");
  };
  const theme = useTheme();
  return (
    <View style={{ flex: 1, backgroundColor: theme.colors.background }}>
      <RideSummary
        startIcon="bicycle"
        address={"Virginia Walk"}
        date={"90th September, 2023"}
        amount={50.0}
        time={30.24}
        onpress={handlePress}
      />
    </View>
  );
};

export default Rides;

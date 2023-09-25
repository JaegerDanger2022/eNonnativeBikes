import { View, Text, SafeAreaView, Alert } from "react-native";
import React from "react";
import MyRides from "../MyRidesComponent/MyRides";
import { Divider } from "react-native-paper";

const Ride = ({ navigation }) => {
  const handleRide = () => {
    navigation.navigate("Ride Status");
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Divider style={{ height: 2 }} />
      <View>
        <MyRides
          names={"Virgina Walk"}
          date={"2 oct, 17:51"}
          amount={"Ghc50.00"}
          onpress={handleRide}
          iconName={"bike"}
        />
      </View>
      <Divider style={{ height: 2 }} />
      <View>
        <MyRides
          names={"Accra, West"}
          date={"2 oct, 17:51"}
          amount={"Ghc20.00"}
          belowAmount={"Ride connect"}
          iconName={"bike"}
          onpress={handleRide}
        />
      </View>
      <Divider style={{ height: 2 }} />
    </SafeAreaView>
  );
};

export default Ride;

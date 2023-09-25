import { View } from "react-native";
import React from "react"; 
import RideSummary from "../../components/RidesComponents/RideSummary";
import { useTheme } from "react-native-paper";

const Rides = ({navigation}) => {
  const theme = useTheme()
  return (
    <View style={{ flex: 1,  backgroundColor: theme.colors.background}}>
      <RideSummary onpress={()=>navigation.navigate('RideDetails')} startIcon='bicycle' address={'Virginia Walk'} date={'24th September, 2023'} amount={50.00}/>
    </View>
  );
};

export default Rides;

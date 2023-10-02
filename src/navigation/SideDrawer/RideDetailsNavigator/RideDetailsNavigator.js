import { DrawerActions, useNavigation } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";
import RideDetails from "../../../components/RidesComponents/RideDetails";
import RideDetail from "../../../screens/DrawerScreen/RideDetail";

const Ride = createStackNavigator();

export default function RideDetailsNavigator() {
  const navigation = useNavigation();
  return (
    <Ride.Navigator initialRouteName="Ride">
      {/* Account */}
      <Ride.Screen
        name="Ride"
        component={RideDetail}
        options={{
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
              style={{ marginHorizontal: 10 }}
            >
              <Ionicons name="menu" size={30} color="black" />
            </TouchableOpacity>
          ),
        }}
      />
      <Ride.Group
        screenOptions={{
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <SideDrawerNavigationIcon iconName={"arrowleft"} />
            </TouchableOpacity>
          ),
        }}
      />
      <Ride.Screen name="RideDetail" component={RideDetails} />

      {/* End Of Payment Details */}
    </Ride.Navigator>
  );
}

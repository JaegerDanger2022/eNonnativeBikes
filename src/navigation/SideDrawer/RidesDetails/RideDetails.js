import { createStackNavigator } from "@react-navigation/stack";

const Rides = createStackNavigator();

export default function RidesDetailsNavigator() {
  return (
    <Rides.Navigator>
      {/* Accounting Details */}
      <Rides.Screen
        name="Payments_Details"
        component={Payments}
        options={{ headerShown: false }}
      />
      {/* End Of Accounting Details */}
      {/* =========================== */}
    </Rides.Navigator>
  );
}

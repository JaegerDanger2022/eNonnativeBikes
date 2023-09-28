import { createStackNavigator } from "@react-navigation/stack";
import Payment from "../../../screens/SideDrawerScreens/Payment/Payment";

const Payments = createStackNavigator();

export default function PaymentsDetailsNavigator() {
  return (
    <Payments.Navigator>
      {/* Accounting Details */}
      <Payments.Screen
        name="Payments_Details"
        component={Payment}
        options={{ headerShown: false }}
      />
      {/* End Of Accounting Details */}
      {/* =========================== */}
    </Payments.Navigator>
  );
}

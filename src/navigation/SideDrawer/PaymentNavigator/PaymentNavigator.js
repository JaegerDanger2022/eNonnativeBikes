import { createStackNavigator } from "@react-navigation/stack";
import Payments from "../../../screens/DrawerScreen/Payment";
import Rides from "../../../screens/BottomStackScreens/Rides";

const Payment = createStackNavigator();

export default function PaymentNavigator() {
  return (
    <Payment.Navigator>
      <Payment.Screen
        name="Payments"
        component={Payments}
        options={{ headerShown: false }}
      />
      <Payment.Screen
        name="Rides"
        component={Rides}
        options={{ headerShown: false }}
      />
    </Payment.Navigator>
  );
}
import { createStackNavigator } from "@react-navigation/stack";

const Accounts = createStackNavigator();

export default function AccountDetailsNavigator() {
  return (
    <Accounts.Navigator>
      {/* Accounting Details */}
      <Accounts.Screen
        name="Payments_Details"
        component={Payments}
        options={{ headerShown: false }}
      />
      {/* End Of Accounting Details */}
      {/* =========================== */}
    </Accounts.Navigator>
  );
}

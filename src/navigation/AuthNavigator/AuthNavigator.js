import { createStackNavigator } from "@react-navigation/stack";
import Welcome from "../../screens/Welcome";
import SignUp from "../../screens/SignUp";

const AuthStack = createStackNavigator();
export default function AuthNavigator() {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen
        name="Welcome"
        component={Welcome}
        options={{ headerShown: false }}
      />
      <AuthStack.Screen
        name="SignUp"
        component={SignUp}
        options={{ headerShown: false }}
      />
    </AuthStack.Navigator>
  );
}

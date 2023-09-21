import { createStackNavigator } from "@react-navigation/stack";
import Welcome from "../../screens/Welcome";

const AuthStack = createStackNavigator();
export default function AuthNavigator() {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen
        name="Welcome"
        component={Welcome}
        options={{ headerShown: false }}
      />
    </AuthStack.Navigator>
  );
}

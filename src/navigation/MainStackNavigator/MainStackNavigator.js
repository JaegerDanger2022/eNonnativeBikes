import { createStackNavigator } from "@react-navigation/stack"; 
import SideDrawer from "../SideDrawer/SideDrawer";

const MainStack = createStackNavigator();

export default function MainStackNavigator() {
  return (
    <MainStack.Navigator>
      {/* <MainStack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      /> */}
      <MainStack.Screen
        name="SideDrawer"
        component={SideDrawer}
        options={{ headerShown: false }}
      />
    </MainStack.Navigator>
  );
}

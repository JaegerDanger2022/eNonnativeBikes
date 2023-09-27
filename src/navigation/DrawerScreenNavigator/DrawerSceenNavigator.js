import { createStackNavigator } from "@react-navigation/stack";

const DrawerScreen = createStackNavigator();

export default function MainStackNavigator() {
  return (
    <DrawerScreen.Navigator>
      <MainStack.Screen
        name="SideDrawer"
        component={SideDrawer}
        options={{ headerShown: false }}
      />
      <MainStack.Screen
        name="SideDrawer"
        component={SideDrawer}
        options={{ headerShown: false }}
      />
    </DrawerScreen.Navigator>
  );
}

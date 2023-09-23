import { createDrawerNavigator } from "@react-navigation/drawer";
import BottomTabNavigator from "../BottomTabsNavigator/BottomTabsNavigator";

const Drawer = createDrawerNavigator();

export default function SideDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Bottom" component={BottomTabNavigator} />
    </Drawer.Navigator>
  );
}

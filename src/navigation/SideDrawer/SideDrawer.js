import { DrawerItem, createDrawerNavigator } from "@react-navigation/drawer";
import BottomTabNavigator from "../BottomTabsNavigator/BottomTabsNavigator";

// Drawers Component
import Payment from "../../screens/DrawerScreen/Payment";
import Rider from "../../screens/DrawerScreen/Rider";
import Safety from "../../screens/DrawerScreen/Safety";
import History from "../../screens/DrawerScreen/History";
import Discount from "../../screens/DrawerScreen/Discount";
import Settings from "../../screens/DrawerScreen/Settings";
import Report from "../../screens/DrawerScreen/Report";
import Accounting from "../../screens/DrawerScreen/Accounting";

const Drawer = createDrawerNavigator();

export default function SideDrawer() {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerStyle: {
          // backgroundColor: "#c6cbef",
          width: 250,
        },
      }}
    >
      {/* DRAWER TITLE */}
      <Drawer.Screen
        name="Accout"
        component={BottomTabNavigator}
        options={{
          // drawerContentStyle:()
          drawerLabel: () => <Accounting />,
          headerShown: false,
          // drawerIcon: ({ color }) => (
          //   <EvilIcons name="user" size={24} color="black" />
          // ),
        }}
      />
      {/* END OF DRAWER TITLE */}
      {/* ==================== */}
      {/* DRAWER SCREENS */}
      <Drawer.Screen
        name="Payment"
        component={BottomTabNavigator}
        options={{
          drawerLabel: () => <Payment />,
          headerShown: false,
        }}
      />
      <Drawer.Screen
        name="Rider"
        component={BottomTabNavigator}
        options={{
          drawerLabel: () => <Rider />,
          headerShown: false,
        }}
      />
      <Drawer.Screen
        name="Safety"
        component={BottomTabNavigator}
        options={{
          drawerLabel: () => <Safety />,
          headerShown: false,
        }}
      />
      <Drawer.Screen
        name="History"
        component={BottomTabNavigator}
        options={{
          drawerLabel: () => <History />,
          headerShown: false,
        }}
      />
      <Drawer.Screen
        name="Discount"
        component={BottomTabNavigator}
        options={{
          drawerLabel: () => <Discount />,
          headerShown: false,
        }}
      />
      <Drawer.Screen
        name="Settings"
        component={BottomTabNavigator}
        options={{
          drawerLabel: () => <Settings />,
          headerShown: false,
        }}
      />
      <Drawer.Screen
        name="Report"
        component={BottomTabNavigator}
        options={{
          drawerLabel: () => <Report />,
          headerShown: false,
        }}
      />
      {/* END OF DRAWER SCREENS */}
    </Drawer.Navigator>
  );
}

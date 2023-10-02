import { createDrawerNavigator } from "@react-navigation/drawer";
import BottomTabNavigator from "../BottomTabsNavigator/BottomTabsNavigator";

// Drawers Component
// import Accounting from "../../components/SideDrawerScreenComponent/Account";

// Drawer Screens

import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import SideDrawerItems from "../../components/SideDrawerScreenComponent/SideDrawerItems";

import AccountDetailsNavigator from "./AccountsDetailsNavigator/AccountsDetailsNavigator";
import PaymentDetailsNavigator from "./PaymentDetailsNavigator/PaymentDetailsNavigator";
import RideDetailsNavigator from "./RideDetailsNavigator/RideDetailsNavigator";
import SettingsDetailsNavigator from "./SettingsDetailsNavigator/SettingsDetailsNavigator";
import SideDrawerNavigationIcon from "../../components/SideDrawerNavigationIcon/SideDrawerNavigationIcon";
import Account from "../../components/SideDrawerScreenComponent/Account";

const Drawer = createDrawerNavigator();

export default function SideDrawer() {
  const navigation = useNavigation();
  return (
    <Drawer.Navigator
      initialRouteName="Maps"
      screenOptions={{
        drawerStyle: {
          width: 320,
        },
      }}
    >
      {/* DRAWER TITLE */}
      <Drawer.Screen
        name="Account"
        component={AccountDetailsNavigator}
        options={{
          drawerLabel: () => <Account />,
          headerTitle: "",
          headerShown: false,
        }}
      />
      {/* END OF DRAWER TITLE */}
      {/* ==================== */}
      {/* DRAWER SCREENS */}
      <Drawer.Screen
        name="Maps"
        component={BottomTabNavigator}
        options={{
          drawerLabel: () => <SideDrawerItems label={"Map"} />,
          headerShown: false,
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.navigate("Maps")}>
              <SideDrawerNavigationIcon />
            </TouchableOpacity>
          ),
          headerTitle: "",
        }}
      />
      <Drawer.Screen
        name="Payment"
        component={PaymentDetailsNavigator}
        options={{
          drawerLabel: () => (
            <SideDrawerItems label={"payment"} iconName={"cash"} />
          ),
          headerShown: false,
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.navigate("Maps")}>
              <SideDrawerNavigationIcon iconName={"arrowleft"} />
            </TouchableOpacity>
          ),
          headerTitle: "",
        }}
      />
      <Drawer.Screen
        name="Rides"
        component={RideDetailsNavigator}
        options={{
          drawerLabel: () => (
            <SideDrawerItems label={"rides"} iconName={"bicycle"} />
          ),
          headerShown: false,
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.navigate("Maps")}>
              <SideDrawerNavigationIcon iconName={"arrowleft"} />
            </TouchableOpacity>
          ),
          headerTitle: "",
        }}
      />
      <Drawer.Screen
        name="Safety"
        component={BottomTabNavigator}
        options={{
          drawerLabel: () => (
            <SideDrawerItems label={"Safety"} icon={"shield"} />
          ),
          headerShown: true,
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.navigate("Maps")}>
              <SideDrawerNavigationIcon iconName={"arrowleft"} />
            </TouchableOpacity>
          ),
          headerTitle: "",
        }}
      />

      <Drawer.Screen
        name="Settings"
        component={SettingsDetailsNavigator}
        options={{
          drawerLabel: () => <SideDrawerItems label={"Settings"} />,
          headerShown: false,
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.navigate("Maps")}>
              <SideDrawerNavigationIcon iconName={"arrowleft"} />
            </TouchableOpacity>
          ),
          headerTitle: "",
        }}
      />
      <Drawer.Screen
        name="Legal"
        component={BottomTabNavigator}
        options={{
          drawerLabel: () => <SideDrawerItems label={"Legal"} />,
          headerShown: true,
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.navigate("Maps")}>
              <SideDrawerNavigationIcon iconName={"arrowleft"} />
            </TouchableOpacity>
          ),
          headerTitle: "",
        }}
      />
      <Drawer.Screen
        name="About"
        component={BottomTabNavigator}
        options={{
          drawerLabel: () => <SideDrawerItems label={"About"} />,
          headerShown: true,
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.navigate("Maps")}>
              <SideDrawerNavigationIcon iconName={"arrowleft"} />
            </TouchableOpacity>
          ),
          headerTitle: "",
        }}
      />

      {/* ==================================== */}

      {/* END OF DRAWER SCREENS */}
    </Drawer.Navigator>
  );
}

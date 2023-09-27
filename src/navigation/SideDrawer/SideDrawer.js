import { createDrawerNavigator } from "@react-navigation/drawer";
import BottomTabNavigator from "../BottomTabsNavigator/BottomTabsNavigator";
import { AntDesign } from "@expo/vector-icons";

// Drawers Component
import Accounting from "../../DrawerScreenComponent/Accounting";

// Drawer Screens
import PaymentId from "../../screens/DrawerScreen/Payment";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import SideDrawerItems from "../../DrawerScreenComponent/SideDrawerItems";
import Payments from "../../screens/DrawerScreen/Payment";
import Rides from "../../screens/BottomStackScreens/Rides";
import Settings from "../../screens/BottomStackScreens/Settings";

const Drawer = createDrawerNavigator();

export default function SideDrawer() {
  const navigation = useNavigation();
  return (
    <Drawer.Navigator
      initialRouteName="Maps"
      screenOptions={{
        drawerStyle: {
          width: 350,
        },
      }}
    >
      <Drawer.Screen
        name="Maps"
        component={BottomTabNavigator}
        options={{
          // drawerLabel: () => <Maps />,
          headerShown: false,
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.navigate("Maps")}>
              <AntDesign name="arrowleft" size={24} color="black" />
            </TouchableOpacity>
          ),
          headerTitle: "",
        }}
      />
      {/* DRAWER TITLE */}
      <Drawer.Screen
        name="Accouting"
        component={BottomTabNavigator}
        options={{
          drawerLabel: () => <Accounting />,
          headerShown: true,
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.navigate("Maps")}>
              <AntDesign name="arrowleft" size={24} color="black" />
            </TouchableOpacity>
          ),
          headerTitle: "",
        }}
      />
      {/* END OF DRAWER TITLE */}
      {/* ==================== */}
      {/* DRAWER SCREENS */}
      <Drawer.Screen
        name="Payment"
        component={Payments}
        options={{
          drawerLabel: () => (
            <SideDrawerItems label={"payment"} iconName={"cash"} />
          ),
          headerShown: true,
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.navigate("Maps")}>
              <AntDesign name="arrowleft" size={24} color="black" />
            </TouchableOpacity>
          ),
          headerTitle: "",
        }}
      />
      <Drawer.Screen
        name="Rides"
        component={PaymentId}
        options={{
          drawerLabel: () => <SideDrawerItems label={"rides"} />,
          headerShown: true,
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.navigate("Maps")}>
              <AntDesign name="arrowleft" size={24} color="black" />
            </TouchableOpacity>
          ),
          headerTitle: "",
        }}
      />
      <Drawer.Screen
        name="Safety"
        component={PaymentId}
        options={{
          drawerLabel: () => (
            <SideDrawerItems label={"Safety"} iconName={"shield"} />
          ),
          headerShown: true,
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.navigate("Maps")}>
              <AntDesign name="arrowleft" size={24} color="black" />
            </TouchableOpacity>
          ),
          headerTitle: "",
        }}
      />
      <Drawer.Screen
        name="History"
        component={Rides}
        options={{
          drawerLabel: () => (
            <SideDrawerItems label={"History"} iconName={"book"} />
          ),
          headerShown: true,
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.navigate("Maps")}>
              <AntDesign name="arrowleft" size={24} color="black" />
            </TouchableOpacity>
          ),
          headerTitle: "",
        }}
      />
      <Drawer.Screen
        name="Discount"
        component={PaymentId}
        options={{
          drawerLabel: () => <SideDrawerItems label={"Discount"} />,
          headerShown: true,
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.navigate("Maps")}>
              <AntDesign name="arrowleft" size={24} color="black" />
            </TouchableOpacity>
          ),
          headerTitle: "",
        }}
      />
      <Drawer.Screen
        name="Settings"
        component={Settings}
        options={{
          drawerLabel: () => <SideDrawerItems label={"Settings"} />,
          headerShown: true,
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.navigate("Maps")}>
              <AntDesign name="arrowleft" size={24} color="black" />
            </TouchableOpacity>
          ),
          headerTitle: "",
        }}
      />
      <Drawer.Screen
        name="Support"
        component={PaymentId}
        options={{
          drawerLabel: () => <SideDrawerItems label={"Support"} />,
          headerShown: true,
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.navigate("Maps")}>
              <AntDesign name="arrowleft" size={24} color="black" />
            </TouchableOpacity>
          ),
          headerTitle: "",
        }}
      />
      {/* END OF DRAWER SCREENS */}
    </Drawer.Navigator>
  );
}

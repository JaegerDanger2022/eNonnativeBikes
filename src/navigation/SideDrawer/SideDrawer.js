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
import Accounts from "../../screens/DrawerScreen/Account";


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
      {/* DRAWER TITLE */}
      <Drawer.Screen
        name="Accouting"
        component={Accounts}
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
        name="Settings"
        component={Settings}
        options={{
          drawerLabel: () => (
            <SideDrawerItems label={"Settings"} iconName={"setting"} />
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
        name="Label"
        component={PaymentId}
        options={{
          drawerLabel: () => <SideDrawerItems label={"Label"} />,
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
        name="About"
        component={PaymentId}
        options={{
          drawerLabel: () => <SideDrawerItems label={"About"} />,
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
      {/* END OF DRAWER SCREENS */}

    </Drawer.Navigator>
  );
}

function CustomDrawerContent({ navigation }) {
  return (
    <View>
      <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Drawer Menu</Text>
      <Text>Option 1</Text>
      <Text>Option 2</Text>
      <Text>Option 3</Text>
      <Text>Option 4</Text>
      <Button
        title="Go to Screen 1"
        onPress={() => navigation.navigate('Screen1')}
      />
      <Button
        title="Go to Screen 2"
        onPress={() => navigation.navigate('Screen2')}
      />
    </View>
  );
}
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// ICONS
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useTheme } from "react-native-paper";
import Map from "../../screens/BottomStackScreens/Map"; 
// import Settings from "../../screens/BottomStackScreens/Settings"; **** Deprecated
import Wallet from "../../screens/BottomStackScreens/Wallet"; 
import Rides from "../../screens/BottomStackScreens/Rides";
import RidesNavigator from "../RidesNavigator/RidesNavigator";
import SettingsDetailsNavigator from "../SideDrawer/SettingsDetailsNavigator/SettingsDetailsNavigator";

const Tab = createBottomTabNavigator();

export default function BottomTabNavigator({ navigation, route }) {
  const theme = useTheme();

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: theme.colors.primary,
        headerStyle: { height: 100 },
        headerTitleStyle: { color: theme.colors.primary },
        headerStyle: { backgroundColor: theme.colors.background },
        tabBarItemStyle: {
          backgroundColor: theme.colors.background,
          paddingBottom: 20,
        },
        tabBarStyle: { height: 100 },
      }}
      safeAreaInsets={{ bottom: 0 }} // Adjust this value as needed
    >
      <Tab.Group>
        <Tab.Screen
          name="Map"
          component={Map}
          options={{
            tabBarIcon: ({ focused }) => (
              <MaterialCommunityIcons
                name={
                  focused ? "map-marker-radius" : "map-marker-radius-outline"
                }
                size={30}
                color={
                  focused ? theme.colors.primary : theme.colors.onBackground
                }
              />
            ),
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="RidesNavigator"
          component={RidesNavigator}
          options={{
            headerShown:false,
            tabBarLabel:'Rides',
            tabBarIcon: ({ focused }) => (
              <MaterialCommunityIcons
                name={focused ? "bicycle" : "bicycle"}
                size={30}
                color={
                  focused ? theme.colors.primary : theme.colors.onBackground
                }
              />
            ),
            headerTitle: "Rides",
          }}
        />
        <Tab.Screen
          name="Wallet"
          component={Wallet}
          options={{
            tabBarIcon: ({ focused }) => (
              <Ionicons
                name={focused ? "wallet" : "wallet-outline"}
                size={24}
                color={
                  focused ? theme.colors.primary : theme.colors.onBackground
                }
              />
            ),
            headerShown: false,
            tabBarLabel: "Wallet",
          }}
        />
        <Tab.Screen
          name="Settings"
          component={SettingsDetailsNavigator}
          options={{
            tabBarIcon: ({ focused }) => (
              <Ionicons
                name={focused ? "settings" : "settings-outline"}
                size={24}
                color={
                  focused ? theme.colors.primary : theme.colors.onBackground
                }
              />
            ),
            headerShown: false,
            tabBarLabel: "Settings",
          }}
        />
      </Tab.Group>
    </Tab.Navigator>
  );
}

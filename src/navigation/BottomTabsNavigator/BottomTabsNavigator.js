import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// ICONS
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useTheme } from "react-native-paper";
import Map from "../../screens/BottomStackScreens/Map";
import Wallet from "../../screens/BottomStackScreens/Wallet";
import RidesNavigator from "../RidesNavigator/RidesNavigator";
import SettingsDetailsNavigator from "../SideDrawer/SettingsDetailsNavigator/SettingsDetailsNavigator";
import { Image, Platform, View } from "react-native";
import RobotoModalNavigation from "../SideDrawer/RobotoModalNavigation/RobotoModalNavigation";

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
          // backgroundColor: theme.colors.background,
          paddingBottom: 20,
          borderColor: "black",
        },

        tabBarStyle: {
          height: "11%",
          width: "100%",
          position: "absolute",
          // borderTopLeftRadius: "10%", //back on
          // borderTopRightRadius: "10%", //back on
          paddingBottom: "5%",
          elevation: 0,
          borderTopRightRadius: Platform.select({
            ios: 15,
            android: 15,
          }),
          borderTopLeftRadius: Platform.select({
            ios: 15,
            android: 15,
          }),
        },
      }}
      safeAreaInsets={{ bottom: 0 }} // Adjust this value as needed
    >
      <Tab.Group>
        <Tab.Screen
          name="Map"
          component={Map}
          options={{
            tabBarIcon: ({ focused }) => (
              <>
                <MaterialCommunityIcons
                  name={
                    focused ? "map-marker-radius" : "map-marker-radius-outline"
                  }
                  size={30}
                  color={
                    focused ? theme.colors.primary : theme.colors.onBackground
                  }
                />
              </>
            ),
            headerShown: false,
            tabBarItemStyle: {
              // backgroundColor: "#AC9494",
              // position: "absolute",
            },
          }}
        />
        <Tab.Screen
          name="RidesNavigator"
          component={RidesNavigator}
          options={{
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <>
                <MaterialCommunityIcons
                  name={focused ? "bicycle" : "bicycle"}
                  size={30}
                  color={
                    focused ? theme.colors.primary : theme.colors.onBackground
                  }
                />
              </>
            ),
            headerTitle: "Rides",
            tabBarItemStyle: {
              backgroundColor: "white",
              // borderTopRightRadius: 20,  // Back on
              zIndex: 100,
              borderTopRightRadius: Platform.select({
                ios: 20,
                android: 20,
              }),
            },
          }}
        />
        {/* ======================= */}
        <Tab.Screen
          name="Up"
          component={RobotoModalNavigation}
          options={{
            headerShown: false,
            tabBarLabel: "",
            tabBarIcon: ({ focused }) => (
              <>
                <View
                  style={{
                    width: "100%",
                    height: "100%",
                  }}
                >
                  <Image
                    source={require("../../../assets/images/bike/bot.png")}
                    resizeMode="contain"
                    style={{
                      width: "80%",
                      height: "110%",
                      position: "absolute",
                      bottom: 20,
                      backgroundColor: "#EFEBEF",
                      borderRadius: 100,
                      left: "9.5%",
                    }}
                  />

                  {/* // Rigth BOX */}
                  <View
                    style={{
                      position: "absolute",
                      backgroundColor: "#8CB6FF",
                      width: "25%",
                      height: "28%",
                      left: "95%", // Initial -83
                      // zIndex: -10,
                      bottom: "72%",

                      // borderBottomStartRadius: 100,
                    }}
                  ></View>
                  {/* Left BOX */}
                  <View
                    style={{
                      position: "absolute",
                      backgroundColor: "#8CB6FF",
                      width: "28%",
                      height: "28%",
                      right: "95%", // Initial -83
                      // zIndex: -100,
                      bottom: "72%",
                      // borderBottomStartRadius: 100,
                    }}
                  ></View>
                </View>
              </>
            ),
            headerShown: false,
            tabBarItemStyle: {
              backgroundColor: "#8CB6FF",
              height: "100%",
              borderBottomStartRadius: 80,
              borderBottomEndRadius: 80,
              // width: "10vw",
            },
          }}
        />

        {/* ======================= */}
        <Tab.Screen
          name="Wallet"
          component={Wallet}
          options={{
            tabBarIcon: ({ focused }) => (
              <>
                <Ionicons
                  name={focused ? "wallet" : "wallet-outline"}
                  size={24}
                  color={
                    focused ? theme.colors.primary : theme.colors.onBackground
                  }
                />
              </>
            ),
            headerShown: false,
            tabBarLabel: "Wallet",
            tabBarItemStyle: {
              // backgroundColor: "white",
              backgroundColor: "white",

              // borderTopLeftRadius: "20%", //back on
              // zIndex:100,
              borderTopLeftRadius: Platform.select({
                ios: 20,
                android: 20,
              }),
            },
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
            tabBarItemStyle: {
              // backgroundColor: "#AC9494",
              // borderTopRightRadius: 20,
            },
          }}
        />
      </Tab.Group>
    </Tab.Navigator>
  );
}

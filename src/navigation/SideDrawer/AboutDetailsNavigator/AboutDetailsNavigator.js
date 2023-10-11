import { DrawerActions, useNavigation } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { TouchableOpacity } from "react-native-gesture-handler";

import { Ionicons } from "@expo/vector-icons";
import AboutDetail from "../../../screens/DrawerScreen/AboutDetail";

const About = createStackNavigator();

export default function AboutDetailsNavigator() {
  const navigation = useNavigation();
  return (
    <About.Navigator initialRouteName="About">
      {/* Account */}
      <About.Screen
        name="About"
        component={AboutDetail}
        options={{
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
              style={{ marginHorizontal: 10 }}
            >
              <Ionicons name="menu" size={30} color="black" />
            </TouchableOpacity>
          ),
          headerStyle: {
            backgroundColor: "#007481",
          },
          headerShown: true,
        }}
      />
      {/* <About.Group
        screenOptions={{
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <SideDrawerNavigationIcon iconName={"arrowleft"} />
            </TouchableOpacity>
          ),
        }}
      ></About.Group> */}
      {/* End Of Payment Details */}
    </About.Navigator>
  );
}

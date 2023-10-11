import { createStackNavigator } from "@react-navigation/stack";
import { TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { DrawerActions, useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import RobotoModalDetails from "../../../screens/DrawerScreen/RobotoModalDetails";

const Roboto = createStackNavigator();

export default function RobotoModalNavigation() {
  const navigation = useNavigation();
  return (
    <Roboto.Navigator initialRouteName="modal">
      {/* Account */}
      <Roboto.Screen
        name="modal"
        component={RobotoModalDetails}
        options={{
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
              style={{ marginHorizontal: 10 }}
            >
              <Ionicons name="menu" size={30} color="black" />
            </TouchableOpacity>
          ),
          headerShown: false,
        }}
      />
      {/* <Roboto.Group
        screenOptions={{
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <SideDrawerNavigationIcon iconName={"arrowleft"} />
            </TouchableOpacity>
          ),
        }}
      >
        <Roboto.Screen name="Edit" component={AccountEditing} />
        <Roboto.Screen name="Update Your Name" component={AccountUpdate} />
      </Roboto.Group> */}
      {/* End Of Accounting Details */}
    </Roboto.Navigator>
  );
}

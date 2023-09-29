import { DrawerActions, useNavigation } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";
import Settings from "../../../screens/BottomStackScreens/Settings";
import SettingDetail from "../../../screens/DrawerScreen/SettingDetail";
import SettingEditing from "../../../screens/SideDrawerScreens/SettingEditing/SettingEditing";

const Setting = createStackNavigator();

export default function SettingsDetailsNavigator() {
  const navigation = useNavigation();
  return (
    <Setting.Navigator initialRouteName="settings">
      {/* Seittings */}
      <Setting.Screen
        name="settings"
        component={SettingDetail}
        options={{
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
              style={{ marginHorizontal: 10 }}
            >
              <Ionicons name="menu" size={30} color="black" />
            </TouchableOpacity>
          ),
        }}
      />
      <Setting.Group
        screenOptions={{
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <SideDrawerNavigationIcon iconName={"arrowleft"} />
            </TouchableOpacity>
          ),
        }}
      />
      <Setting.Screen name="Notification" component={SettingEditing} />

      {/* End Of Seittings Details */}
    </Setting.Navigator>
  );
}

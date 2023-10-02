import { createStackNavigator } from "@react-navigation/stack";
import { TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { DrawerActions, useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

import AccountDetail from "../../../screens/DrawerScreen/AccountDetail";
import AccountEditing from "../../../screens/SideDrawerScreens/AccountEditing/AccountEditing";
import AccountUpdate from "../../../screens/SideDrawerScreens/AccountEditing/AccountUpdate/AccountUpdate";
import SideDrawerNavigationIcon from "../../../components/SideDrawerNavigationIcon/SideDrawerNavigationIcon";

const Account = createStackNavigator();

export default function AccountDetailsNavigator() {
  const navigation = useNavigation();
  return (
    <Account.Navigator initialRouteName="Account">
      {/* Account */}
      <Account.Screen
        name="AccountDetail"
        component={AccountDetail}
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
      <Account.Group
        screenOptions={{
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <SideDrawerNavigationIcon iconName={"arrowleft"} />
            </TouchableOpacity>
          ),
        }}
      >
        <Account.Screen name="Edit" component={AccountEditing} />
        <Account.Screen name="Update Your Name" component={AccountUpdate} />
      </Account.Group>
      {/* End Of Accounting Details */}
    </Account.Navigator>
  );
}

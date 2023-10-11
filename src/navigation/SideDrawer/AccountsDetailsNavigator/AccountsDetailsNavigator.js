import { createStackNavigator } from "@react-navigation/stack";
import { TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { DrawerActions, useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

import AccountDetail from "../../../screens/DrawerScreen/AccountDetail";
import AccountEditing from "../../../screens/SideDrawerScreens/AccountEditing/AccountEditing";
import AccountUpdate from "../../../screens/SideDrawerScreens/AccountEditing/AccountUpdate/AccountUpdate";
import SideDrawerNavigationIcon from "../../../components/SideDrawerNavigationIcon/SideDrawerNavigationIcon";
import AccountLanguage from "../../../screens/SideDrawerScreens/AccountEditing/AccountLanguage/AccountLanguage";
import AccontHomeLocation from "../../../screens/SideDrawerScreens/AccountEditing/AccontHomeLocation";
import AccountWork from "../../../screens/SideDrawerScreens/AccountEditing/AccountWork";
import AccountCommunication from "../../../screens/SideDrawerScreens/AccountCommunication/AccountCommunication";
import AccountCommunicationProduct from "../../../screens/SideDrawerScreens/AccountCommunication/AccountCommunicationProduct";

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
          headerStyle: {
            backgroundColor: "#007481",
          },
        }}
      />
      <Account.Group
        screenOptions={{
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <SideDrawerNavigationIcon iconName={"arrowleft"} />
            </TouchableOpacity>
          ),
          headerStyle: {
            backgroundColor: "#A45A5A",
          },
        }}
      >
        <Account.Screen
          name="Edit"
          component={AccountEditing}
          options={{
            headerStyle: {
              backgroundColor: "#007481",
            },
          }}
        />
        <Account.Screen
          name="Update Your Name"
          component={AccountUpdate}
          options={{
            headerStyle: {
              backgroundColor: "#007481",
            },
          }}
        />
        <Account.Screen
          name="Languages"
          component={AccountLanguage}
          options={{
            headerStyle: {
              backgroundColor: "#007481",
            },
          }}
        />
        <Account.Screen
          name="location"
          component={AccontHomeLocation}
          options={{
            headerStyle: {
              backgroundColor: "#007481",
            },
          }}
        />
        <Account.Screen
          name="work"
          component={AccountWork}
          options={{
            headerStyle: {
              backgroundColor: "#007481",
            },
          }}
        />
        <Account.Screen
          name="communication"
          component={AccountCommunication}
          options={{
            headerStyle: {
              backgroundColor: "#007481",
            },
          }}
        />
        <Account.Screen
          name="product"
          component={AccountCommunicationProduct}
          options={{
            headerStyle: {
              backgroundColor: "#007481",
            },
          }}
        />
      </Account.Group>
      {/* End Of Accounting Details */}
    </Account.Navigator>
  );
}

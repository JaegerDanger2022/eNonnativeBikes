import { DrawerActions, useNavigation } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { TouchableOpacity } from "react-native-gesture-handler";
import SideDrawerNavigationIcon from "../../../components/SideDrawerNavigationComponent/SideDrawerNavigationIcon";
import { Ionicons } from "@expo/vector-icons";
import PaymentDetail from "../../../screens/DrawerScreen/PaymentDetail";

const Payment = createStackNavigator();

export default function PaymentDetailsNavigator() {
  const navigation = useNavigation();
  return (
    <Payment.Navigator initialRouteName="Payment">
      {/* Account */}
      <Payment.Screen
        name="Payment"
        component={PaymentDetail}
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
      <Payment.Group
        screenOptions={{
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <SideDrawerNavigationIcon iconName={"arrowleft"} />
            </TouchableOpacity>
          ),
        }}
      ></Payment.Group>
      {/* End Of Payment Details */}
    </Payment.Navigator>
  );
}

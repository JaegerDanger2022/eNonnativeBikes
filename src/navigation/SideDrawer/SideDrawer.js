import { createDrawerNavigator } from "@react-navigation/drawer";
import BottomTabNavigator from "../BottomTabsNavigator/BottomTabsNavigator";
import RideDetails from "../../components/RidesComponents/RideDetails";
import { FontAwesome5 } from "@expo/vector-icons";
import { Text } from "react-native-paper";
import { Button, View } from "react-native";

const Drawer = createDrawerNavigator();

export default function SideDrawer() {
  return (
    <Drawer.Navigator screenOptions={{drawerType:'slide', }}>
      <Drawer.Screen name="Home" component={BottomTabNavigator} options={{drawerLabel:()=><CustomDrawerContent/>,headerShown:false, drawerIcon: ({ color }) => (
            <FontAwesome5 name="home" size={24} color={color} />
          )}}/> 

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
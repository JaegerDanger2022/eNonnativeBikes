import { createStackNavigator } from "@react-navigation/stack"; 
import Rides from "../../screens/BottomStackScreens/Rides";
import RideDetails from "../../components/RidesComponents/RideDetails";
import { useTheme } from "react-native-paper";

const RidesStack = createStackNavigator()

export default function RidesNavigator(){
    const theme = useTheme()
    return(
        <RidesStack.Navigator initialRouteName="Rides">
            <RidesStack.Group   screenOptions={{
        tabBarActiveTintColor: theme.colors.primary,
        headerStyle: { height: 100 },
        headerTitleStyle: { color: theme.colors.primary },
        headerStyle: { backgroundColor: theme.colors.background },
        tabBarItemStyle: {
          backgroundColor: theme.colors.background,
          paddingBottom: 20,
        },
        tabBarStyle: { height: 100 },
      }}>
 <RidesStack.Screen name="Rides" component={Rides} />
        <RidesStack.Screen name="RideDetails" component={RideDetails}/> 
            </RidesStack.Group>
       
    </RidesStack.Navigator>
    )
}

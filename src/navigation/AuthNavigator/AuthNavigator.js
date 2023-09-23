import { createStackNavigator } from "@react-navigation/stack";
import Welcome from "../../screens/Welcome";
import SignUp from "../../screens/SignUp";
import { useTheme } from "react-native-paper";
import { StackActions, useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { Pressable, View } from "react-native";

const AuthStack = createStackNavigator();
export default function AuthNavigator() {
  const theme = useTheme();
  const navigation = useNavigation();
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen
        name="Welcome"
        component={Welcome}
        options={{ headerShown: false }}
      />
      <AuthStack.Group
        screenOptions={{
          tabBarActiveTintColor: theme.colors.primary,
          headerStyle: { height: 100 },
          headerTitleStyle: { color: theme.colors.primary },
          headerStyle: {
            backgroundColor: theme.colors.background,
            borderBottomWidth: 0,
          },
          tabBarItemStyle: {
            backgroundColor: theme.colors.background,
            paddingBottom: 20,
          },
          tabBarStyle: { height: 100 },
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? "settings" : "settings-outline"}
              size={24}
              color={focused ? theme.colors.primary : theme.colors.onBackground}
            />
          ),
          headerLeft: () => (
            <View style={{ marginLeft: 20 }}>
              <Pressable
                onPress={() => {
                  return navigation.dispatch(StackActions.pop(1));
                }}
              >
                <Ionicons
                  name="chevron-back"
                  size={30}
                  color={theme.colors.primary}
                />
              </Pressable>
            </View>
          ),
        }}
      >
        <AuthStack.Screen
          name="SignUp"
          component={SignUp}
          options={{ headerBackTitle: "", headerTitle: "" }}
        />
      </AuthStack.Group>
    </AuthStack.Navigator>
  );
}

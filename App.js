import "react-native-gesture-handler";
import RootNavigator from "./src/navigation/RootNavigator/RootNavigator";
import {
  useFonts,
  Lexend_100Thin,
  Lexend_200ExtraLight,
  Lexend_300Light,
  Lexend_400Regular,
  Lexend_500Medium,
  Lexend_600SemiBold,
  Lexend_700Bold,
  Lexend_800ExtraBold,
  Lexend_900Black,
} from "@expo-google-fonts/lexend";
import "react-native-gesture-handler";
import { store } from "./app/utils/redux/store/store";
import { Provider } from "react-redux";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { clearAllData } from "./app/utils/AsyncStorage/ClearData";
// redux
 


export default function App() {
  // clearAllData()

  let [fontsLoaded] = useFonts({
    Lexend_100Thin,
    Lexend_200ExtraLight,
    Lexend_300Light,
    Lexend_400Regular,
    Lexend_500Medium,
    Lexend_600SemiBold,
    Lexend_700Bold,
    Lexend_800ExtraBold,
    Lexend_900Black,
  });

  if (fontsLoaded) {
    return (
     <Provider store={store}>
       <SafeAreaProvider style={{ flex: 1 }}>
       <RootNavigator />
       </SafeAreaProvider> 
     </Provider>
    );
  }
  // return (
  //   <PaperProvider theme={lightTheme}>
  //     <RootNavigator />
  //   </PaperProvider>
  // );
}

import "react-native-gesture-handler";
import RootNavigator from "./src/navigation/RootNavigator/RootNavigator";
import { PaperProvider } from "react-native-paper";
import { lightTheme } from "./src/constants/lightTheme";
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

export default function App() {
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
      <PaperProvider theme={lightTheme}>
        <RootNavigator />
      </PaperProvider>
    );
  }
  // return (
  //   <PaperProvider theme={lightTheme}>
  //     <RootNavigator />
  //   </PaperProvider>
  // );
}

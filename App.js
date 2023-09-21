import "react-native-gesture-handler";
import RootNavigator from "./src/navigation/RootNavigator/RootNavigator";
import { PaperProvider } from "react-native-paper";
import { lightTheme } from "./src/constants/lightTheme";

export default function App() {
  return (
    <PaperProvider theme={lightTheme}>
      <RootNavigator />
    </PaperProvider>
  );
}

import * as React from "react";
import * as WebBrowser from "expo-web-browser";
import * as Google from "expo-auth-session/providers/google";
import { Button, TouchableOpacity } from "react-native"; 
import { GoogleAuthProvider, signInWithCredential } from "firebase/auth";
import { auth } from "../../../app/utils/firebaseConfig";
import { Avatar } from "react-native-paper";
 
WebBrowser.maybeCompleteAuthSession();
 
export default function GoogleSignInButton() {
  const [request, response, promtAsync] = Google.useIdTokenAuthRequest({
    clientId: "171156057825-16jvsvbjlha5pfj0hd1teb4kmdmpkr56.apps.googleusercontent.com",
  });
 
  React.useEffect(() => {
    if (response?.type === "success") {
      const { id_token } = response.params;
      const credential = GoogleAuthProvider.credential(id_token);
      signInWithCredential(auth, credential);
    }
  }, [response]);
 
  return (
    <TouchableOpacity onPress={() => promtAsync()}>
    <Avatar.Image
      style={{ backgroundColor: "transparent" }}
      size={50}
      source={require("../../../assets/images/socialmedialogos/google.png")}
    />
  </TouchableOpacity>
  
  );
}
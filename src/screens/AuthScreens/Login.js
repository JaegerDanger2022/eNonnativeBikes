import {
  View,
  Text,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomTextInput from "../../components/CustomTextInput";  
import ActionButton from "../../components/ActionButton";
import { Avatar, useTheme } from "react-native-paper";
import CustomCheckBox from "../../components/CustomCheckBox"; 
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { setLogin } from "../../../app/utils/redux/features/currentUserSlice";
import { doc, setDoc, getDoc } from "@firebase/firestore";
import { useDispatch } from "react-redux";
import { setEmail } from "../../../app/utils/redux/features/userProfileSlice";
import GoogleSignInButton from "../../components/AuthFlow/GoogleSignIn";
import { validateEmail, validatePassword } from "../../../app/utils/validation/validation";
import { auth, db } from "../../../app/utils/firebaseConfig";

const Login = ({ navigation }) => {
  // redux dispatch
  const dispatch = useDispatch() 
  const [signInEmail, setSignInEmail] = useState("");
  const [signInPassword, setSignInPassword] = useState("");
  // loadinfg indicator state
  const [isLoading, setIsLoading] = useState(false)
  //   checkbox state
  const [checked, setChecked] = useState(false);
  // theme
  const theme = useTheme();

    //   handle sign in
  const handleSignIn = async () => {
    setLoading(true);
    signInWithEmailAndPassword(auth, signInEmail, signInPassword)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // Handle any other error codes or cases
        switch (errorCode) {
          case "auth/wrong-password":
            Alert.alert("The password you entered was wrong");
            break;
          case "auth/missing-password":
            Alert.alert("Please enter a password");
            break;
          case "auth/network=request-failed":
            Alert.alert("Please check your internet connectivity");
            break;
          case "auth/user-not-found":
            Alert.alert("Account doesn't exist");
            break;
          case "auth/invalid-email":
            Alert.alert("Please enter an email");
            break;
          default:
        }
        setLoading(false);

        console.log(`errorCode:${errorCode}  errorMessage:${errorMessage}`);
      });
  };
  return (
    <SafeAreaView style={{ backgroundColor: theme.colors.background, flex: 1 }}>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={{ paddingLeft: 10 }}>
          {/* titles */}
          <View
            style={{
              paddingLeft: 10,
              paddingBottom: 15,
              gap: 15,
            }}
          >
            <Text style={{ fontSize: 30, fontFamily: "Lexend_300Light" }}>
              Login 
            </Text>
             
          </View>
          
          {/* input fields */}
          <View style={{ gap: 30, alignItems: "center" }}> 
            {/* email */}
            <CustomTextInput
              label={"Email"}
              value={signInEmail}
              textInputOnchange={(text) => setSignInEmail(text)}
            />
            {/* password */}
            <CustomTextInput
              label={"Password"}
              value={signInPassword}
              textInputOnchange={(text) => setSignInPassword(text)}
            />
          </View>
         
          {/* button */}
          <View style={{ alignItems: "center", paddingTop: 20 }}>
           {isLoading ? <ActivityIndicator/> :  <ActionButton
              label={"Login"}
              buttonStyle={{ width: 300, borderRadius: 10, paddingVertical: 5 }}
              labelStyle={{ fontSize: 20, fontFamily: "Lexend_200ExtraLight" }}
              handleActionButton={handleSignIn}
            />}
          </View>

     
          {/* Forgot Pssword */}
          <View
            style={{
              paddingVertical: 10,
              paddingHorizontal: 10,
              width: 380,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
          > 
             <TouchableOpacity style={{paddingHorizontal:10}} ><View>
                <Text style={{color:theme.colors.primary, fontFamily:'Lexend_500Medium', fontSize: 20}}>Forgot Password?</Text>
              </View></TouchableOpacity>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
};

export default Login;

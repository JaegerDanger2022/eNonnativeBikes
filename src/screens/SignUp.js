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
import CustomTextInput from "../components/CustomTextInput";
import ActionButton from "../components/ActionButton";
import { Avatar, useTheme } from "react-native-paper";
import CustomCheckBox from "../components/CustomCheckBox"; 
import { validateEmail, validatePassword } from "../../app/utils/validation/validation";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { setLogin } from "../../app/utils/redux/features/currentUserSlice";
import { auth, db } from "../../app/utils/firebaseConfig";
import { doc, setDoc, getDoc } from "@firebase/firestore";
import { useDispatch } from "react-redux";
import { setEmail } from "../../app/utils/redux/features/userProfileSlice";
import GoogleSignInButton from "../components/AuthFlow/GoogleSignIn";

const SignUp = ({ navigation }) => {
  // redux dispatch
  const dispatch = useDispatch()
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setUserEmail] = useState("");
  const [password, setPassword] = useState("");
  // loadinfg indicator state
  const [isLoading, setIsLoading] = useState(false)
  //   checkbox state
  const [checked, setChecked] = useState(false);
  // theme
  const theme = useTheme();

  const handleEmailAuth = async () => {
    // set isLoading to true
    setIsLoading(true)
      const errorEmail = validateEmail(email);
      const errorPassword = validatePassword(password);
      // trigger warning onpress of sign up if email and password validation fails
      if (errorEmail || errorPassword || name == '' || email ==='' || phone === ''|| password === '' ) {
        Alert.alert(errorEmail, errorPassword);
            // set isLoading to true
    setIsLoading(false)
      } else {
        try {
        
          createUserWithEmailAndPassword(auth, email, password)
            .then(async (userCredential) => {
              const user = userCredential.user;
              dispatch(setLogin(user.uid));
              // update the database
              const userRef = doc(db, "users", user.uid);
              await setDoc(userRef, {
                name: name,
                phone:phone,
                email: email, 
              });
      
              // update email to redux store
              await dispatch(setEmail(email));
              // update login 
              await dispatch(setLogin(user.uid))
            })
            .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              if (errorCode === "auth/email-already-in-use") {
                Alert.alert("Email already in use");
                setLoading(false);
              }
              console.error(
                `errorCode:, ${errorCode}, errorMessage:${errorMessage}`
              );
            });
        } catch (error) {
          console.log(error);
        }
      }
    
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
              Create Account
            </Text>
            <Text style={{ fontSize: 20, fontFamily: "Lexend_400Regular" }}>
              Sign up to get started!
            </Text>
          </View>
          {/* Social Logins */}
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              gap: 50,
              marginVertical: 10,
            }}
          >
        
            {/* Google */}
            <GoogleSignInButton/>
            {/* Facebook */}
            <TouchableOpacity>
              <Avatar.Image
                style={{ backgroundColor: "transparent" }}
                size={50}
                source={require("../../assets/images/socialmedialogos/facebook.png")}
              />
            </TouchableOpacity>

            {/* apple */}
            <TouchableOpacity>
              <Avatar.Image
                style={{ backgroundColor: "transparent" }}
                size={50}
                source={require("../../assets/images/socialmedialogos/apple.png")}
              />
            </TouchableOpacity>
          </View>
          {/* input fields */}
          <View style={{ gap: 30, alignItems: "center" }}>
            {/* name */}
            <CustomTextInput
              label={"Name"}
              value={name}
              textInputOnchange={(text) => setName(text)}
            />
            {/* phone */}
            <CustomTextInput
              label={"Phone"}
              value={phone}
              textInputOnchange={(text) => setPhone(text)}
            />
            {/* email */}
            <CustomTextInput
              label={"Email"}
              value={email}
              textInputOnchange={(text) => setUserEmail(text)}
            />
            {/* password */}
            <CustomTextInput
              label={"Password"}
              value={password}
              textInputOnchange={(text) => setPassword(text)}
            />
          </View>
          {/* checkbox */}
          <View
            style={{
              paddingVertical: 10,
              paddingHorizontal: 25,
              width: 370,
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <CustomCheckBox
              checked={checked}
              onCheckBoxPress={() => {
                setChecked(!checked);
              }}
            />
            <Text
              style={{
                fontSize: 20,
                fontFamily: "Lexend_300Light",
                paddingLeft: 5,
              }}
            >
              I agree with the Terms of Service and Privacy Policy
            </Text>
          </View>
          {/* button */}
          <View style={{ alignItems: "center", paddingTop: 20 }}>
           {isLoading ? <ActivityIndicator/> :  <ActionButton
              label={"Create Account"}
              buttonStyle={{ width: 300, borderRadius: 10, paddingVertical: 5 }}
              labelStyle={{ fontSize: 20, fontFamily: "Lexend_200ExtraLight" }}
              handleActionButton={handleEmailAuth}
            />}
          </View>

     
          {/* Login */}
          <View
            style={{
              paddingVertical: 15,
              paddingHorizontal: 10,
              width: 380,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                fontSize: 20,
                fontFamily: "Lexend_300Light",
                paddingLeft: 5,
              }}
            >
              Already have anaccount? 
            </Text>
            <TouchableOpacity style={{paddingHorizontal:10}} onPress={()=>navigation.navigate('Login')}><View>
                <Text style={{color:theme.colors.primary, fontFamily:'Lexend_500Medium', fontSize: 20}}>Login</Text>
              </View></TouchableOpacity>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
};

export default SignUp;

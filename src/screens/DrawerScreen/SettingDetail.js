import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";
import React from "react";
import { Divider, useTheme } from "react-native-paper";
import ToggleSwitch from "../../components/ToggleSwitch/ToggleSwitch";
import { removeData } from "../../../app/utils/AsyncStorage/RemoveData";
import { getData } from "../../../app/utils/AsyncStorage/GetData";
import { signOut } from "firebase/auth";
import { auth } from "../../../app/utils/firebaseConfig";

const SettingDetail = ({ navigation }) => {
  const theme = useTheme();
  // array to hold options
  // const OPTIONS = [
  //   {name:'', belowNames:'', switch:false,}
  // ]
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: theme.colors.background }}>
      <View style={{ padding: 15 }}>
        <Text style={{ fontSize: 40 }}>Settings</Text>
      </View>
      <Divider style={{ height: 5, width: 390, alignSelf: "center" }} />

      <View>
        <ToggleSwitch name={"App Language"} belowNames={"English"} />
      </View>
      <Divider style={{ height: 2, width: 390, alignSelf: "center" }} />
      <View>
        <ToggleSwitch
          name={"Don't call me"}
          belowNames={"Don't call unless it's emergency"}
        />
      </View>
      <Divider style={{ height: 2, width: 390, alignSelf: "center" }} />
      <View>
        <ToggleSwitch name={"Share my location"} belowNames={"Not neccesary"} />
      </View>
      <Divider style={{ height: 2, width: 390, alignSelf: "center" }} />
      <View>
        <TouchableOpacity onPress={() => navigation.navigate("Notification")}>
          <View>
            <ToggleSwitch name={"Notification"} />
          </View>
        </TouchableOpacity>
      </View>
      <Divider style={{ height: 2, width: 390, alignSelf: "center" }} />
      <View>
        <TouchableOpacity
          onPress={() => signOut(auth).catch((err) => console.log(err))}
        >
          <SettingsTabs
            name={"Logout"}
            nameColor={"red"}
            fontFamily={"Lexend_700Bold"}
          />
        </TouchableOpacity>
      </View>
      <Divider style={{ height: 2, width: 390, alignSelf: "center" }} />
    </SafeAreaView>
  );
};

export default SettingDetail;

const SettingsTabs = ({ name, nameColor, fontFamily, belowNames }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "stretch",
        justifyContent: "space-between",
        backgroundColor: "white",
        height: 80,
        padding: 20,
        width: "100%",
      }}
    >
      <View
        style={{
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
        }}
      >
        <Text
          style={{ fontSize: 20, color: nameColor, fontFamily: fontFamily }}
        >
          {name}
        </Text>
        <Text style={{ fontSize: 15 }}>{belowNames}</Text>
      </View>
    </View>
  );
};

import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native";
import AccountEditProfileComponent from "../../../components/AccountEditProfileComponent/AccountEditProfileComponent";
import { TouchableOpacity } from "react-native";

const AccountEditing = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#E0DADA" }}>
      <View style={{ padding: 20 }}>
        <Text style={{ fontWeight: "bold", fontSize: 25 }}>Edit profile</Text>
      </View>
      <View>
        <TouchableOpacity
          onPress={() => navigation.navigate("Update Your Name")}
        >
          <AccountEditProfileComponent
            edit={"edit"}
            address={"User Name"}
            iconName={"user"}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("Update Your Name")}
        >
          <AccountEditProfileComponent
            edit={"edit"}
            address={"+233 (8978788)"}
            iconName={"phone"}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("Update Your Name")}
        >
          <AccountEditProfileComponent
            edit={"edit"}
            address={"Kimba@gmail"}
            icon={"envelope"}
            // <SimpleLineIcons name="envelope" size={24} color="black" />
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default AccountEditing;

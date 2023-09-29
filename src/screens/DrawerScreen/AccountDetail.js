import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native";
import { EvilIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { Card, Divider, Title } from "react-native-paper";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";

// routing

const AccountDetail = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* ===================================== */}
      <Card>
        <View
          style={{
            flexDirection: "column",
            alignItems: "center",
            padding: 20,
            gap: 2,
          }}
        >
          <View>
            <EvilIcons name="user" size={100} color="black" />
          </View>
          <View>
            <Text style={{ fontWeight: "bold", fontSize: 26 }}>User Name</Text>
          </View>
          <View>
            <Text style={{ fontSize: 17 }}>+265656666</Text>
          </View>
          <View style={{ flexDirection: "row", alignItems: "center", gap: 4 }}>
            <View>
              <Feather name="star" size={15} color="green" />
            </View>
            <View>
              <Text>9.0</Text>
            </View>
          </View>
          <TouchableOpacity onPress={() => navigation.navigate("Edit")}>
            <View
              style={{ flexDirection: "row", alignItems: "center", gap: 4 }}
            >
              <View>
                <Text
                  style={{ fontWeight: "bold", fontSize: 20, color: "green" }}
                >
                  Edit
                </Text>
              </View>
              <View>
                <EvilIcons name="pencil" size={30} color="black" />
              </View>
            </View>
          </TouchableOpacity>
        </View>
        {/* ===================== */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            padding: 15,
            alignItems: "center",
          }}
        >
          <View style={{ flexDirection: "row", gap: 10 }}>
            <FontAwesome5 name="envelope" size={25} color="black" />
            <Text style={{ fontSize: 18 }}>@gmail.com</Text>
          </View>

          <View>
            <MaterialIcons name="verified" size={24} color="green" />
          </View>
        </View>
      </Card>
      {/* ===================== */}
      <Card style={{ marginVertical: 15 }}>
        <View style={{ flexDirection: "column", gap: 20, padding: 15 }}>
          <View>
            <Text style={{ fontSize: 27, fontWeight: "bold" }}>Places</Text>
          </View>
          <View style={{ flexDirection: "row", gap: 10, alignItems: "center" }}>
            <AntDesign name="home" size={25} color="black" />
            <Text style={{ fontSize: 18 }}>Home</Text>
          </View>
          <Divider />
          <View style={{ flexDirection: "row", gap: 10, alignItems: "center" }}>
            <Entypo name="location-pin" size={25} color="black" />
            <Text style={{ fontSize: 18 }}>Location</Text>
          </View>
        </View>
      </Card>
      {/* =============================== */}
      <Card style={{ marginVertical: 5 }}>
        <View style={{ flexDirection: "column", gap: 20, padding: 15 }}>
          <View style={{ flexDirection: "column", gap: 10 }}>
            <Text style={{ fontSize: 18 }}>Languages</Text>
            <Text style={{ fontSize: 18 }}>English-US</Text>
          </View>
          <Divider />
          <View style={{ flexDirection: "row", gap: 10, alignItems: "center" }}>
            <Text style={{ fontSize: 18 }}>Communication</Text>
          </View>
        </View>
      </Card>
      {/* ======================= */}
      <Card style={{ marginVertical: 5, height: "30%" }}>
        <View style={{ flexDirection: "column", gap: 20, padding: 15 }}>
          <View style={{ flexDirection: "row", gap: 10, alignItems: "center" }}>
            <AntDesign name="logout" size={25} color="black" />
            <Text style={{ fontSize: 18, fontWeight: "600" }}>Log out</Text>
          </View>
          <Divider />
          <View style={{ flexDirection: "row", gap: 10, alignItems: "center" }}>
            <AntDesign name="delete" size={25} color="black" />
            <Text style={{ fontSize: 18, fontWeight: "600" }}>
              Delete Account
            </Text>
          </View>
        </View>
      </Card>

      {/* ===================================== */}
    </SafeAreaView>
  );
};

export default AccountDetail;

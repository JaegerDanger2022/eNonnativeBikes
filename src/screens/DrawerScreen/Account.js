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

// routing

const Accounts = () => {
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
            <Text style={{ fontWeight: "bold", fontSize: 25 }}>User Name</Text>
          </View>
          <View>
            <Text style={{ fontSize: 15 }}>+265656666</Text>
          </View>
          <View style={{ flexDirection: "row", alignItems: "center", gap: 4 }}>
            <View>
              <Feather name="star" size={15} color="green" />
            </View>
            <View>
              <Text>9.0</Text>
            </View>
          </View>
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
            <FontAwesome5 name="envelope" size={20} color="black" />
            <Text>@gmail.com</Text>
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
            <Text style={{ fontSize: 25, fontWeight: "bold" }}>Places</Text>
          </View>
          <View style={{ flexDirection: "row", gap: 10, alignItems: "center" }}>
            <AntDesign name="home" size={24} color="black" />
            <Text>Home</Text>
          </View>
          <Divider />
          <View style={{ flexDirection: "row", gap: 10, alignItems: "center" }}>
            <Entypo name="location-pin" size={24} color="black" />
            <Text>Location</Text>
          </View>
        </View>
      </Card>
      {/* =============================== */}
      <Card style={{ marginVertical: 5 }}>
        <View style={{ flexDirection: "column", gap: 20, padding: 15 }}>
          <View style={{ flexDirection: "column", gap: 10 }}>
            <Text>Languages</Text>
            <Text>English-US</Text>
          </View>
          <Divider />
          <View style={{ flexDirection: "row", gap: 10, alignItems: "center" }}>
            <Text>Communication</Text>
          </View>
        </View>
      </Card>
      {/* ======================= */}
      <Card style={{ marginVertical: 5, height: "30%" }}>
        <View style={{ flexDirection: "column", gap: 20, padding: 15 }}>
          <View style={{ flexDirection: "row", gap: 10, alignItems: "center" }}>
            <AntDesign name="logout" size={24} color="black" />
            <Text>Log out</Text>
          </View>
          <Divider />
          <View style={{ flexDirection: "row", gap: 10, alignItems: "center" }}>
            <AntDesign name="delete" size={24} color="black" />
            <Text>Delete Account</Text>
          </View>
        </View>
      </Card>

      {/* ===================================== */}
    </SafeAreaView>
  );
};

export default Accounts;

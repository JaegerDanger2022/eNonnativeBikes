import { View, Text, ScrollView } from "react-native";
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
    <SafeAreaView style={{ flex: 1, backgroundColor: "#E0DADA" }}>
      <ScrollView>
        {/* ===================================== */}
        <Card style={{ backgroundColor: "#C93D5D" }}>
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
              <Text style={{ fontWeight: "bold", fontSize: 26 }}>
                User Name
              </Text>
            </View>
            <View>
              <Text style={{ color: "wheat", fontSize: 17 }}>+265656666</Text>
            </View>
            <View
              style={{ flexDirection: "row", alignItems: "center", gap: 4 }}
            >
              <View>
                <Feather name="star" size={15} color="green" />
              </View>
              <View>
                <Text style={{ color: "wheat" }}>9.0</Text>
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
              <FontAwesome5 name="envelope" size={25} color="green" />
              <Text style={{ color: "#007481", fontSize: 18 }}>@gmail.com</Text>
            </View>

            <View>
              <MaterialIcons name="verified" size={24} color="green" />
            </View>
          </View>
        </Card>
        {/* ===================== */}
        <Card style={{ marginVertical: 15, backgroundColor: "#C93D5D" }}>
          <View style={{ flexDirection: "column", gap: 20, padding: 15 }}>
            <View>
              <Text
                style={{ color: "white", fontSize: 27, fontWeight: "bold" }}
              >
                Places
              </Text>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate("work")}>
              <View
                style={{ flexDirection: "row", gap: 10, alignItems: "center" }}
              >
                <AntDesign name="home" size={25} color="black" />
                <Text style={{ color: "white", fontSize: 18 }}>Home</Text>
              </View>
            </TouchableOpacity>
            <Divider />
            <TouchableOpacity onPress={() => navigation.navigate("location")}>
              <View
                style={{ flexDirection: "row", gap: 10, alignItems: "center" }}
              >
                <Entypo name="location-pin" size={25} color="black" />
                <Text style={{ color: "white", fontSize: 18 }}>Location</Text>
              </View>
            </TouchableOpacity>
          </View>
        </Card>
        {/* =============================== */}
        <Card style={{ marginVertical: 5, backgroundColor: "#C93D5D" }}>
          <View style={{ flexDirection: "column", gap: 20, padding: 15 }}>
            <View style={{ flexDirection: "column", gap: 10 }}>
              <TouchableOpacity
                onPress={() => navigation.navigate("Languages")}
              >
                <Text style={{ color: "white", fontSize: 18 }}>Languages</Text>
              </TouchableOpacity>
              <Text style={{ color: "white", fontSize: 18 }}>English-US</Text>
            </View>
            <Divider />
            <TouchableOpacity
              onPress={() => navigation.navigate("communication")}
            >
              <View
                style={{ flexDirection: "row", gap: 10, alignItems: "center" }}
              >
                <Text style={{ color: "white", fontSize: 18 }}>
                  Communication
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </Card>
        {/* ======================= */}
        <Card
          style={{
            marginVertical: 10,
            height: "30%",
            backgroundColor: "#C93D5D",
          }}
        >
          <View style={{ flexDirection: "column", gap: 20, padding: 15 }}>
            <View
              style={{ flexDirection: "row", gap: 10, alignItems: "center" }}
            >
              <AntDesign name="logout" size={25} color="red" />
              <Text style={{ color: "white", fontSize: 18, fontWeight: "600" }}>
                Log out
              </Text>
            </View>
            <Divider />
            <View
              style={{ flexDirection: "row", gap: 10, alignItems: "center" }}
            >
              <AntDesign name="delete" size={25} color="green" />
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: "600",
                  color: "white",
                }}
              >
                Delete Account
              </Text>
            </View>
          </View>
        </Card>
      </ScrollView>
      {/* ===================================== */}
    </SafeAreaView>
  );
};

export default AccountDetail;

import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { Divider } from "react-native-paper";

const AboutDetail = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#DED8D8" }}>
      <View style={{ padding: 10 }}>
        <View style={{ flexDirection: "column", gap: 20 }}>
          <View>
            <Text style={{ fontSize: 25, fontWeight: "bold" }}>About</Text>
            <Text style={{ fontSize: 10 }}>Version</Text>
          </View>
          <Divider />
          <View style={{ flexDirection: "column", gap: 20 }}>
            <View
              style={{ flexDirection: "row", alignItems: "center", gap: 10 }}
            >
              <AntDesign name="like2" size={24} color="black" />
              <Text style={{ fontSize: 16 }}>Like Us on Instagram</Text>
            </View>
            <Divider />
            <View
              style={{ flexDirection: "row", alignItems: "center", gap: 10 }}
            >
              <AntDesign name="like2" size={24} color="black" />
              <Text style={{ fontSize: 16 }}>Acknowledgements</Text>
            </View>
            <Divider />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default AboutDetail;

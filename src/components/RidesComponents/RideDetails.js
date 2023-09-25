import { View, Text, SafeAreaView, ScrollView } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/MaterialCommunityIcons"; 
import { Divider } from "react-native-paper";
import { Button } from "react-native-paper";
import RideSummary from "./RideSummary";

export default function RideDetails (){
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
        <View>
          <RideSummary
            names={"Ride with Emmanuel"}
            date={"Thus, Oct, 2099"}
            icon={"account-circle"}
          />
        </View>
        <View style={{ width: "100%", height: 200, backgroundColor: "blue" }}>
          <Text>Snap Map</Text>
        </View>
        {/* ================================== */}
        <View style={{ width: "100%", height: 300 }}>
          <View
            style={{
              flexDirection: "column",
              marginVertical: 10,
              justifyContent: "space-between",
            }}
          >
            <View
              style={{
                flexDirection: "row",
                gap: 10,
                alignItems: "center",
                padding: 10,
              }}
            >
              <View>
                <Icon color={"green"} size={30} name="adjust" />
              </View>
              <View>
                <Text style={{ fontSize: 18, fontWeight: "500" }}>
                  Virginia Walk
                </Text>
                <Text style={{ fontSize: 14, color: "red" }}>12:90</Text>
              </View>
            </View>
          </View>
          {/* ================================= */}
          <View
            style={{
              flexDirection: "row",
              gap: 10,
              alignItems: "center",
              padding: 10,
            }}
          >
            <View>
              <Icon size={30} color={"red"} name="adjust" />
            </View>
            <View>
              <Text style={{ fontSize: 18, fontWeight: "500" }}>
                Virginia Walk
              </Text>
              <Text style={{ fontSize: 14, color: "red" }}>23:12</Text>
              <Text style={{ fontSize: 16 }}>country</Text>
            </View>
          </View>
          <View>
            <Text style={{ padding: 10, fontSize: 16, color: "green" }}>
              Additional ride details can be found in your email receipt
            </Text>
          </View>
          <View style={{ padding: 10, alignSelf: "center" }}>
            <Button
              icon="bike"
              mode="contained"
              onPress={() => console.log("Pressed")}
            >
              Get help width Ride
            </Button>
          </View>
        </View>
        {/* =================================== */}
        <Divider style={{ height: 8 }} />
        <View style={{ width: "100%", height: 350 }}>
          <View style={{ padding: 10, flexDirection: "column", gap: 25 }}>
            <View>
              <Text style={{ fontSize: 20, fontWeight: "900" }}>Payment</Text>
            </View>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <View>
                <Text style={{ fontSize: 15 }}>Fare * Bike</Text>
              </View>
              <View>
                <Text
                  style={{ fontSize: 15, fontWeight: "800", color: "green" }}
                >
                  Ghc 61.00
                </Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                color: "#6750A4",
              }}
            >
              <View>
                <Text style={{ fontSize: 15, color: "#6750A4" }}>Discount</Text>
              </View>
              <View>
                <Text style={{ fontSize: 15, fontWeight: "800", color: "red" }}>
                  Ghc 65.00
                </Text>
              </View>
            </View>
            <Divider style={{ height: 5 }} />
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <View>
                <Text style={{ fontSize: 15 }}>Total</Text>
              </View>
              <View>
                <Text
                  style={{ fontSize: 15, fontWeight: "800", color: "green" }}
                >
                  Ghc 54.00
                </Text>
              </View>
            </View>
            {/* =============================== */}
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <View
                style={{
                  flexDirection: "row",
                  gap: 10,
                }}
              >
                <View>
                  <Icon size={20} color={"green"} name="cash" />
                </View>
                <View>
                  <Text style={{ fontSize: 15 }}>cash</Text>
                </View>
              </View>
              <View>
                <Text
                  style={{ fontSize: 15, fontWeight: "800", color: "green" }}
                >
                  Ghc 65.00
                </Text>
              </View>
            </View>
            <View style={{ alignSelf: "center" }}>
              <Button
                icon="bike"
                mode="contained"
                style={{ width: "100%" }}
                onPress={() => console.log("Pressed")}
              >
                Get receipt
              </Button>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

 

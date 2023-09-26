import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native";
import { Card, Divider } from "react-native-paper";
import { Fontisto } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

const Wallet = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Card style={{ width: "100%", height: 292 }}>
        <View style={{ padding: 20 }}>
          <View style={{ flexDirection: "column", gap: 20 }}>
            <View>
              <Text style={{ fontSize: 15, fontWeight: "bold" }}>Payment</Text>
            </View>
            <Card
              style={{ width: "100%", backgroundColor: "#F5F4F2", height: 130 }}
            >
              <View
                style={{
                  flexDirection: "column",
                  gap: 10,
                  marginVertical: 20,
                  padding: 15,
                }}
              >
                <View>
                  <Text>Payment</Text>
                  <Text>GHC 0</Text>
                </View>
                <Divider />
                <View>
                  <Text>Ride Balance is available</Text>
                </View>
              </View>
            </Card>
            <View style={{ flexDirection: "row", gap: 20 }}>
              <View>
                <AntDesign name="questioncircle" size={24} color="red" />
              </View>
              <View>
                <Text>What is Ride balance?</Text>
              </View>
            </View>
            <View style={{ flexDirection: "row", gap: 20 }}>
              <View>
                <Ionicons name="md-timer-sharp" size={24} color="black" />
              </View>
              <View>
                <Text>See balance and transactions</Text>
              </View>
            </View>
          </View>
          <View style={{ marginVertical: 10 }}>
            <Divider />
          </View>
        </View>
      </Card>
      {/* =========================================== */}
      <Card style={{ width: "100%", marginVertical: 20 }}>
        <View style={{ padding: 20 }}>
          <View style={{ flexDirection: "column", gap: 20 }}>
            <Card
              style={{
                width: "100%",
                backgroundColor: "#F5F4F2",
                height: 150,
                padding: 15,
              }}
            >
              <View>
                <Text>Payment</Text>
              </View>
              <View
                style={{ flexDirection: "column", gap: 10, marginVertical: 20 }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      gap: 10,
                    }}
                  >
                    <View>
                      <MaterialCommunityIcons
                        name="cash"
                        size={24}
                        color="green"
                      />
                    </View>
                    <View>
                      <Text>cash</Text>
                    </View>
                  </View>
                  <View>
                    <AntDesign name="checkcircle" size={24} color="green" />
                  </View>
                </View>
                <Divider />
                <View
                  style={{
                    flexDirection: "row",
                    gap: 20,
                    alignItems: "center",
                  }}
                >
                  <View>
                    <Fontisto name="visa" size={24} color="black" />
                  </View>
                  <View>
                    <Text>Add Debit/credit card</Text>
                  </View>
                </View>
              </View>
            </Card>
          </View>
        </View>
      </Card>
    </SafeAreaView>
  );
};

export default Wallet;

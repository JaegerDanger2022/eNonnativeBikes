import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native";
import { Card, Divider } from "react-native-paper";
import { Fontisto } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { Image } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

const PaymentDetail = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Card style={{ width: "100%", height: 292 }}>
        <View style={{ padding: 20 }}>
          <View style={{ flexDirection: "column", gap: 20 }}>
            <View>
              <Text style={{ fontSize: 20, fontWeight: "bold" }}>Payment</Text>
            </View>

            <Card
              style={{ width: "100%", backgroundColor: "white", height: 130 }}
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
                  <Text style={{ fontSize: 15, fontWeight: "800" }}>
                    Payment Amount
                  </Text>
                  <Text style={{ fontSize: 15, fontWeight: "400" }}>GHC 0</Text>
                </View>
                <Divider />
                <View>
                  <Text style={{ fontSize: 15, fontWeight: "800" }}>
                    Ride Balance is available
                  </Text>
                </View>
              </View>
            </Card>
            <View style={{ flexDirection: "row", gap: 20 }}>
              <View>
                <AntDesign name="questioncircle" size={24} color="red" />
              </View>
              <View>
                <Text style={{ fontSize: 15, fontWeight: "600" }}>
                  What is Ride balance?
                </Text>
              </View>
            </View>
            <View style={{ flexDirection: "row", gap: 20 }}>
              <View>
                <Ionicons name="md-timer-sharp" size={24} color="black" />
              </View>
              <View>
                <Text style={{ fontSize: 15, fontWeight: "600" }}>
                  See balance and transactions
                </Text>
              </View>
            </View>
          </View>
          <View style={{ marginVertical: 10 }}>
            <Divider />
          </View>
        </View>
      </Card>
      {/* =========================================== */}
      <Card style={{ width: "100%", marginVertical: 2 }}>
        <View style={{ padding: 20 }}>
          <View style={{ flexDirection: "column", gap: 20 }}>
            <Card
              style={{
                width: "100%",
                backgroundColor: "white",
                height: 220,
                padding: 15,
              }}
            >
              <View>
                <Text style={{ fontSize: 20, fontWeight: "800" }}>Payment</Text>
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
                <View
                  style={{
                    flexDirection: "row",
                    gap: 20,
                    alignItems: "center",
                  }}
                >
                  <View>
                    {/* <Fontisto name="visa" size={24} color="black" /> */}
                    <Image
                      source={require("../../../assets/images/mtnLogo/vodafone-6.png")}
                      style={{ width: 40, height: 30 }}
                    />
                  </View>
                  <View>
                    <Text style={{ fontSize: 18, fontWeight: "500" }}>
                      Voda
                    </Text>
                  </View>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    gap: 20,
                    alignItems: "center",
                  }}
                >
                  <View>
                    {/* <Fontisto name="visa" size={24} color="black" /> */}
                    <Image
                      source={require("../../../assets/images/mtnLogo/mtn-group.png")}
                      style={{ width: 40, height: 30 }}
                    />
                  </View>
                  <View>
                    <Text style={{ fontSize: 18, fontWeight: "500" }}>
                      Mobile Money
                    </Text>
                  </View>
                </View>
              </View>
            </Card>
          </View>
        </View>
      </Card>
      {/* ======================= */}
      <Card style={{ width: "100%", marginVertical: 10 }}>
        <View style={{ padding: 20 }}>
          <View style={{ flexDirection: "column", gap: 20 }}>
            <Card
              style={{
                width: "100%",
                backgroundColor: "white",
                height: 200,
                padding: 15,
              }}
            >
              <View
                style={{ flexDirection: "row", gap: 10, alignItems: "center" }}
              >
                <MaterialIcons name="business-center" size={24} color="black" />
                <Text style={{ fontSize: 20, fontWeight: "300" }}>
                  Set Up Profile
                </Text>
              </View>
            </Card>
          </View>
        </View>
      </Card>
    </SafeAreaView>
  );
};

export default PaymentDetail;

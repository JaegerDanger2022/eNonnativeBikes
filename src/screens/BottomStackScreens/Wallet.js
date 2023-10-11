import { View, Text, ScrollView } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native";
import { Button, Card, Divider } from "react-native-paper";
import { FontAwesome5 } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

const Wallet = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#E0DADA" }}>
      <ScrollView>
        {/* <Card style={{ width: "100%", height: 292 }}> */}
        <View style={{ padding: 20 }}>
          <View style={{ flexDirection: "column", gap: 20 }}>
            <View>
              <Text
                style={{ fontSize: 20, fontWeight: "bold", color: "black" }}
              >
                Check Wallet
              </Text>
            </View>
            <Card
              style={{ width: "100%", backgroundColor: "#C93E5E", height: 130 }}
            >
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: 10,
                  marginVertical: 20,
                  padding: 15,
                }}
              >
                <View>
                  <Text
                    style={{ fontSize: 15, fontWeight: "900", color: "white" }}
                  >
                    Ride Cash
                  </Text>
                  <Text
                    style={{
                      fontSize: 28,
                      fontWeight: "900",
                      color: "#056F7B",
                    }}
                  >
                    GHC 0
                  </Text>
                </View>

                <View>
                  <Ionicons
                    name="md-arrow-redo-outline"
                    size={24}
                    color="black"
                  />
                </View>
              </View>
            </Card>
            <View style={{ flexDirection: "row", gap: 20 }}>
              <View>
                <Text
                  style={{ fontSize: 20, fontWeight: "700", color: "black" }}
                >
                  Payment methods
                </Text>
              </View>
            </View>
            <View style={{ flexDirection: "row", gap: 10 }}>
              <View>
                <Ionicons name="cash" size={24} color="green" />
              </View>
              <View>
                <Text style={{ color: "black", fontWeight: "bold" }}>Cash</Text>
              </View>
            </View>
          </View>
          <View style={{ marginVertical: 10, color: "white" }}>
            <Button mode="contained" onPress={() => console.log("Pressed")}>
              Add payment method
            </Button>
          </View>
        </View>
        {/* </Card> */}
        {/* =========================================== */}
        {/* <Card style={{ width: "100%", marginVertical: 20 }}> */}
        <View style={{ padding: 20 }}>
          <View style={{ flexDirection: "column", gap: 20 }}>
            <View>
              <Text style={{ fontSize: 20, fontWeight: "700", color: "black" }}>
                Ride Status
              </Text>
            </View>
            <Card
              style={{
                width: "100%",
                backgroundColor: "#C93E5E",
                height: 150,
                padding: 15,
              }}
            >
              <View
                style={{ flexDirection: "column", gap: 30, marginVertical: 20 }}
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
                      <EvilIcons name="user" size={30} color="#056F7B" />
                    </View>
                    <View>
                      <Text
                        style={{
                          fontSize: 15,
                          fontWeight: "900",
                          color: "white",
                        }}
                      >
                        Personal
                      </Text>
                    </View>
                  </View>
                </View>
                {/* <Divider /> */}
                <View
                  style={{
                    flexDirection: "row",
                    gap: 20,
                    alignItems: "center",
                  }}
                >
                  <View>
                    <SimpleLineIcons
                      name="screen-desktop"
                      size={30}
                      color="#056F7B"
                    />
                  </View>
                  <View>
                    <Text
                      style={{
                        fontSize: 15,
                        fontWeight: "900",
                        color: "white",
                      }}
                    >
                      Start using ride for business
                    </Text>
                    <Text
                      style={{
                        fontSize: 15,
                        fontWeight: "900",
                        color: "white",
                      }}
                    >
                      Turn on business travel features
                    </Text>
                  </View>
                </View>
              </View>
            </Card>
          </View>
        </View>
        {/* </Card> */}
        {/* ============================================= */}
        <View style={{ padding: 20 }}>
          <View style={{ flexDirection: "column", gap: 20 }}>
            <View>
              <Text style={{ fontSize: 20, fontWeight: "700", color: "black" }}>
                Vouchers
              </Text>
            </View>
            <Card
              style={{
                width: "100%",
                backgroundColor: "#C93E5E",
                height: 150,
                padding: 15,
              }}
            >
              <View
                style={{ flexDirection: "column", gap: 30, marginVertical: 20 }}
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
                      <AntDesign name="idcard" size={24} color="#056F7B" />
                    </View>
                    <View>
                      <Text
                        style={{
                          fontSize: 15,
                          fontWeight: "900",
                          color: "white",
                        }}
                      >
                        Vouchers
                      </Text>
                    </View>
                  </View>
                </View>
                {/* <Divider /> */}
                <View
                  style={{
                    flexDirection: "row",
                    gap: 10,
                    alignItems: "center",
                  }}
                >
                  <View>
                    <FontAwesome5 name="plus" size={30} color="#056F7B" />
                  </View>
                  <View>
                    <Text
                      style={{
                        fontSize: 15,
                        fontWeight: "900",
                        color: "white",
                      }}
                    >
                      Add Voucher code
                    </Text>
                  </View>
                </View>
              </View>
            </Card>
          </View>
        </View>
        {/* =================== */}
        <View style={{ padding: 20 }}>
          <View style={{ flexDirection: "column", gap: 20 }}>
            <View>
              <Text style={{ fontSize: 20, fontWeight: "900", color: "black" }}>
                Promotions
              </Text>
            </View>
            <Card
              style={{
                width: "100%",
                backgroundColor: "#C93E5E",
                height: 150,
                padding: 15,
              }}
            >
              <View
                style={{ flexDirection: "column", gap: 30, marginVertical: 20 }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                ></View>
                {/* <Divider /> */}
                <View
                  style={{
                    flexDirection: "row",
                    gap: 20,
                    alignItems: "center",
                  }}
                >
                  <View>
                    <FontAwesome5 name="plus" size={30} color="#056F7B" />
                  </View>
                  <View>
                    <Text
                      style={{
                        fontSize: 15,
                        fontWeight: "900",
                        color: "white",
                      }}
                    >
                      Add Promo code
                    </Text>
                  </View>
                </View>
              </View>
            </Card>
          </View>
        </View>
        {/* =================== */}
        <View style={{ padding: 20 }}>
          <View style={{ flexDirection: "column", gap: 20 }}>
            <View>
              <Text style={{ fontSize: 20, fontWeight: "700", color: "black" }}>
                Referrals
              </Text>
            </View>
            <Card
              style={{
                width: "100%",
                backgroundColor: "#C93E5E",
                height: 150,
                padding: 15,
              }}
            >
              <View
                style={{ flexDirection: "column", gap: 30, marginVertical: 20 }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                ></View>
                {/* <Divider /> */}
                <View
                  style={{
                    flexDirection: "row",
                    gap: 20,
                    alignItems: "center",
                  }}
                >
                  <View>
                    <FontAwesome5 name="plus" size={30} color="#056F7B" />
                  </View>
                  <View>
                    <Text style={{ color: "white", fontWeight: "900" }}>
                      Add Promo code
                    </Text>
                  </View>
                </View>
              </View>
            </Card>
          </View>
        </View>
        {/* =================== */}
        <View style={{ padding: 20 }}>
          {/* <View style={{ flexDirection: "column", gap: 20 }}>
            <View>
              <Text style={{ fontSize: 20, fontWeight: "700", color: "black" }}>
                Live @copy 2023
              </Text>
            </View>
          </View> */}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Wallet;

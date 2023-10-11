import {
  View,
  Text,
  SafeAreaView,
  Button,
  Alert,
  Image,
  Platform,
} from "react-native";
import React from "react";
import { useState } from "react";
import { Modal, TextInput } from "react-native-paper";
import CustomTextInput from "../../components/CustomTextInput";
import { Entypo } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

const RobotoModalDetails = ({ navigation }) => {
  const [visibility, setVisibility] = useState(false);

  const show = () => setVisibility(true);
  const hide = () => setVisibility(false);
  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* ======================================= */}
      <View
        style={{
          width: "100%",
          height: "100%",
          backgroundColor: "#008A9A",
        }}
      >
        <View
          style={{
            position: "absolute",
            width: "40%",
            height: "40%",
            // marginVertical: 45,
            marginHorizontal: 350,
            zIndex: 100,
            marginVertical: Platform.select({
              ios: 45,
              android: 45,
            }),
            left: Platform.select({
              ios: -42,
            }),
          }}
        >
          <Entypo
            name="cross"
            size={30}
            color="black"
            onPress={() => navigation.navigate("Map")}
          />
        </View>
        {/* shapes around around bot*/}

        <View
          style={{
            position: "absolute",
            backgroundColor: "#8CB6FF", // 8CB6FF
            width: "6.5%",
            height: "2%",
            marginVertical: 40,
            // marginHorizontal: 240,
            zIndex: 20,
            marginHorizontal: Platform.select({
              ios: 230,
              android: 240,
            }),
          }}
        ></View>
        <View
          style={{
            position: "absolute",
            backgroundColor: "#8CB6FF",
            width: "7%",
            height: "2%",
            marginVertical: 40,
            // marginHorizontal: 156,
            zIndex: 20,
            marginHorizontal: Platform.select({
              ios: 136,
              android: 145,
            }),
          }}
        ></View>
        <View
          style={{
            width: "22%",
            height: "10%",
            position: "absolute",
            backgroundColor: "black", //8CB6FF
            borderBottomStartRadius: 50,
            borderBottomEndRadius: 50,
            zIndex: 20,
            marginVertical: 40,
            marginHorizontal: Platform.select({
              ios: 150,
              android: 160,
            }),
          }}
        >
          <Image
            source={require("../../../assets/images/bike/bot.png")}
            resizeMode="contain"
            style={{
              width: "80%",
              height: "80%",
              position: "absolute",
              bottom: 40,
              backgroundColor: "#EFEBEF",
              borderRadius: 100,
              left: Platform.select({
                ios: 9,
                android: 9,
              }),
            }}
          />
        </View>
        {/* shapes around around bot*/}
        <View
          style={{
            position: "absolute",
            backgroundColor: "green",
            width: "5%",
            height: "3%",
            // marginHorizontal: 250,
            borderTopLeftRadius: 40,
            zIndex: 20,
            marginVertical: 40,
            marginHorizontal: Platform.select({
              ios: 232,
              android: 250,
            }),
          }}
        ></View>
        <View
          style={{
            position: "absolute",
            backgroundColor: "green", //C93D5D
            width: "5%",
            height: "3%",
            // left: 150,
            marginVertical: 40,
            zIndex: 20,
            borderTopRightRadius: 25,
            // marginHorizontal: 5,
            marginHorizontal: Platform.select({
              ios: -19,
              android: 139.5,
            }),
          }}
        ></View>
        {/* End shapes */}

        <View
          style={{
            width: "100%",
            height: "100%",
            backgroundColor: "#C93D5D",
            marginVertical: 40,
            borderTopRightRadius: 40,
            borderTopLeftRadius: 40,
          }}
        >
          <View
            style={{
              marginVertical: 50,
              width: "100%",
              height: 800,
            }}
          >
            <View style={{ padding: 20 }}>
              <Text
                style={{ fontSize: 20, fontWeight: "bold", color: "white" }}
              >
                Hello I'm Bot
              </Text>
              <Text style={{ fontSize: 15, fontWeight: "700", color: "white" }}>
                How can I help?
              </Text>
            </View>
            <View style={{ alignItems: "center" }}>
              <CustomTextInput label={"Ask me a question"} />
            </View>
            <View style={{ padding: 20 }}>
              <Text
                style={{ fontSize: 20, fontWeight: "bold", color: "white" }}
              >
                Quick help
              </Text>
            </View>

            <View
              style={{
                alignSelf: "center",
                width: "90%",
                flexDirection: "column",
                gap: 10,
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  backgroundColor: "white",
                  height: 40,
                  borderRadius: 10,
                  padding: 10,
                }}
              >
                <Text style={{ fontSize: 17 }}>hello</Text>
                <AntDesign name="right" size={24} color="black" />
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  backgroundColor: "white",
                  height: 40,
                  borderRadius: 10,
                  padding: 10,
                }}
              >
                <Text style={{ fontSize: 17 }}>hello</Text>
                <AntDesign name="right" size={24} color="black" />
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  backgroundColor: "white",
                  height: 40,
                  borderRadius: 10,
                  padding: 10,
                }}
              >
                <Text style={{ fontSize: 17 }}>hello</Text>
                <AntDesign name="right" size={24} color="black" />
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  backgroundColor: "white",
                  height: 40,
                  borderRadius: 10,
                  padding: 10,
                }}
              >
                <Text style={{ fontSize: 17 }}>hello</Text>
                <AntDesign name="right" size={24} color="black" />
              </View>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default RobotoModalDetails;

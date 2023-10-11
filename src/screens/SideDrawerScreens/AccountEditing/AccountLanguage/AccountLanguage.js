import { View, Text, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Divider, Searchbar } from "react-native-paper";
import { Ionicons } from "@expo/vector-icons";
import { ScrollView } from "react-native-gesture-handler";

const AccountLanguage = () => {
  const [searchQuery, setSearchQuery] = React.useState("");

  const onChangeSearch = (query) => setSearchQuery(query);
  const Languages = [
    {
      title: "US",
      location: {
        name: "US",
      },
    },
  ];

  const LanguagesNames = () => {
    return Languages.map((item, index) => {
      return <Text key={index}>{item.title}</Text>;
    });
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#E0DADA" }}>
      {/* <View>{LanguagesNames()}</View> */}
      <View
        style={{
          width: "100%",

          alignItems: "center",
          // position: "absolute",
        }}
      >
        <Searchbar
          placeholder="Search"
          onChangeText={onChangeSearch}
          value={searchQuery}
        />
      </View>
      <ScrollView>
        <View style={{ padding: 10, paddingVertical: 10 }}>
          <View
            style={{
              // marginVertical: 70,
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <View
              style={{
                flexDirection: "row",
                gap: 20,
                alignItems: "center",
              }}
            >
              <Image
                source={require("../../../../../assets/images/mtnLogo/united-states-flag.png")}
                style={{ width: "20%", height: "70%" }}
              />
              <Text style={{ fontSize: 16 }}>US</Text>
            </View>
            <View>
              <Ionicons name="checkmark-circle" size={24} color="black" />
            </View>
          </View>
        </View>
        <Divider style={{ backgroundColor: "#007481" }} />
        {/* ==================================== */}
        <View style={{ padding: 10, paddingVertical: 10 }}>
          <View
            style={{
              // marginVertical: 70,
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <View
              style={{
                flexDirection: "row",
                gap: 20,
                alignItems: "center",
              }}
            >
              <Image
                source={require("../../../../../assets/images/mtnLogo/united-states-flag.png")}
                style={{ width: "20%", height: "70%" }}
              />
              <Text style={{ fontSize: 16 }}>British</Text>
            </View>
            <View>
              <Ionicons name="checkmark-circle" size={24} color="black" />
            </View>
          </View>
        </View>
        <Divider style={{ backgroundColor: "#007481" }} />
        {/* ======================== */}
        <View style={{ padding: 10, paddingVertical: 10 }}>
          <View
            style={{
              // marginVertical: 70,
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <View
              style={{
                flexDirection: "row",
                gap: 20,
                alignItems: "center",
              }}
            >
              <Image
                source={require("../../../../../assets/images/mtnLogo/united-states-flag.png")}
                style={{ width: "20%", height: "70%" }}
              />
              <Text style={{ fontSize: 16 }}>US</Text>
            </View>
            <View>
              <Ionicons name="checkmark-circle" size={24} color="black" />
            </View>
          </View>
        </View>
        <Divider style={{ backgroundColor: "#007481" }} />

        {/* ==================================== */}
        <View style={{ padding: 10, paddingVertical: 10 }}>
          <View
            style={{
              // marginVertical: 70,
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <View
              style={{
                flexDirection: "row",
                gap: 20,
                alignItems: "center",
              }}
            >
              <Image
                source={require("../../../../../assets/images/mtnLogo/united-states-flag.png")}
                style={{ width: "20%", height: "70%" }}
              />
              <Text style={{ fontSize: 16 }}>British</Text>
            </View>
            <View>
              <Ionicons name="checkmark-circle" size={24} color="black" />
            </View>
          </View>
        </View>
        <Divider style={{ backgroundColor: "#007481" }} />

        {/* ======================== */}
        <View style={{ padding: 10, paddingVertical: 10 }}>
          <View
            style={{
              // marginVertical: 70,
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <View
              style={{
                flexDirection: "row",
                gap: 20,
                alignItems: "center",
              }}
            >
              <Image
                source={require("../../../../../assets/images/mtnLogo/united-states-flag.png")}
                style={{ width: "20%", height: "70%" }}
              />
              <Text style={{ fontSize: 16 }}>US</Text>
            </View>
            <View>
              <Ionicons name="checkmark-circle" size={24} color="black" />
            </View>
          </View>
        </View>
        <Divider style={{ backgroundColor: "#007481" }} />

        {/* ==================================== */}
        <View style={{ padding: 10, paddingVertical: 10 }}>
          <View
            style={{
              // marginVertical: 70,
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <View
              style={{
                flexDirection: "row",
                gap: 20,
                alignItems: "center",
              }}
            >
              <Image
                source={require("../../../../../assets/images/mtnLogo/united-states-flag.png")}
                style={{ width: "20%", height: "70%" }}
              />
              <Text style={{ fontSize: 16 }}>British</Text>
            </View>
            <View>
              <Ionicons name="checkmark-circle" size={24} color="black" />
            </View>
          </View>
        </View>
        <Divider style={{ backgroundColor: "#007481" }} />

        {/* ======================== */}
        <View style={{ padding: 10, paddingVertical: 10 }}>
          <View
            style={{
              // marginVertical: 70,
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <View
              style={{
                flexDirection: "row",
                gap: 20,
                alignItems: "center",
              }}
            >
              <Image
                source={require("../../../../../assets/images/mtnLogo/united-states-flag.png")}
                style={{ width: "20%", height: "70%" }}
              />
              <Text style={{ fontSize: 16 }}>US</Text>
            </View>
            <View>
              <Ionicons name="checkmark-circle" size={24} color="black" />
            </View>
          </View>
        </View>
        <Divider style={{ backgroundColor: "#007481" }} />

        {/* ==================================== */}
        <View style={{ padding: 10, paddingVertical: 10 }}>
          <View
            style={{
              // marginVertical: 70,
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <View
              style={{
                flexDirection: "row",
                gap: 20,
                alignItems: "center",
              }}
            >
              <Image
                source={require("../../../../../assets/images/mtnLogo/united-states-flag.png")}
                style={{ width: "20%", height: "70%" }}
              />
              <Text style={{ fontSize: 16 }}>British</Text>
            </View>
            <View>
              <Ionicons name="checkmark-circle" size={24} color="black" />
            </View>
          </View>
        </View>
        <Divider style={{ backgroundColor: "#007481" }} />

        {/* ======================== */}
      </ScrollView>
    </SafeAreaView>
  );
};

export default AccountLanguage;

import { View, Text, SafeAreaView, Pressable, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { DrawerActions } from "@react-navigation/native"; // Import DrawerActions
import { clearAllData } from "../../../app/utils/AsyncStorage/ClearData";
import { useTheme } from "react-native-paper";
import { Image } from "react-native";

import CustomMap from "../../components/MapComponents/CustomMap";

const Map = () => {
  const theme = useTheme();
  const navigation = useNavigation();
  const [searchVisible, setSearchVisible] = useState(false);

  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    let timer;

    if (searchVisible) {
      timer = setTimeout(() => {
        setSearchVisible(false);
      }, 2 * 60 * 100);
    } else {
      clearTimeout(timer);
    }

    return () => {
      clearTimeout(timer);
    };
  }, [searchVisible]);

  const openDrawer = () => {
    navigation.dispatch(DrawerActions.openDrawer()); // Use dispatch to open the drawer
  };

  return (
    <>
      <SafeAreaView style={{ flex: 1 }}>
        <View
          style={{
            backgroundColor: "#008A9A",
            width: "100%",
            height: "100%",
          }}
        >
          <View
            style={{
              // backgroundColor: "green",
              width: "100%",
              height: "18%",
              overflow: "hidden",
            }}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                padding: 10,
                overflow: "hidden",
              }}
            >
              <View>
                <Image
                  source={require("../../../assets/images/enonnativeLogo.png")}
                  style={{
                    width: 50,
                    height: 50,
                    backgroundColor: "white",
                    borderRadius: 50,
                  }}
                />
              </View>
              <Text
                style={{ fontSize: 20, fontWeight: "bold", color: "white" }}
              >
                Good morning, Boto!
              </Text>
            </View>
            <View>
              {/* ======================= */}
              <View
                style={{
                  flexDirection: "flex",
                  gap: 10,
                  marginHorizontal: 16,
                  marginVertical: 20,
                }}
              >
                {/* menubutton */}
                <View>
                  <Pressable onPress={openDrawer}>
                    <MaterialCommunityIcons
                      name="microsoft-xbox-controller-menu"
                      size={40}
                      color="#FFFFFF"
                    />
                  </Pressable>
                </View>
                {/* <View>
                  <Pressable onPress={toggleSearch}>
                    <Ionicons
                      name="md-search-circle-sharp"
                      size={40}
                      color={theme.colors.primary}
                    />
                  </Pressable>
                </View> */}
              </View>
            </View>
          </View>
          {/* Map */}
          <View
            style={{
              width: "100%",
              height: "75%",
              borderTopRightRadius: 20,
              borderTopLeftRadius: 25,
              overflow: "hidden",
            }}
          >
            <CustomMap />
            {/* <Test /> */}
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

export default Map;

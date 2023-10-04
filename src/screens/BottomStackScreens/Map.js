import { View, Text, SafeAreaView, Pressable, TextInput } from "react-native";
import React, { useEffect, useState } from "react";
import CustomMap from "../../components/MapComponents/CustomMap";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { Feather, Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { DrawerActions } from "@react-navigation/native"; // Import DrawerActions
import { clearAllData } from "../../../app/utils/AsyncStorage/ClearData";
import { Avatar, useTheme } from "react-native-paper";

// ===============================
import { useMemo, useRef } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import BottomSheet from "@gorhom/bottom-sheet";

const Map = () => {
  const theme = useTheme();
  const navigation = useNavigation();
  const [searchVisible, setSearchVisible] = useState(false);

  const [searchText, setSearchText] = useState("");

  const [search, setSearch] = useState("");
  const toggleSearch = () => {
    setSearchVisible(!searchVisible);
  };

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
  const handleNavi = () => {
    navigation.navigate("Bottom");
  };
  // ===========================
  const bottomSheetRef = useRef(null);
  const [bottomSheetVisible, setBottomSheetVisible] = useState(false);

  const snapPoints = useMemo(() => ["25%", "50%"], []);

  const toggleBottomSheet = () => {
    if (bottomSheetRef.current) {
      if (bottomSheetVisible) {
        bottomSheetRef.current.close();
      } else {
        bottomSheetRef.current.expand();
      }
      setBottomSheetVisible(!bottomSheetVisible);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <View style={{ flex: 1 }}>
          <CustomMap handleNavigate={handleNavi} />
          <View
            style={{
              position: "absolute",
              zIndex: 10,
              top: 80,
              left: 16,
            }}
          >
            <View
              style={{
                position: "absolute",
                flexDirection: "row",
                alignItems: "center",
                left: 25,
                top: -60,
                padding: 10,
              }}
            >
              {searchVisible && (
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    backgroundColor: "white",
                    borderRadius: 20,
                  }}
                >
                  <Feather name="search" size={20} color="black" />
                  <TextInput
                    value={search}
                    onChangeText={(text) => setSearch(text)}
                    placeholder="search"
                    style={{
                      fontSize: 15,
                      width: 300,
                      borderRadius: 10,
                      height: 50,
                    }}
                  />
                </View>
              )}
            </View>
            <View style={{ flexDirection: "column", gap: 10 }}>
              <View>
                <Pressable onPress={openDrawer}>
                  <MaterialCommunityIcons
                    name="microsoft-xbox-controller-menu"
                    size={40}
                    color="black"
                  />
                </Pressable>
              </View>
              <View>
                <Pressable onPress={toggleSearch}>
                  <Ionicons
                    name="md-search-circle-sharp"
                    size={40}
                    color="black"
                  />
                </Pressable>
              </View>
            </View>
          </View>
        </View>
      </View>
      {/* ======================================= */}
      {/* <View style={styles.container}>
        
        {bottomSheetVisible && (
          <TouchableOpacity
            style={styles.overlay}
            onPress={toggleBottomSheet}
            activeOpacity={1}
          />
        )}

        <BottomSheet
          ref={bottomSheetRef}
          snapPoints={snapPoints}
          onCloseEnd={() => setBottomSheetVisible(false)}
        >
          <View style={styles.contentContainer}>
            <Text>Awesome 🎉</Text>
          </View>
        </BottomSheet>
       
        <TouchableOpacity onPress={toggleBottomSheet}>
          <Text>Toggle Bottom Sheet</Text>
        </TouchableOpacity>
      </View> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    // backgroundColor: "grey",
  },
  contentContainer: {
    flex: 1,
    alignItems: "center",
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    // backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
});

export default Map;

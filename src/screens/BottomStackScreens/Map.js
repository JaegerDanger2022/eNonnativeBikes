import { View, Text, SafeAreaView, Pressable, TextInput } from "react-native";
import React, { useEffect, useState } from "react";
import CustomMap from "../../components/MapComponents/CustomMap";

import { Feather, Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { DrawerActions } from "@react-navigation/native"; // Import DrawerActions

const Map = () => {
  const navigation = useNavigation();
  const [searchVisible, setSearchVisible] = useState(false);

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
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <CustomMap />
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
                <Ionicons name="menu-sharp" size={40} color="black" />
              </Pressable>
            </View>
            <View>
              <Pressable onPress={toggleSearch}>
                <Ionicons name="md-search-sharp" size={40} color="black" />
              </Pressable>
            </View>
          </View>
        </View>
      </View>
    </View>
  );

}

export default Map;
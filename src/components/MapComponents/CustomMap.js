import React, { useState, useMemo, useRef } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Alert } from "react-native";
// import BottomSheet from "@gorhom/bottom-sheet";
import MapView, { Marker } from "react-native-maps";
import { Image, Dimensions } from "react-native";
import { Button, Card, IconButton } from "react-native-paper";
import { ProgressBar } from "react-native-paper";
import BottomSheet from "react-native-simple-bottom-sheet";

const bikeIcon = require("../../../assets/images/bike/bicycle_5717145.png");
// Bottom
import { Animated } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

// End of Bottom

const CustomMap = () => {
  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false);

  const toggleBottomSheet = () => {
    console.log("Toggle Bottom Sheet");
    setIsBottomSheetOpen(!isBottomSheetOpen);
  };
  const panelRef = useRef(null);

  // End of Bottom Sheet
  const locationOfInterest = [
    {
      title: "Accra",
      location: {
        latitude: 5.653113337079967,
        latitudeDelta: 0.06487970251259867,
        longitude: -0.19344376400113106,
        longitudeDelta: 0.032689087092876434,
      },
      description: "Available",
    },
    // locations
  ];

  const showLocationOfInterest = () => {
    return locationOfInterest.map((item, index) => {
      return (
        <Marker
          key={index}
          coordinate={item.location}
          title={item.title}
          description={item.description}
          onPress={() => panelRef.current.togglePanel()}
        >
          <Image source={bikeIcon} style={{ width: 70, height: 70 }} />
        </Marker>
      );
    });
  };

  const onRegionChange = (region) => {
    //region change
  };

  return (
    <View style={styles.container}>
      {/* ================= */}

      <MapView
        style={styles.map}
        onRegionChange={onRegionChange}
        mapType="Standard"
        initialRegion={{
          latitude: 5.644406257214355,
          latitudeDelta: 0.0717518755183848,
          longitude: -0.18979093059897423,
          longitudeDelta: 0.0359010323882103,
        }}
      >
        {showLocationOfInterest()}
      </MapView>

      {/* Content of the BottomSheet */}

      <BottomSheet
        ref={(ref) => (panelRef.current = ref)}
        sliderMinHeight={0}
        sliderMaxHeight={500}
      >
        {(onScrollEndDrag) => (
          <ScrollView onScrollEndDrag={onScrollEndDrag}>
            {/* Co */}
            <Card style={{ marginVertical: 2, backgroundColor: "white" }}>
              <View style={{ height: "100%" }}>
                <View
                  style={{
                    // height: "10%",
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <View
                    style={{
                      flexDirection: "row",
                      gap: 20,
                      padding: 5,
                    }}
                  >
                    <View>
                      <Text
                        style={{
                          fontWeight: "bold",
                          fontSize: 27,
                          color: "black",
                        }}
                      >
                        Enovative Property
                      </Text>
                      <Text style={{ fontWeight: "600", fontSize: 20 }}>
                        0.4 km away
                      </Text>
                    </View>
                  </View>
                  <View>
                    <IconButton
                      icon="star"
                      size={35}
                      iconColor="wheat"
                      style={{ backgroundColor: "#CBD1D7" }}
                      onPress={() => console.log("Pressed")}
                    />
                  </View>
                </View>

                {/* ====================== */}
                <View style={{ padding: 20 }}>
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      // gap: 150,
                      height: 200,
                      justifyContent: "space-between",
                    }}
                  >
                    <View style={{ flexDirection: "column", gap: 10 }}>
                      <IconButton
                        icon="bicycle"
                        size={40}
                        iconColor="wheat"
                        style={{ backgroundColor: "#4E4EC2" }}
                        onPress={() => console.log("Pressed")}
                      />
                      <Text style={{ fontWeight: "bold", fontSize: 20 }}>
                        Bikes
                      </Text>
                      <Text style={{ fontWeight: "600", fontSize: 15 }}>
                        26/30 available
                      </Text>
                      <ProgressBar progress={0.7} color="blue" />
                    </View>
                    <View style={{ flexDirection: "column", gap: 10 }}>
                      <IconButton
                        icon="book"
                        size={40}
                        style={{ backgroundColor: "#D74E4E" }}
                        iconColor="white"
                        onPress={() => console.log("Pressed")}
                      />
                      <Text style={{ fontWeight: "bold", fontSize: 20 }}>
                        Docks
                      </Text>
                      <Text style={{ fontWeight: "600", fontSize: 15 }}>
                        2/30 available
                      </Text>
                      <ProgressBar progress={0.7} color="red" />
                    </View>
                  </View>
                </View>
                {/* ========================= */}
                <View style={{ height: 60, alignSelf: "center" }}>
                  {/* <Button
                    icon="lock-outline"
                    mode="elevated"
                    onPress={toggleBottomSheet}
                  >
                    Back
                  </Button> */}
                </View>
              </View>
            </Card>
            {/* </ScrollView> */}
          </ScrollView>
        )}
      </BottomSheet>
      {/* </Animated.View>
      )} */}
      {/* ============ */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
    // zIndex: -20,
  },
  contentContainer: {
    flex: 1,
    alignItems: "center",
  },
  bottomSheet: {
    // height: 400,

    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    padding: 16,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    elevation: 4,
  },
});

export default CustomMap;

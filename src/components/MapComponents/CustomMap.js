import React, { useState, useEffect } from "react";
import MapView from "react-native-maps";
import { StyleSheet, View, Image, Dimensions } from "react-native";
import { Marker } from "react-native-maps";
import { FAB, Portal, Provider } from "react-native-paper";

const bikeIcon = require("../../../assets/images/bike/bicycle_5717145.png");

const CustomMap = () => {
  const [state, setState] = useState({ open: false });
  const [mapRegion, setMapRegion] = useState({
    latitude: 7.732645028326621,
    longitude: -0.95566151663661,
    latitudeDelta: 4.98,
    longitudeDelta: 4.98,
  });

  const onStateChange = ({ open }) => setState({ open });

  const { open } = state;

  const locationOfInterest = [
    {
      title: "Accra",
      location: {
        latitude: 5.653020096630557,
        longitude: -0.18505726936365843,
      },
      description: "Available",
    },
    {
      title: "Kumasi",
      location: {
        latitude: 6.355705320375925,
        longitude: -1.4195265993475914,
      },
      description: "Taken",
    },
    {
      title: "Koforidua",
      location: {
        latitude: 6.078429437794352,
        longitude: -0.2712566591799259,
      },
      description: "Available",
    },
  ];

  const showLocationOfInterest = () => {
    return locationOfInterest.map((item, index) => {
      return (
        <Marker
          key={index}
          coordinate={item.location}
          title={item.title}
          description={item.description}
          onPress={() => handleMarkerPress(item.location)}
        >
          <Image source={bikeIcon} style={{ width: 30, height: 30 }} />
        </Marker>
      );
    });
  };

  const handleMarkerPress = (location) => {
    // Zoom in to the selected location and adjust the delta values based on screen size
    const screenAspectRation =
      Dimensions.get("window").width / Dimensions.get("window").height;
    const latitudeDelta = 0.5; // You can adjust this value as needed
    const longitudeDelta = latitudeDelta * screenAspectRation;

    setMapRegion({
      latitude: location.latitude,
      longitude: location.longitude,
      latitudeDelta,
      longitudeDelta,
    });
  };

  const onRegionChange = (region) => {
    console.log(region);
  };

  return (
    <View style={styles.container}>
      <Provider>
        <MapView
          style={styles.map}
          region={mapRegion}
          onRegionChange={onRegionChange}
        >
          <Portal>
            <FAB.Group
              open={open}
              visible
              icon={open ? "calendar-today" : "plus"}
              actions={[
                { icon: "plus", onPress: () => console.log("Pressed add") },
                {
                  icon: "star",
                  label: "Star",
                  onPress: () => console.log("Pressed star"),
                },
                {
                  icon: "email",
                  label: "Email",
                  onPress: () => console.log("Pressed email"),
                },
                {
                  icon: "bell",
                  label: "Remind",
                  onPress: () => console.log("Pressed notifications"),
                },
              ]}
              onStateChange={onStateChange}
              onPress={() => {
                if (open) {
                  // do something if the speed dial is open
                }
              }}
            />
          </Portal>
          {showLocationOfInterest()}
        </MapView>
      </Provider>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: Dimensions.get("window").width, // Set map width to screen width
    height: Dimensions.get("window").height, // Set map height to screen height
  },
});

export default CustomMap;

import React, { useState, useEffect } from "react";
import MapView, { MAP_TYPES, MapOverlay, Overlay } from "react-native-maps";
import {
  StyleSheet,
  View,
  Image,
  Dimensions,
  TextInput,
  Alert,
} from "react-native";
import { Marker } from "react-native-maps";
import { FAB, Portal, Provider } from "react-native-paper";
const bikeIcon = require("../../../assets/images/bike/bicycle_5717145.png");

const CustomMap = ({ handleNavigate }) => {
  const [state, setState] = useState({ open: false });
  const [mapRegion, setMapRegion] = useState({
    latitude: 7.732645028326621,
    longitude: -0.95566151663661,
    latitudeDelta: 6.999,
    longitudeDelta: 5.999,
  });
  const [searchText, setSearchText] = useState("");

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
          onPress={handleNavigate}
          // onPress={() => Alert.alert("hello")}
        >
          {/* <Overlay style={{ width: 70, height: 70 }} opacity={0.5}> */}
          <Image source={bikeIcon} style={{ width: 70, height: 70 }} />
          {/* </Overlay> */}
        </Marker>
      );
    });
  };

  const handleMarkerPress = (location) => {
    const screenAspectRatio =
      Dimensions.get("window").width / Dimensions.get("window").height;
    const latitudeDelta = 5.0;
    const longitudeDelta = latitudeDelta * screenAspectRatio;

    setMapRegion({
      latitude: location.latitude,
      longitude: location.longitude,
      latitudeDelta,
      longitudeDelta,
    });
  };

  const onRegionChange = (region) => {
    // console.log(region);
  };

  const searchLocation = () => {
    const foundLocation = locationOfInterest.find(
      (location) => location.title.toLowerCase() === searchText.toLowerCase()
    );

    if (foundLocation) {
      handleMarkerPress(foundLocation.location);
    }
  };

  const customMapStyle = [
    {
      featureType: "water",
      elementType: "geometry",
      stylers: [
        {
          color: "red",
        },
      ],
    },
  ];

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        region={mapRegion}
        onRegionChange={onRegionChange}
        mapType="standard"
        customMapStyle={customMapStyle}
      >
        {showLocationOfInterest()}
      </MapView>
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
  },
  searchBar: {
    height: 40,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    margin: 10,
    padding: 10,
  },
});

export default CustomMap;

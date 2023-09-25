import React, { useState, useEffect, useRef } from "react";
import MapView, { Callout } from "react-native-maps";
import { StyleSheet, View, Text, Image } from "react-native";
import { Marker } from "react-native-maps";
import { AnimatedRegion } from "react-native-maps"; // Import AnimatedRegion
import { Platform } from "react-native";

const LATITUDE = 5.653020096630557;
const LONGITUDE = -0.18505726936365843;

const bikeIcon = require("../../../assets/Image/bikepark.png");

let locationOfInterest = [
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
      latitudeDelta: 1.1277383777593322,
      longitude: -1.4195265993475914,
      longitudeDelta: 0.5650113523006439,
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

const Maps = () => {
  const [coordinate] = useState(
    new AnimatedRegion({
      latitude: LATITUDE,
      longitude: LONGITUDE,
    })
  );

  const mapRef = useRef(null);

  useEffect(() => {
    const duration = 700;
    const newCoordinate = {
      latitude: 5.653020096630557,
      longitude: -0.18505726936365843,
    };

    if (Platform.OS === "android") {
      if (mapRef.current) {
        mapRef.current.animateToRegion(
          {
            latitude: newCoordinate.latitude,
            longitude: newCoordinate.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          },
          duration
        );
      }
    } else {
      coordinate
        .timing({
          ...newCoordinate,
          useNativeDriver: true,
          duration,
        })
        .start();
    }
  }, []);

  const onRegionChange = (region) => {
    console.log(region);
  };

  const showLocationOfInterest = () => {
    return locationOfInterest.map((item, index) => {
      return (
        <Marker
          key={index}
          coordinate={item.location}
          title={item.title}
          description={item.description}
        >
          <Image source={bikeIcon} style={{ width: 30, height: 30 }} />
        </Marker>
      );
    });
  };

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 7.732645028326621,
          latitudeDelta: 8.985738526246607,
          longitude: -0.95566151663661,
          longitudeDelta: 4.520091153681278,
        }}
        onRegionChange={onRegionChange}
        // ref={mapRef}
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
    width: "100%",
    height: "100%",
    borderRadius: 10,
  },
});

export default Maps;

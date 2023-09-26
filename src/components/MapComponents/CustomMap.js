import React, { useState } from "react";
import MapView from "react-native-maps";
import { StyleSheet, View, Image } from "react-native";
import { Marker } from "react-native-maps";
import { FAB, Portal, Provider } from "react-native-paper";

const bikeIcon = require("../../../assets/images/bike/bicycle_5717145.png");

const CustomMap = () => {
  const [state, setState] = useState({ open: false });
  const [mapRegion, setMapRegion] = useState({
    latitude: 7.732645028326621,
    longitude: -0.95566151663661,
    latitudeDelta: 8.985738526246607,
    longitudeDelta: 4.520091153681278,
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
    {
      title: "Lashibi",
      location: {
        latitude: 5.644207823571849,
        latitudeDelta: 0.824733093311405,
        longitude: -0.01858402043581009,
        longitudeDelta: 0.4489883780479431,
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
    setMapRegion({
      latitude: location.latitude,
      longitude: location.longitude,
      latitudeDelta: 1.999,
      longitudeDelta: 1.999,
    });
  };

  const onRegionChange = (region) => {
    console.log(region);
    // You can also update the mapRegion state here if needed
  };

  return (
    <View style={styles.container}>
      <Provider>
        <MapView
          style={styles.map}
          region={mapRegion} // Set the map region from state
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
    width: "100%",
    height: "100%",
  },
});

export default CustomMap;

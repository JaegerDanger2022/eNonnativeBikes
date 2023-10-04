import React, { useMemo, useRef, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import BottomSheet from "@gorhom/bottom-sheet";

const BottomSheetNavigator = () => {
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
    <View style={styles.container}>
      {/* Transparent overlay */}
      {bottomSheetVisible && (
        <TouchableOpacity
          style={styles.overlay}
          onPress={toggleBottomSheet}
          activeOpacity={1}
        />
      )}

      {/* <BottomSheet
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
      </TouchableOpacity> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "grey",
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
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
});

export default BottomSheetNavigator;

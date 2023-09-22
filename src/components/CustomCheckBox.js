import * as React from "react";
import { StyleSheet, View } from "react-native";
import { Checkbox } from "react-native-paper";

const CustomCheckBox = ({ checked, onCheckBoxPress }) => {
  return (
    <View style={styles.check}>
      <Checkbox
        status={checked ? "checked" : "unchecked"}
        onPress={onCheckBoxPress}
      />
    </View>
  );
};

export default CustomCheckBox;

const styles = StyleSheet.create({
  check: {
    width: 35,
    borderColor: "#00899B",
    borderWidth: 1,
    borderRadius: 5,
  },
});

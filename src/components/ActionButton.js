import React from "react";
import { Button } from "react-native-paper";

const ActionButton = ({
  handleActionButton,
  label,
  buttonStyle,
  labelStyle,
}) => {
  return (
    <Button
      onPress={handleActionButton}
      style={buttonStyle}
      mode="contained-tonal"
      labelStyle={labelStyle}
    >
      {label}
    </Button>
  );
};

export default ActionButton;

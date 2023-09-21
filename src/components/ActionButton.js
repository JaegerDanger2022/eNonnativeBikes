import React from "react";
import { Button } from "react-native-paper";

const ActionButton = ({ handleActionButton, label, buttonStyle }) => {
  return (
    <Button
      onPress={handleActionButton}
      style={buttonStyle}
      mode="contained-tonal"
    >
      {label}
    </Button>
  );
};

export default ActionButton;

import React from "react";
import { TextInput } from "react-native-paper";

const CustomTextInput = ({ label, value, textInputOnchange, secureTextEntry }) => {
  return (
    <TextInput
      mode="outlined"
      label={label}
      value={value}
      onChangeText={textInputOnchange}
      style={{ width: 350 }}
      secureTextEntry={secureTextEntry}
    />
  );
};

export default CustomTextInput;

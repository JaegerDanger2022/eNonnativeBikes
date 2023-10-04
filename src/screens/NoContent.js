import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useTheme } from 'react-native-paper'; 

const NoContentScreen = () => {
    const theme = useTheme()
  return (
    <View style={{...styles.container, backgroundColor:theme.colors.background}}>
      <Text style={styles.text}>No content yet</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center', 
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default NoContentScreen;

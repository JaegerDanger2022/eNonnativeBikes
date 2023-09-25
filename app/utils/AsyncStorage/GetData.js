import AsyncStorage from "@react-native-async-storage/async-storage";

export const getData = async (key) => {
    try {
      const value = await AsyncStorage.getItem(key);
      if (value !== null) {
        console.log('Data retrieved successfully:', value);
      } else {
        console.log('No data found');
      }
    } catch (error) {
      console.error('Error retrieving data: ', error);
    }
  };
  
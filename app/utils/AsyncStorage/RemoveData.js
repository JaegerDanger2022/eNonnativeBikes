import AsyncStorage from "@react-native-async-storage/async-storage";

export const removeData = async (key) => {
    try {
      await AsyncStorage.removeItem(key);
      console.log('Data removed successfully');
    } catch (error) {
      console.error('Error removing data: ', error);
    }
  };
  
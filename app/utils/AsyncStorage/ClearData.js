import AsyncStorage from "@react-native-async-storage/async-storage";

export const clearAllData = async () => {
    try {
      await AsyncStorage.clear();
      console.log('All data cleared');
    } catch (error) {
      console.error('Error clearing data: ', error);
    }
  };
  
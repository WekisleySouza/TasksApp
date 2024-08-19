import AsyncStorage from "@react-native-async-storage/async-storage";

const storeDataAsync = async (dataName, value) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem(dataName, jsonValue);
      return true
    } catch (err) {
      console.log(`Erro ao salvar ${dataName}: ${err}`);
      return false
    }
};

const getDataAsync = async (dataName) => {
  try {
    const jsonValue = await AsyncStorage.getItem(dataName);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    console.log(`Erro ao carregar ${dataName}: ${err}`);
    return false
  }
};

export {
  storeDataAsync,
  getDataAsync,
}
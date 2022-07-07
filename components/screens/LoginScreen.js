import React from 'react';
import { StyleSheet, Text, View, Button ,TouchableOpacity} from 'react-native';

const LoginScreen =({navigation}) => {
  return (
    <View style={styles.container}>
      <Text
      style={styles.yourOneText}>YourOne</Text>
      <Text
      style={styles.yourOneSays}>Your modern bible</Text>

  <TouchableOpacity onPress={() => {
    navigation.navigate("MainScreen");
  }}>
    <Text style={styles.text}>
      Continue
    </Text>
  </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  yourOneText: {
    fontSize: 50,
  },

  yourOneSays: {
    fontSize: 15,
  },
  text:{
    marginVertical:25,
    color:'white',
    fontWeight:'bold',
    backgroundColor:'#000080',
    padding:15,
    borderRadius:8,
  },
});
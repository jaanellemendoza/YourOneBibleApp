import { StyleSheet, Text, View , KeyboardAvoidingView,TextInput, TouchableOpacity, Image , Button } from 'react-native';
import React ,{useState} from 'react';
import Icons from "react-native-vector-icons/Ionicons";
import FontIcons  from "react-native-vector-icons/FontAwesome";
import TistIcons  from "react-native-vector-icons/Fontisto";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreensPage from '../RegistrationsScreen/LoginScreens';
import SignUpscreens from '../RegistrationsScreen/SignUpscreens';

const AppStack = createNativeStackNavigator();

function LoginAndRegistration (){
  return(
<NavigationContainer independent={true}>
  <AppStack.Navigator>
  <AppStack.Screen name="loginScreen" component={LoginScreensPage} options={{headerShown:false}}></AppStack.Screen>
  <AppStack.Screen name="signUpScreen" component={SignUpscreens} options={{headerShown:false}}></AppStack.Screen>
  </AppStack.Navigator>
</NavigationContainer>
  )
}
  
export default function SettingsScreen(){
 return <LoginAndRegistration />
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems:'center',
    justifyContent:'center'
  },
  inputContainer:{
    alignItems:'stretch',
    textAlign:'left',
    marginTop:25
  },
  eyeIcons:{
    position:'absolute',
   bottom:10,
    right:20,
    
  },
  userIcon:{
    position:'absolute',
    bottom:12,
    left:7,
  },
  lockIcon:{
    position:'absolute',
    bottom:12,
    left:7,
  },
  input:{
    backgroundColor:'grey',
    paddingRight:170,
    paddingLeft:40,
    paddingVertical:8,
    borderWidth:1,
    marginTop:10,
    borderRadius:12,
    borderColor:'darkslateblue',
    textAlign:'left',

  },
  loginButton:{
      paddingVertical:8,
      marginBottom:10,
  },
  loginText:{
    marginTop: 10,
    color:'white',
    backgroundColor:'indigo',
    paddingHorizontal: 30,
    paddingVertical:8,
    borderRadius:10,
    
  },
  icons:{
    flexDirection:'row',
    alignContent:'center',
    marginTop:10,
  },

  images:{
  width:45,
  height:45,
  margin:10,
  },
  textContainer:{
    marginTop:10,
    flexDirection:'row'

  },
  texts:{

  },
  signUpconatainer:{
    paddingTop:10,
  },
  Signup:{
   marginTop:10,
  },

  
});
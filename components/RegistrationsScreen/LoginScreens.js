import { StyleSheet, Text, View , KeyboardAvoidingView,TextInput, TouchableOpacity, Image , Button } from 'react-native';
import React ,{useState} from 'react';
import Icons from "react-native-vector-icons/Ionicons";
import FontIcons  from "react-native-vector-icons/FontAwesome";
import TistIcons  from "react-native-vector-icons/Fontisto";
import { useNavigation } from '@react-navigation/native';

function LoginPage(){
  const[passwordVisible , setPasswordVisible] = useState(true);

  const navigation = useNavigation();
  let theIcon = "ios-eye-off-sharp";
  
  const funcTheIcon=() =>{
    if(passwordVisible==true){
    setEyeIcon("ios-eye-off-outline")
    }else{
      setEyeIcon("ios-eye-off-sharp")
    }
  }

  const[EyeIcon , setEyeIcon] = useState(theIcon);
return(
  <View style = {styles.container} behavior="padding">
   {/* WELCOME HOME WITH IMAGE BESIDE IT*/}
       <View style={styles.header}>
          <View style={{paddingBottom: 15}}>
            <Text style={{fontSize: 30, fontWeight: 'bold',   marginRight: 50,}}>
              WELCOME
            </Text>
            <View style={{flexDirection: 'row'}}>
              <Text style={{fontSize: 30, fontWeight: 'bold',   marginLeft:-5,}}> BACK</Text>
            </View>
            <View style={{backgroundColor: 'grey', width: '90%', height: 15, borderRadius:30 }}>
              <Text> </Text>
            </View>
          </View>
          <Image source={require('../../assets/image/WelcomeFinal.png')} style={{height:150, width: 150 }} />
        </View>


  {/* THIS IS FOR USERNAME NAME INPUT */}
  <View style={styles.inputContainer}>
  <TextInput 
  placeholder="Username"
  // value={}
  // onchangeText={text =>{}}
  style={styles.input}
  />
   <FontIcons name="user"  style={styles.userIcon} size={25}/>
  </View>

<View style={styles.passwordContainer}>  
<TextInput 
  placeholder="Password"
  // value={}
  // onchangeText={text =>{}}
  style={styles.input}
  secureTextEntry={passwordVisible}
  />
  <TouchableOpacity onPress={() =>[setPasswordVisible(!passwordVisible) , setEyeIcon(funcTheIcon)]} >
  <Icons name={EyeIcon} size={25} style={styles.EyeIcon}/>
  </TouchableOpacity>
  <View style={styles.LockContainer}>
   <TistIcons name="locked"  style={styles.lockIcon} size={25}/>
   
   
   </View>
   <Text style={{left: 185, marginBottom: 30, fontWeight: 'bold'}}>Forgot password?</Text>
   </View>

   


    <View style={styles.loginButton}>
      <TouchableOpacity>
    <Text style={styles.loginText}>
      LOGIN
    </Text>
      </TouchableOpacity>
    </View>

    <View style={{flexDirection: 'row', alignItems: 'center'}}>
   <View style={{flex: 1, height: 1, backgroundColor: 'black'}} />
  <View>
    <Text style={{width: 50, textAlign: 'center'}}> OR </Text>
  </View>
    <View style={{flex: 1, height: 1, backgroundColor: 'black'}} />
  </View>

  <View style={styles.icons}>
    <Image source={require('../../assets/image/gg.png')} style={styles.images}/>
    <Image source={require('../../assets/image/fb.png')} style={styles.images}/>
    <Image source={require('../../assets/image/mac.png')} style={styles.images}/>
  </View>

    <View style={styles.textContainer}>
    <Text style={styles.texts}>
    Don't have an Account?  
    </Text>
    <TouchableOpacity style={styles.signUpconatainer} onPress={()=>{navigation.navigate('signUpScreen')}}>
      <Text style={styles.signUptext}>Sign In</Text></TouchableOpacity>
    </View>
</View>
)
}
export default function LoginScreensPage(){
    return <LoginPage />
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems:'center',
    justifyContent:'center'
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },

  inputContainer:{
    alignItems:'stretch',
    textAlign:'left',
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
  EyeIcon:{
    position:'absolute',
    bottom:12,
    right: 7,
  },
  input:{
    backgroundColor: '#DCDCDC',
    paddingLeft:40,
    paddingVertical:8,
    marginTop:10,
    borderRadius:12,
    textAlign:'left',
    height: 60,
    width: 300,
    fontSize: 16,

    

  },
  loginButton:{
      paddingVertical:8,
      marginBottom:10,
      width: 290,
  },
  loginText:{
    marginTop: 30,
    color:'white',
    backgroundColor:'black',
    paddingHorizontal: 30,
    paddingVertical:8,
    borderRadius:20,
    height: 50,
    textAlign: 'center',
    fontSize: 18,
    
    
   
    
  },
  icons:{
    flexDirection:'row',
    alignContent:'center',
    marginTop:10,
    marginBottom: 30,
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
    bottom:1,
    marginRight:5,
    fontSize:15,
  },
  signUpconatainer:{
    paddingTop:7,
    
  },signUptext:{
    color:'black',
    fontSize:15,
    bottom:7,
    fontWeight: 'bold'
  },
  imageContainer:{
   
    justifyContent: 'space-around',
    alignItems: 'center',
    
    
  },
  welcomeImage:{
    height:90,
    width: 90,
    backgroundColor: 'black'
  },
  
  
});
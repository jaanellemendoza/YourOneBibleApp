import { StyleSheet, Text, View ,TouchableOpacity , TextInput, Image} from 'react-native'
import { useNavigation } from '@react-navigation/native';
import Icons from "react-native-vector-icons/Ionicons";
import { useState } from 'react'

function SignupPage() {
    const navigation = useNavigation();

    const[passwordVisible , setPasswordVisible] = useState(true);

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
    <View style={styles.container}>
 
    <View style={styles.header}>
    <TouchableOpacity onPress={()=>{navigation.navigate("loginScreen"); }}>
    <Text style={styles.signupText}>Sign Up</Text>
    <View style={styles.ViewContainer}></View>
    <View style={{backgroundColor: 'grey', width: 110, height: 15, borderRadius:30, marginLeft: 20, }}>
    <Text> </Text>
    </View>
    </TouchableOpacity>
    <View style={{marginLeft: 30}}>
     <Image source={require('../../assets/image/LogoFinalFire.png')} style={{height:100, width: 50, marginTop: 30, }} />
     </View>
     </View>
     
    <View style={styles.InputContainer} >
    <TextInput
    placeholder='First Name'
    style={styles.inputText}
    />
     <TextInput
    placeholder='Last Name'
    style={styles.inputText}
    />
     <TextInput
    placeholder='Email Address'
    style={styles.inputText}
    />
     <TextInput
    placeholder='Password'
    style={styles.inputText}
    secureTextEntry={passwordVisible}
    />
    <TouchableOpacity onPress={() =>[setPasswordVisible(!passwordVisible) , setEyeIcon(funcTheIcon)]} style={styles.eyeIcons}>
     <Icons name={EyeIcon}  size={25}/>
   </TouchableOpacity>


    <Text style={styles.sixText}>6 Characters Minimum</Text>
    {/*<Text style={styles.withText}>You can also Sign up with</Text>*/}
    
    </View>
    {/*<View style={styles.icons}>
    <Image source={require('../../assets/image/fb.png')} style={styles.images}/>
    <Image source={require('../../assets/image/gg.png')} style={styles.images}/>
    <Image source={require('../../assets/image/mac.png')} style={styles.images}/>
        </View>*/}

    <Text style={styles.termsAndPolicyText}>By Signing up you agree to our 
    <Text style={{fontWeight: 'bold'}}> Terms and Privacy Policy
    </Text>
</Text>
    <TouchableOpacity style={styles.buttonSignup}>
        <Text style={{color: 'white', fontSize: 18,  textAlign: 'center', marginTop: 8}}>SIGN UP</Text>
    </TouchableOpacity>
    {/*<View stlye={styles.imageContainers}>
        <Image source={require('../../assets/image/computer.png')} style={styles.computerImg}/>
    </View>*/}
    </View>
          
    )
}
export default function SignUpscreens(){
    return <SignupPage />
}

const styles = StyleSheet.create({
container:{
    justifyContent:'center',
    alignItems:'center',
    borderTopLeftRadius:70,
    borderTopRightRadius:70,
    
},
header:{
    justifyContent:'center',
    alignItems:'center',
    borderTopLeftRadius:70,
    borderTopRightRadius:70,
    flexDirection: 'row'
},
signupText:{
    marginTop:40,
    fontSize:30,
    fontWeight: 'bold',
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    marginLeft: 20,
},
ViewContainer:{
flexDirection:'row',
alignItems:'center',
marginTop:10,
},
/*line:{
    height: -5, 
    backgroundColor: 'black',
    paddingHorizontal:55,
    paddingVertical:8,
    borderRadius:10,
},*/
InputContainer:{
    alignItems:'stretch',
    textAlign:'left',
    marginTop: 40,

},
inputText:{
    backgroundColor: '#DCDCDC',
    paddingLeft:10,
    paddingVertical:8,
    marginTop:20,
    borderRadius:12,
    textAlign:'left',
    height: 60,
    width: 300,
    fontSize: 16,
},
sixText:{
top:4,
left:3,
fontWeight: 'bold'
},
withText:{
    textAlign:'center',
    top:100,
},
icons:{
    flexDirection:'row',
    alignContent:'center',
    marginTop:10,
},
images:{
    top:5,
    width:45,
    height:45,
    margin:10,
},
termsAndPolicyText:{
    top:100,
},
termsAndPolicyTexts:{
    top:100,
    fontWeight: 'bold'
},
buttonSignup:{
    top:20,
    backgroundColor:'black',
    paddingVertical:7,
    paddingHorizontal:28,
    borderRadius:15,
    fontSize:16,
    width: 290,
    height: 50,
    marginTop: 90,

},
eyeIcons:{
    position:'absolute',
    bottom:12,
    right:20,
},
imageContainers:{
flexDirection:'row-reverse',

},
computerImg:{
width:80,
height:80,
left:120,
bottom:10,
}
})
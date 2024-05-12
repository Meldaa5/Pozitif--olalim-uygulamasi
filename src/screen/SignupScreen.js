import { StyleSheet, Text, View,Image, TextInput, ImageBackground, TouchableOpacity, Alert  } from 'react-native'
import React, { useState } from 'react'
import Ionicons from '@expo/vector-icons/Ionicons'; 
import { FontAwesome } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import UserService from "../services/UserService.js"

const SignupScreen = () => {
  const [data, setData] = useState({
    
      name: "",
      email: "",
      phoneNumber: "",
      password: "",
     
   
  });
  const handleChange = (key, value) => {
    setData({ ...data, [key]: value });
  };
  const navigation =useNavigation();
  const userService = new UserService();
  
  const handleRegister= ()=>{
    userService.signIn(data).then((res)=>{
      if(res.success==false){
        Alert.alert("Hatalı Giriş",res.message)
      }
      else{
        navigation.navigate("Login")

      }
      
    }).catch((err)=>{
      console.log(err);
    })
  }
  const handleRegisterhome= ()=>{
    navigation.navigate("Homepage")
  }
  return (
    <View style={styles.container}>
      <View style={styles.topImageContainer}> 
        <Image source={require("../screen/assets/Vectorpembebüyük.png")} style={styles.topImage} />
        </View>
        <View style={styles.pozitifContainer}>
          <Text style={styles.pozitifText}>
                 Pozitif Kal
          </Text>
        </View>
        <View>
        <Text style={styles.girisText}>
                 Hesabına Giriş Yap
          </Text>
        </View>
        <View style={styles.inputContainer}>
  <FontAwesome name="user" size={24} color="black" style={styles.inputIcon}/> 
  <TextInput  onChangeText={(text) => handleChange("name", text)} value={data.name} style={styles.textInput} placeholder='Name'></TextInput>
        </View>
        <View style={styles.inputContainer}>
  <FontAwesome name="envelope-o" size={24} color="black" style={styles.inputIcon}/> 
  <TextInput  onChangeText={(text) => handleChange("email", text)} value={data.email} style={styles.textInput} placeholder='Email'></TextInput>
        </View><View style={styles.inputContainer}>
  <FontAwesome name="mobile-phone" size={24} color="black" style={styles.inputIcon}/> 
  <TextInput onChangeText={(text) => handleChange("phoneNumber", text)} value={data.phoneNumber} style={styles.textInput} keyboardType='number-pad' placeholder='Mobile'></TextInput>
        </View>
        <View style={styles.inputContainer}>
  <FontAwesome name="paw" size={24} color="black" style={styles.inputIcon}/> 
  <TextInput onChangeText={(text) => handleChange("password", text)} value={data.password} secureTextEntry style={styles.textInput} placeholder='Şifre'></TextInput>
        </View>
        <Text style={styles.sifremiUnuttumText}>Şifreni Mi Unuttun</Text>

        <View style={styles.girisButtonContainer}>
          <TouchableOpacity  onPress={handleRegister}>
          <Text style={styles.girisButtonText}>Giriş Yap</Text>
          <LinearGradient
        // Button Linear Gradient
        colors={['#F97794', '#623AA2']}
        style={styles.lineerGradient}>
        <FontAwesome name="long-arrow-right" size={24} color="black"  style={styles.inputIcon} />
      </LinearGradient>
      </TouchableOpacity> 
        </View><View style={styles.footerContainer}>
        <TouchableOpacity onPress={handleRegister}><Text style={styles.footerText}>Hesabın Var Mı ? <Text style={{textDecorationLine:"underline"}}> Giriş Yap</Text>
        </Text></TouchableOpacity>
        <TouchableOpacity onPress={handleRegister}>
        <View style={styles.socialmediaContainer}>
        <FontAwesome name="facebook-square" size={24} color="blue"  style={styles.socialIcon} />
        <FontAwesome name="linkedin-square" size={24} color="blue"  style={styles.socialIcon} />
        <FontAwesome name="google-plus-square" size={24} color="blue"  style={styles.socialIcon} />
        </View>
</TouchableOpacity>
        </View>
  
        <View style={styles.solVectorContainer}>
          <ImageBackground source={require("../screen/assets/Vectormorbüyük.png")} style={styles.solVectorImage} />
        </View>
    </View>
  );
};

export default SignupScreen

const styles = StyleSheet.create({
  container:{
    backgroundColor: "#f5f5f5",
    flex:1,
    position:"relative",
  },
  topImageContainer :{

  },
  topImage:{
   width:"100%",
   height:130,
  },
  pozitifContainer:{
   
  },
  pozitifText:{
    textAlign:"center",
    fontSize:50,
    fontWeight:"500",
    color: "purple",
  },
  girisText:{
    textAlign:"center",
    fontSize:20,
    color:"black",
    marginBottom:30,
    
  },
  inputContainer:{
    backgroundColor:"#FFFFFF",
    flexDirection:"row",
    borderRadius:20,
    marginHorizontal:40,
    elevation:10,
    marginVertical:20,
    alignItems:"center",
    height:40,
    marginTop:14,
  },
  inputIcon:{
    marginLeft:15,
  },
  textInput:{
    flex:1,
    marginLeft:10,
  },
  sifremiUnuttumText:{
    color:"#BEBEBE",
    textAlign:"right", 
    width:"90%",
    fontSize: 15,
  },
  girisButtonContainer:{
    flexDirection:"row",
    marginTop:0,
    width:"90%",
    justifyContent:"flex-end",
  },
  girisButtonText:{
    color:"black",
    fontSize:25,
    fontWeight:"bold",
  },
  lineerGradient:{
    height:34,
    width:56,
    borderRadius:17,
    alignItems:"center",
    justifyContent:"center",
    marginHorizontal:10,
  },
  footerText:{
    color:"black",
    textAlign:"center",
    fontSize:15,
    marginTop:10,
  },
  solVectorContainer:{
    position:"absolute",
    bottom: 0,
    left: 0,
  },
  solVectorImage:{
    height:250,
    width:170,
  },
  socialmediaContainer:{
   display:"flex",
   flexDirection:"row",
   justifyContent:"center"
  },
  socialIcon:{
    elevation:10,
    margin:10,
    padding:20,
    borderRadius:40,
    shadowColor:"purple"
  }
});
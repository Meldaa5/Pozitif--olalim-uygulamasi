import { StyleSheet, Text, View,Image, TextInput, ImageBackground, TouchableOpacity, Alert  } from 'react-native'
import React, { useState } from 'react'
import Ionicons from '@expo/vector-icons/Ionicons'; 
import { FontAwesome } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import UserService from "../services/UserService.js";

const LoginScreen = () => {
  const [data, setData] = useState({
    
    email: "",
    password: "",
   
  });
  const navigation =useNavigation();
  const handleRegister= ()=>{
    navigation.navigate("SignUp")
  }
  const handleRegisterhome= ()=>{
    console.log("basıldı");
    const service=new UserService();
    service.login(data).then((res)=>{
      if(res.data.success===true){
        navigation.navigate("Homepage",{data:data.email})
      }
      else{
        Alert.alert(res.data.message)
      }
    }).catch((err)=>{
      console.log(err);
    })
    
    // navigation.navigate("Homepage")
  }
  const handleChange = (key, value) => {
    setData({ ...data, [key]: value });
  };
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
  <TextInput  value={data.email}
              onChangeText={(text) => handleChange("email", text)} style={styles.textInput} placeholder='Email'></TextInput>
        </View>
        <View style={styles.inputContainer}>
  <FontAwesome name="paw" size={24} color="black" style={styles.inputIcon}/> 
  <TextInput  value={data.password}
              onChangeText={(text) => handleChange("password", text)} secureTextEntry style={styles.textInput} placeholder='Şifre'></TextInput>
        </View>
        <Text style={styles.sifremiUnuttumText}>Şifreni Mi Unuttun</Text>

        <View style={styles.girisButtonContainer}>
          <TouchableOpacity  onPress={handleRegisterhome}>
          <Text style={styles.girisButtonText}>Giriş Yap</Text>
          <LinearGradient
        // Button Linear Gradient
        colors={['#F97794', '#623AA2']}
        style={styles.lineerGradient}>
        <FontAwesome name="long-arrow-right" size={24} color="black"  style={styles.inputIcon} />
      </LinearGradient>
      </TouchableOpacity> 
        </View>
        <TouchableOpacity onPress={handleRegister}><Text style={styles.footerText}>Hesabın Yok Mu ? <Text style={{textDecorationLine:"underline"}}> Kaydol</Text>
        </Text></TouchableOpacity>
  
        <View style={styles.solVectorContainer}>
          <ImageBackground source={require("../screen/assets/Vectormorbüyük.png")} style={styles.solVectorImage} />
        </View>
    </View>
  );
};

export default LoginScreen

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
    marginTop:120,
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
    marginTop:60,
  },
  solVectorContainer:{
    position:"absolute",
    bottom: 0,
    left: 0,
  },
  solVectorImage:{
    height:250,
    width:170,
  }
});
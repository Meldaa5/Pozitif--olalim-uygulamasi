import { StyleSheet, Text, View,Image, TextInput  } from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons'; 
import { FontAwesome } from '@expo/vector-icons';
const LoginScreen = () => {
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
  <TextInput  style={styles.textInput} placeholder='Email'></TextInput>
        </View>
        <View style={styles.inputContainer}>
  <FontAwesome name="paw" size={24} color="black" style={styles.inputIcon}/> 
  <TextInput secureTextEntry style={styles.textInput} placeholder='Şifre'></TextInput>
        </View>
    </View>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
  container:{
    backgroundColor: "#f5f5f5",
    flex:1,
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
  }
})
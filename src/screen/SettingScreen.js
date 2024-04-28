import { StyleSheet, Text, View,Image, TextInput, ImageBackground, TouchableOpacity  } from 'react-native'
import React from 'react'
import 'react-native-gesture-handler';
import Ionicons from '@expo/vector-icons/Ionicons'; 
import { FontAwesome } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';





const SettingScreen=() => {
    

    return(
      
<View style={styles.container}>
<View style={styles.topImageContainer}> 
        <Image source={require("../screen/assets/Vectorpembebüyük.png")} style={styles.topImage} />
        </View>
<View>
        <Text style={styles.kayıtHesapText}>
               AYARLAR
          </Text>
        </View>
</View>
    );
};
export default SettingScreen
const styles = StyleSheet.create({
    container:{
      backgroundColor: "#f5f5f5",
      flex:1,
      position:"relative",
    },
    topImage:{
        width:"100%",
        height:130,
       },
    kayıtHesapText:{
        textAlign:"center",
        fontSize:30,
        color:"black",
        marginBottom:30,
        fontWeight:"bold"
      },
})
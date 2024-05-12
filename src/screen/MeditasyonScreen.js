import { StyleSheet, Text, View,Image, TextInput, ImageBackground, TouchableOpacity, Button  } from 'react-native'
import React, { useCallback, useEffect, useState } from 'react'
import 'react-native-gesture-handler';
import Ionicons from '@expo/vector-icons/Ionicons'; 
import { FontAwesome } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { NavigationContainer, useNavigation, useRoute } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import SettingScreen from './SettingScreen';
import YouTubePlayer from 'react-native-youtube-iframe';


const Drawer = createDrawerNavigator();

const MeditasyonScreen=() => {
  const [playing, setPlaying] = useState("false")

    return(
      
<View style={styles.container}>
<View style={styles.topImageContainer}> 
        <Image source={require("../screen/assets/Vectorpembebüyük.png")} style={styles.topImage} />
        </View>

        <View>
          <YouTubePlayer
            height={300}
            play={playing}
            videoId={"gh3TfXCHpRw"}
            // onChangeState={onStateChange}
          />
          
        </View>
<View>
        <Text style={styles.kayıtHesapText}>
               MEDİTASYON
          </Text>
        </View>
</View>
    );
};
export default MeditasyonScreen
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
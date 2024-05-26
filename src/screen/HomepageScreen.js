import { StyleSheet, Text, View,Image, TextInput, ImageBackground, TouchableOpacity, Button  } from 'react-native'
import React, { useCallback, useEffect, useState } from 'react'
import 'react-native-gesture-handler';
import Ionicons from '@expo/vector-icons/Ionicons'; 
import { FontAwesome } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { NavigationContainer, useNavigation, useRoute } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import SettingScreen from './SettingScreen';
import MeditasyonScreen from './MeditasyonScreen';
import YouTubePlayer from 'react-native-youtube-iframe';
import positiveSentences from '../olumlamaCumleleri/positiveSentences';
import Profile from './Profile';
import VideoScreen from './VideoScreen';

const Drawer = createDrawerNavigator();

const HomeContent = () => {
  
  const [soz, setSoz] = useState("")
  useEffect(() => {
  const sente=new positiveSentences();

  setSoz(sente.getRandomSentence())
   
  }, [])
  
  const [playing, setPlaying] = useState("false")
  // const onStateChange = useCallback((state) => {
  //   if (state === "ended") {
  //     setPlaying(false);
  //     Alert.alert("video has finished playing!");
  //   }
  // }, []);
  
  // npm i react-native-webview@13.6.4 ÇALIŞMAZSA BU SÜRÜMDEN DEVAM ET 
   
    return (
      <View style={styles.container}>
    
        {/* <View style={styles.topImageContainer}>
          <Image source={require("../screen/assets/Vectorpembebüyük.png")} style={styles.topImage} />
        </View> */}
        <View>
          <YouTubePlayer
            height={300}
            play={playing}
            videoId={"_mVv7c-aFS8"}
            // onChangeState={onStateChange}
          />
          
        </View>
        
        <View>
          
           <Text style={styles.kayıtHesapText}>
            {soz}
          </Text>
        </View>
      </View>
    );
  };
  
  const HomepageScreen = () => {
  const route = useRoute();
  const email = route.params?.data;
    return (
      <Drawer.Navigator>
        <Drawer.Screen name="Ana Sayfa"  component={HomeContent} />
        <Drawer.Screen name="Ayarlar" component={SettingScreen} />
        <Drawer.Screen name="Pozitif Cümleler" component={SettingScreen} />
        <Drawer.Screen name="Meditasyon" component={MeditasyonScreen} />
        <Drawer.Screen name="Midfulness" component={SettingScreen} />
        <Drawer.Screen name="Video" component={VideoScreen} />
        <Drawer.Screen name="Profil"  children={()=><Profile info={email}/>} />
    
      </Drawer.Navigator>
    );
  };
  
  export default HomepageScreen;
  
  const styles = StyleSheet.create({
    container: {
      backgroundColor: "black",
      flex: 1,
      position: "relative",
    },
    topImage: {
      width: "100%",
      height: 130,
    },
    kayıtHesapText: {
      textAlign: "center",
      fontSize: 30,
      color: "white",
      marginBottom: 30,
      fontWeight: "bold"
    },
  }); 
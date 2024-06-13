import { StyleSheet, Text, View,Image, TextInput, ImageBackground, TouchableOpacity, Button,ScrollView   } from 'react-native'
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

const emojiler = [
  "😭", // Çok mutsuz
  "😔", // Mutsuz
  "🤔", // Nötr
  "😇", // Mutlu
  "🤩" // Çok mutlu
];
const HomeContent = () => {
  
  const [soz, setSoz] = useState("")
  const [selectedEmoji, setSelectedEmoji] = useState(null);

  useEffect(() => {
  const sente=new positiveSentences();

  setSoz(sente.getRandomSentence())
   
  }, []);
  
  const [playing, setPlaying] = useState("false");
  const selectEmoji = (index) => {
    setSelectedEmoji(index);
  };
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
            videoId={"3rXPVw_qYqE"}
            // onChangeState={onStateChange}
          />
          
        </View>
        <ScrollView horizontal contentContainerStyle={styles.emojiContainer}>
        {emojiler.map((emoji, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.emoji,
              selectedEmoji === index && styles.selectedEmoji
            ]}
            onPress={() => selectEmoji(index)}
          >
            <Text style={styles.emojiText}>{emoji}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

        <View style={styles.sozContainer}>
          
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
      backgroundColor: "white",
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
      color: "black",
      
      fontWeight: "bold"
    },
    sozContainer: {
      position: 'absolute',
      top: 270, // You can adjust this value to move the text container closer to the emojis
      left: 0,
      right: 0,
      justifyContent: 'center',
      alignItems: 'center',
      marginVertical: 20,
      padding: 2,
      backgroundColor: 'white',
      borderRadius: 10,
      shadowColor: 'purple', // Gölge rengi
      shadowOffset: { width: 0, height: 2 }, // Gölge ofseti
      shadowOpacity: 0.25, // Gölge opaklığı
      shadowRadius: 3.84, // Gölge yarıçapı
      elevation: 15, // Android için yükseklik (gölge)
    },
    emojiContainer: {
      marginTop:165,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginVertical: 20,
    },
    emoji: {
      padding: 5,
      marginHorizontal: 5,
      borderRadius: 5,
    },
    selectedEmoji: {
      backgroundColor: '#ddd',
    },
    emojiText: {
      fontSize: 40,
    },
  }); 
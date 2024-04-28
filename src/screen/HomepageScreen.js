import { StyleSheet, Text, View,Image, TextInput, ImageBackground, TouchableOpacity  } from 'react-native'
import React from 'react'
import 'react-native-gesture-handler';
import Ionicons from '@expo/vector-icons/Ionicons'; 
import { FontAwesome } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import SettingScreen from './SettingScreen';
import MeditasyonScreen from './MeditasyonScreen';



const Drawer = createDrawerNavigator();

const HomeContent = () => {
    return (
      <View style={styles.container}>
        <View style={styles.topImageContainer}>
          <Image source={require("../screen/assets/Vectorpembebüyük.png")} style={styles.topImage} />
        </View>
        <View>
          <Text style={styles.kayıtHesapText}>
            Ana Sayfa
          </Text>
        </View>
      </View>
    );
  };
  
  const HomepageScreen = () => {
    return (
      <Drawer.Navigator>
        <Drawer.Screen name="Ana Sayfa" component={HomeContent} />
        <Drawer.Screen name="Ayarlar" component={SettingScreen} />
        <Drawer.Screen name="Pozitif Cümleler" component={SettingScreen} />
        <Drawer.Screen name="Meditasyon" component={MeditasyonScreen} />
        <Drawer.Screen name="Midfulness" component={SettingScreen} />
      </Drawer.Navigator>
    );
  };
  
  export default HomepageScreen;
  
  const styles = StyleSheet.create({
    container: {
      backgroundColor: "#f5f5f5",
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
      marginBottom: 30,
      fontWeight: "bold"
    },
  });
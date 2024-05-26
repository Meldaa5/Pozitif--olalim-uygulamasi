import React, { useState } from 'react'
import { StyleSheet, Text, View, Image, TextInput, ImageBackground, TouchableOpacity, Button, Dimensions, BackHandler } from 'react-native'
import Feather from 'react-native-vector-icons/Feather';
import 'react-native-gesture-handler';
import Ionicons from '@expo/vector-icons/Ionicons'; 
import { FontAwesome } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { SwiperFlatList } from 'react-native-swiper-flatlist';
import { videoData } from './Database';
import SingleVideo from './SingleVideo';
const VideoComponents=() => {

    const[currentIndex, setCurrentIndex]=useState(0)
    const handleChangeIndexValue=({index}) =>{
        setCurrentIndex(index)
    };
  return (
    
      <SwiperFlatList 
      vertical={true}
      onChangeIndex={handleChangeIndexValue}
      data={videoData}
      renderItem={({item,index})=> (
      <SingleVideo item={item} index={index} currentIndex={currentIndex}/> 
    )} 
    keyExtractor={(item,index)=> index.toString()}
    />

  );
};
export default VideoComponents;

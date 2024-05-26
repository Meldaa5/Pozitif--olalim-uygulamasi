import React from 'react'
import { StyleSheet, Text, View, Image, TextInput, ImageBackground, TouchableOpacity, Button, Dimensions, BackHandler } from 'react-native'
import Feather from 'react-native-vector-icons/Feather';
import 'react-native-gesture-handler';
import Ionicons from '@expo/vector-icons/Ionicons'; 
import { FontAwesome } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import VideoComponents from '../screenComponent/VideoComponents';
function VideoScreen() {
    const windowWidth = Dimensions.get('window').width
    const windowHeight = Dimensions.get('window').height

    return (
        <View style={{
            width: windowWidth,
            height: windowHeight,
            backgroundColor: 'white',
            position: 'relative',
            backgroundColor:'black',
        }}>
            <View style={{
                position: 'absolute',
                top:0,
                left:0,
                right:0,
                flexDirection:'row',
                justifyContent:'space-between',
                zIndex:1,
                padding:10,

            }}>

                <Text style={{fontSize:20,fontWeight:'bold',color:'white'}}>
                    REELS
                </Text>
             <Feather name="camera" style={{fontSize:25,color:'white'}}/>
            </View>
            <VideoComponents/>
        </View>
    );
    ;
}

export default VideoScreen

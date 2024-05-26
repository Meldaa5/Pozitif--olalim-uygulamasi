import React, { useRef, useState,useEffect } from 'react';
import { StyleSheet, View, Dimensions, TouchableOpacity } from 'react-native';
import { Video } from 'expo-av';
import Ionic from "react-native-vector-icons/Ionicons"
const SingleVideo = ({ item, index, currentIndex }) => {
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;
  const videoRef = useRef(null);
   const [mute,setMute]= useState (false)

   const handleMuteToggle = () => {
    setMute(!mute);
  };
  useEffect(() => {
    // Videoyu sadece currentIndex eşleştiğinde oynat ve sessiz değilse sesi aç
    if (index === currentIndex) {
      setMute(false);
    } else {
      setMute(true);
    }
  }, [currentIndex]);
  return (
    <View style={{ width: windowWidth, height: windowHeight, position: 'relative' }}>
      <TouchableOpacity 
       activeOpacity={0.9}
       onPress={handleMuteToggle}
      style={{ width: '100%', height: '100%', position: 'absolute' }}>
        <Video
          ref={videoRef}
          source={item.video}
          rate={1.0}
          volume={1.0}
        //   isMuted={false}
        isMuted={mute}
          resizeMode="cover"
          shouldPlay={index === currentIndex}
          isLooping
          
          style={{ width: '100%', height: '100%', position: 'absolute' }}
        />
      </TouchableOpacity>
      <Ionic name='volume-mute' style={{fontSize:mute? 20 : 0, color:'white', position:'absolute',top:windowHeight/2.3, left: windowWidth/2.3,
         backgroundColor:'rgba(52,52,52,0.6)',
        borderRadius:100,
        padding: mute ? 20: 0,

      }}/>
    </View>
  );
};

export default SingleVideo;

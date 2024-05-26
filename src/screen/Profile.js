import { View, Text, ImageBackground, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useRoute } from '@react-navigation/native';
import UserService from "../services/UserService.js";
import { Dimensions } from 'react-native';

const { height } = Dimensions.get("window");
const Profile = ({info}) => {
   const email=info;
    const [data, setData] = useState([]);
    const userService=new UserService();
    useEffect(() => {
     userService.getEmployee(email).then((res)=>{
        setData(res.data);
     })
    }, [email])
    
  return (
    <View>
        <ImageBackground
          style={{ height: height / 3,  marginTop:20}}
          resizeMode="contain"
          source={require("../screen/assets/profile.jpg")}
        />
        <View style={styles.profileInfo}>
        <Text style={styles.userInfo}> Kullancı Bilgileri</Text>
        <Text>Kullanıcı Adı:{data.name}</Text>
        <Text>Kullanıcı Email:{data.email}</Text>
        <Text>Kullanıcı Telefon Numarası:{data.phoneNumber}</Text>
        </View>
    </View>
  )
}

export default Profile

const styles=StyleSheet.create({
    userInfo:{
        textAlign:"center",
        fontSize:40,
        
        color:"#0f0",
    },
    profileInfo:{
        margin:10
    }

})
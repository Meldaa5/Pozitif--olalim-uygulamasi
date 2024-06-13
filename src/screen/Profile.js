import { View, Text, Image, StyleSheet, Dimensions, Animated, Easing } from 'react-native';
import React, { useEffect, useState } from 'react';
import UserService from "../services/UserService.js";

const { height } = Dimensions.get("window");

const Profile = ({ info }) => {
    const email = info;
    const [data, setData] = useState([]);
    const userService = new UserService();

    const colorAnimation = useState(new Animated.Value(0))[0];

    useEffect(() => {
        userService.getEmployee(email).then((res) => {
            setData(res.data);
        });

        Animated.loop(
            Animated.timing(colorAnimation, {
                toValue: 1,
                duration: 3000,
                easing: Easing.linear,
                useNativeDriver: false,
            })
        ).start();
    }, [email]);

  
    const backgroundColor = colorAnimation.interpolate({
      inputRange: [0, 0.33, 0.66, 1], 
      outputRange: ['#ff0000', '#00ff00', '#0000ff', '#ff0000'] // dairesel geçiş
  });

    return (
        <View style={styles.container}>
            <Animated.View style={[styles.imageContainer, { backgroundColor }]}>
                <Image
                    style={styles.foto}
                    resizeMode="cover"
                    source={require("../screen/assets/profile.jpg")}
                />
            </Animated.View>
              <View style={styles.profileInfo}>
                <Text style={styles.userInfo}>{data.name}</Text>
                </View>
                <View style={styles.semicircleContainer}>
                <View style={styles.whitecircle} />
                <View style={styles.semicircle} />
                <View style={[styles.semicircle, styles.semicircle2]} />
            </View>
              <View style={styles.profileInfo2}>
                <Text>Kullanıcı Adı: {data.name}</Text>
                <Text>Kullanıcı Email: {data.email}</Text>
                <Text>Kullanıcı Telefon Numarası: {data.phoneNumber}</Text>
                </View>
        </View>
    );
}

export default Profile;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingTop: 20, 
    },
    userInfo: {
        textAlign: "center",
        fontSize: 20,
        color: "black",
    },
    profileInfo: {
        margin: 10,
    },
    profileInfo2: {
      margin:100,
      width:300,
  },
    imageContainer: {
        borderRadius: 70,
        padding: 5, 
        marginTop: 0,
        width: 116,
        height: 116, 
        alignItems: 'center',
        justifyContent: 'center', 
        zIndex:55
    },
    foto: {
      width: 110,
      height: 110,
      borderRadius: 55,
      
  },
  semicircleContainer: {
      position: 'absolute',
      top: 150,
      alignItems: 'center',
      justifyContent: 'center',
  },
  whitecircle: {
    width:350 * 1.2,
    height: 550 * 0.6,
    borderRadius: 300*0.9,
    backgroundColor: 'white',
    position: 'absolute',
    top: -250,
    zIndex:-1
    
},
  semicircle: {
      width:320 * 1.2,
      height: 470 * 0.6,
      borderRadius: 300*0.9,
      backgroundColor: '#7400e8',
      position: 'absolute',
      top: -170,
      zIndex:-2
      
  },
  semicircle2: {
      width: 450,
      height: 680 * 0.5,
      borderRadius: 100*1.9,
      backgroundColor: '#b020e8',
      top: -210,
      zIndex:-3
  },
});
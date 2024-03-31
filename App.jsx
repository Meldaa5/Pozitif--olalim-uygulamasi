import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Compon from './Compon';
 import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from './src/screen/LoginScreen';
import SignupScreen from './src/screen/SignupScreen';
const Stack =createNativeStackNavigator();


export default function App() {
  return ( 
    <NavigationContainer>
<Stack.Navigator screenOptions={{headerShown:false}}>
  <Stack.Screen name="Login" component={LoginScreen}></Stack.Screen>
  <Stack.Screen name="SignUp" component={SignupScreen}></Stack.Screen>
</Stack.Navigator>

    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

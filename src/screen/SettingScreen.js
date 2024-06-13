import { StyleSheet, Text, View, Image, TextInput, ImageBackground, TouchableOpacity, SafeAreaView, ScrollView, Switch } from 'react-native';
import React, { useState } from 'react';
import 'react-native-gesture-handler';
import Ionicons from '@expo/vector-icons/Ionicons'; 
import { FontAwesome } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import FeatherIcon from 'react-native-vector-icons/Feather';

const SettingScreen = () => {
  const [form, setForm] = useState({
    darkMode: false,
    emailNotifications: true,
    pushNotifications: false,
  });

  const darkMode = form.darkMode;

  return (
    <SafeAreaView style={[styles.safeArea, darkMode && styles.darkSafeArea]}>
      <View style={styles.container}>
        <View style={[styles.header, darkMode && styles.darkHeader]}>
          <Text style={[styles.title, darkMode && styles.darkTitle]}>Settings</Text>
          <Text style={[styles.subtitle, darkMode && styles.darkSubtitle]}>
            Use it however you want!
          </Text>
        </View>
        <ScrollView>
          <View style={[styles.profile, darkMode && styles.darkProfile]}>
            <Image
              alt=""
              source={require("../screen/assets/melda.jpeg")}
              style={styles.profileAvatar} />
            <Text style={[styles.profileName, darkMode && styles.darkProfileName]}>Melda Eğri</Text>
            <Text style={[styles.profileEmail, darkMode && styles.darkProfileEmail]}>melda.eegri@gmail.com</Text>
            <TouchableOpacity
              onPress={() => {
                // handle onPress
              }}>
              <View style={styles.profileAction}>
                <Text style={styles.profileActionText}>Edit Profile</Text>
                <FeatherIcon color="#fff" name="edit" size={16} />
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.section}>
            <Text style={[styles.sectionTitle, darkMode && styles.darkSectionTitle]}>Preferences</Text>
            <View style={[styles.sectionBody, darkMode && styles.darkSectionBody]}>
              <View style={[styles.rowWrapper, styles.rowFirst]}>
                <TouchableOpacity
                  onPress={() => {
                    // handle onPress
                  }}
                  style={styles.row}>
                  <View
                    style={[styles.rowIcon, { backgroundColor: '#fe9400' }]}>
                    <FeatherIcon
                      color="#fff"
                      name="globe"
                      size={20} />
                  </View>
                  <Text style={[styles.rowLabel, darkMode && styles.darkRowLabel]}>Language</Text>
                  <View style={styles.rowSpacer} />
                  <Text style={[styles.rowValue, darkMode && styles.darkRowValue]}>English</Text>
                  <FeatherIcon
                    color="#C6C6C6"
                    name="chevron-right"
                    size={20} />
                </TouchableOpacity>
              </View>
              <View style={styles.rowWrapper}>
                <View style={styles.row}>
                  <View
                    style={[styles.rowIcon, { backgroundColor: '#007AFF' }]}>
                    <FeatherIcon
                      color="#fff"
                      name="moon"
                      size={20} />
                  </View>
                  <Text style={[styles.rowLabel, darkMode && styles.darkRowLabel]}>Dark Mode</Text>
                  <View style={styles.rowSpacer} />
                  <Switch
                    onValueChange={darkMode => setForm({ ...form, darkMode })}
                    value={form.darkMode} />
                </View>
              </View>
              <View style={styles.rowWrapper}>
                <TouchableOpacity
                  onPress={() => {
                    // handle onPress
                  }}
                  style={styles.row}>
                  <View
                    style={[styles.rowIcon, { backgroundColor: '#32c759' }]}>
                    <FeatherIcon
                      color="#fff"
                      name="navigation"
                      size={20} />
                  </View>
                  <Text style={[styles.rowLabel, darkMode && styles.darkRowLabel]}>Location</Text>
                  <View style={styles.rowSpacer} />
                  <Text style={[styles.rowValue, darkMode && styles.darkRowValue]}>Turkey, Elazığ</Text>
                  <FeatherIcon
                    color="#C6C6C6"
                    name="chevron-right"
                    size={20} />
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.section}>
              <Text style={[styles.sectionTitle, darkMode && styles.darkSectionTitle]}>Notifications</Text>
              <View style={[styles.sectionBody, darkMode && styles.darkSectionBody]}>
                <View style={[styles.rowWrapper, styles.rowFirst]}>
                  <View style={styles.row}>
                    <View
                      style={[styles.rowIcon, { backgroundColor: '#38C959' }]}>
                      <FeatherIcon
                        color="#fff"
                        name="at-sign"
                        size={20} />
                    </View>
                    <Text style={[styles.rowLabel, darkMode && styles.darkRowLabel]}>Email Notifications</Text>
                    <View style={styles.rowSpacer} />
                    <Switch
                      onValueChange={emailNotifications =>
                        setForm({ ...form, emailNotifications })
                      }
                      value={form.emailNotifications} />
                  </View>
                </View>
                <View style={styles.rowWrapper}>
                  <View style={styles.row}>
                    <View
                      style={[styles.rowIcon, { backgroundColor: '#38C959' }]}>
                      <FeatherIcon
                        color="#fff"
                        name="bell"
                        size={20} />
                    </View>
                    <Text style={[styles.rowLabel, darkMode && styles.darkRowLabel]}>Push Notifications</Text>
                    <View style={styles.rowSpacer} />
                    <Switch
                      onValueChange={pushNotifications =>
                        setForm({ ...form, pushNotifications })
                      }
                      value={form.pushNotifications} />
                  </View>
                </View>
                <View style={styles.rowWrapper}>
                  <TouchableOpacity
                    onPress={() => {
                      // handle onPress
                    }}
                    style={styles.row}>
                    <View
                      style={[styles.rowIcon, { backgroundColor: '#FE3C30' }]}>
                      <FeatherIcon
                        color="#fff"
                        name="music"
                        size={20} />
                    </View>
                    <Text style={[styles.rowLabel, darkMode && styles.darkRowLabel]}>Sound</Text>
                    <View style={styles.rowSpacer} />
                    <Text style={[styles.rowValue, darkMode && styles.darkRowValue]}>Default</Text>
                    <FeatherIcon
                      color="#C6C6C6"
                      name="chevron-right"
                      size={20} />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
          <Text style={[styles.contentFooter, darkMode && styles.darkContentFooter]}>Made with ❤️ in Elazığ</Text>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

export default SettingScreen;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f6f6f6',
  },
  darkSafeArea: {
    backgroundColor: '#000',
  },
  container: {
    paddingVertical: 24,
    paddingHorizontal: 0,
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
  },
  header: {
    paddingLeft: 24,
    paddingRight: 24,
    marginBottom: 12,
  },
  darkHeader: {
    backgroundColor: '#1d1d1d',
  },
  title: {
    fontSize: 32,
    fontWeight: '700',
    color: '#1d1d1d',
    marginBottom: 6,
  },
  darkTitle: {
    color: '#fff',
  },
  subtitle: {
    fontSize: 15,
    fontWeight: '500',
    color: '#929292',
  },
  darkSubtitle: {
    color: '#ccc',
  },
  contentFooter: {
    marginTop: 24,
    fontSize: 13,
    fontWeight: '500',
    color: '#929292',
    textAlign: 'center',
  },
  darkContentFooter: {
    color: '#ccc',
  },
  profile: {
    padding: 16,
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#e3e3e3',
  },
  darkProfile: {
    backgroundColor: '#333',
  },
  profileAvatar: {
    width: 60,
    height: 60,
    borderRadius: 9999,
  },

    profileName: {
      marginTop: 12,
      fontSize: 20,
      fontWeight: '600',
      color: '#090909',
    },
    profileEmail: {
      marginTop: 6,
      fontSize: 16,
      fontWeight: '400',
      color: '#848484',
    },
    profileAction: {
      marginTop: 12,
      paddingVertical: 10,
      paddingHorizontal: 16,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#007bff',
      borderRadius: 12,
    },
    profileActionText: {
      marginRight: 8,
      fontSize: 15,
      fontWeight: '600',
      color: '#fff',
    },
    /** Section */
    section: {
      paddingTop: 12,
    },
    sectionTitle: {
      marginVertical: 8,
      marginHorizontal: 24,
      fontSize: 14,
      fontWeight: '600',
      color: '#a7a7a7',
      textTransform: 'uppercase',
      letterSpacing: 1.2,
    },
    sectionBody: {
      paddingLeft: 24,
      backgroundColor: '#fff',
      borderTopWidth: 1,
      borderBottomWidth: 1,
      borderColor: '#e3e3e3',
    },
    /** Row */
    row: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-start',
      paddingRight: 16,
      height: 50,
    },
    rowWrapper: {
      borderTopWidth: 1,
      borderColor: '#e3e3e3',
    },
    rowFirst: {
      borderTopWidth: 0,
    },
    rowIcon: {
      width: 30,
      height: 30,
      borderRadius: 4,
      alignItems: 'center',
      justifyContent: 'center',
      marginRight: 12,
    },
    rowLabel: {
      fontSize: 17,
      fontWeight: '500',
      color: '#000',
    },
    rowSpacer: {
      flexGrow: 1,
      flexShrink: 1,
      flexBasis: 0,
    },
    rowValue: {
      fontSize: 17,
      fontWeight: '500',
      color: '#8B8B8B',
      marginRight: 4,
    },
  });

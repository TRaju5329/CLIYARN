import { Image, ScrollView, StatusBar, StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context'
import { myColors } from '../Utils/myColors'
import Icon from 'react-native-vector-icons/FontAwesome'
import { useNavigation } from '@react-navigation/native';

const Login = () => {
  const [isVisble, setisVisble] = useState(true);

  const [userCredentials, setuserCredentials] = useState({
    email: '',
    password: '',
  });
  const { email, password } = userCredentials;
  console.log(email);


  const nav = useNavigation()
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: myColors.white, }}>
      <StatusBar />
      <ScrollView style={{ flex: 1, paddingTop: 30 }}>
        <Image source={require('../images/logo.png')} style={{ height: 55, width: 45, alignSelf: 'center' }} />
        <View style={{ paddingHorizontal: 20, marginTop: 50 }}>
          <Text style={{ color: myColors.black, fontSize: 24, fontWeight: '500' }}>Loging</Text>
          <Text>Enter your email and password</Text>
          <Text style={styles.lable}>Email</Text>
          <TextInput
            value={email}
            onChangeText={(val) => {
              setuserCredentials({ ...userCredentials, email: val })
            }}
            style={styles.inputText} keyboardType='email-address' maxLength={15} />
          <Text style={styles.lable}>Password</Text>
          <View
            style={{
              borderColor: myColors.gray,
              borderBottomWidth: 1,
              flexDirection: 'row',
              justifyContent: 'space-between'
            }}>
            <TextInput
              value={password}
              onChangeText={(val) => {
                setuserCredentials({ ...userCredentials, password: val })
              }}
              secureTextEntry={isVisble}
              keyboardType='ascii-capable'
              maxLength={6}
              style={{
                fontSize: 17,
                marginTop: 15,
                flex: 0.9
              }}
            />
            <Icon
              name={isVisble == true ? "eye-slash" : "eye"}
              size={25}
              onPress={() => {
                setisVisble(!isVisble)
              }}
              style={{
                top: 20
              }}
            />
          </View>
          <Text
            style={{
              fontSize: 14,
              fontWeight: '400',
              color: 'black',
              marginTop: 15,
             textAlign: 'right'
            }}
          >
            Forgot Password ?
          </Text>
          <TouchableOpacity
            onPress={()=>
            nav.navigate('Home')}
            style={{
              backgroundColor: myColors.primary,
              marginTop: 30,
              height: 70,
              borderRadius: 20,
              justifyContent: 'center',
              alignItems: 'center'
            }}>
            <Text style={{ fontSize: 19, color: myColors.white, fontWeight: '500' }}>Sign Up</Text>
          </TouchableOpacity>

          <View style={{ flexDirection: "row", justifyContent: "center", alignItems: 'center', gap: 10, marginTop: 20 }}>
            <Text
              style={{
                fontSize: 16,
              }}
            >
              Already have an account?
            </Text>
            <TouchableOpacity
              onPress={() =>
                nav.navigate('Signup')
              }>
              <Text
                style={{
                  fontSize: 16,
                  color: myColors.primary,
                  fontWeight: '600'
                }}
              >
                Signup
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Login

const styles = StyleSheet.create({
  lable: {
    fontSize: 16,
    fontWeight: '500',
    marginTop: 40,
  },
  inputText: {
    borderColor: myColors.gray,
    borderBottomWidth: 1,
    fontSize: 16,
    marginTop: 5
  }
})
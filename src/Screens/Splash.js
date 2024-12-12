import { Image, StatusBar, StyleSheet, Text, View, } from 'react-native'
import React, { useEffect } from 'react'
import { myColors } from './../Utils/myColors'
import { useNavigation } from '@react-navigation/native'

const Splash = () => {

    const nav = useNavigation()
    useEffect(() => {
        setTimeout(() => {
            nav.replace('Signup')
        }, 5000)
    }, []);

    return (
        <View style={{ flex: 1, backgroundColor: myColors.gray, justifyContent: 'center' }}>
            <StatusBar style='light' />
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 15 }}>
                <Image source={require('../images/logo.png')} style={{ height: 75, width: 65, tintColor: "white" }} />
                <View>
                    <Text style={{ fontSize: 55, color: myColors.white }}>Raju</Text>
                    <Text style={{ fontSize: 10, color: myColors.white, textAlign: 'center', letterSpacing: 2, top: -2 }}>Front End Developer</Text>
                </View>
            </View>
        </View>
    )
}
export default Splash
const styles = StyleSheet.create({})
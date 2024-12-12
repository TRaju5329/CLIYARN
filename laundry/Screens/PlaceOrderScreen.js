import { View, Text, SafeAreaView, Image, StatusBar } from 'react-native'
import React from 'react'

const PlaceOrderScreen = () => {
    return (
        <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: "center", backgroundColor: "#fff" }}>
            <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />
            <Image style={{ height: 100, width: 100, resizeMode: 'contain' }}
                source={require('../assets/confirm.png')} />
            <Text style={{ marginTop: 20, fontSize: 16, fontWeight: "500", color: "#000", textAlign: "center", }}> your order was confirmed </Text>
        </SafeAreaView>
    )
}
export default PlaceOrderScreen
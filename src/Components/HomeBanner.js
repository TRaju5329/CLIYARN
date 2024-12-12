import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const HomeBanner = () => {
  return (
    <View>
      <Image
        source={require('../images/banner.jpeg')}
        style={{ height: 80, width: "100%" }}
      />
    </View>
  )
}

export default HomeBanner

const styles = StyleSheet.create({})
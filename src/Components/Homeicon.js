import { StyleSheet, Text, View , Image} from 'react-native'
import React from 'react'

const Homeicon = () => {
  return (
    <View 
    style={{
        justifyContent:'center',
        alignItems:"center"
    }}>
      <Image 
      style={{width:40, height: 40}}
      source={require("../images/logo.png")}/>
    </View>
  )
}

export default Homeicon

const styles = StyleSheet.create({})
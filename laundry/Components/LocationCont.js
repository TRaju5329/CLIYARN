import { StyleSheet, Text, View, Pressable, Image } from 'react-native'
import React from 'react';
import Icon from 'react-native-vector-icons/Entypo'

const LocationCont = () => {
  return (
    <View style={{ flexDirection: "row", alignItems: "center", padding: 10 }}>
      <Icon name="location-pin" size={36} color="#fd5c63" />
      <View>
        <Text style={{ fontSize: 16, fontWeight: "500", color: "#000" }}>Home</Text>
        <Text style={{ fontSize: 13, fontWeight: "400", color: "#000" }}>Hyderabad, hitech city</Text>
      </View>
      <Pressable style={{ marginLeft: "auto", marginRight: 7 }}>
        <Image
          style={{ width: 40, height: 40, borderRadius: 20 }}
          source={{
            uri: "https://media.licdn.com/dms/image/C5603AQFmI5H01fHkWw/profile-displayphoto-shrink_200_200/0/1616903109993?e=2147483647&v=beta&t=Ts2r0_vQW1P0tspiyXGdajsPw1Z9AknDkvu1gGC9gKo",
          }}
        />
      </Pressable>
    </View>
  )
}

export default LocationCont

const styles = StyleSheet.create({})
import { View, Text, TextInput } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/AntDesign'

const Seachbar = () => {
    return (
        <View
            style={{
                paddingHorizontal: 5,
                paddingVertical: 2,
                marginHorizontal: 10,
                marginVertical: 20,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                borderWidth: 0.7,
                borderColor: "#000",
                borderRadius: 7,
            }}
        >
            <TextInput placeholder="Search for items or More" />
            <Icon name="search1" size={24} color="#fd5c63" />
        </View>
    )
}

export default Seachbar
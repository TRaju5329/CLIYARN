import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { myColors } from '../Utils/myColors'

const Productstitle = ({title}) => {
    return (
        <View style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center"
        }}>
            <Text
                style={{
                    fontSize: 20,
                    fontWeight: "600"
                }}>
                {title}
            </Text>
            <Text
                style={{
                    fontSize: 15,
                    fontWeight: "400",
                    color: myColors.primary
                }}>
                See All
            </Text>
        </View>
    )
}

export default Productstitle

const styles = StyleSheet.create({})
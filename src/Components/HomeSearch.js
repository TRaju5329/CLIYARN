import { StyleSheet, Text, View, TextInput } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome'



const HomeSearch = () => {
    return (
        <View
            style={{
                backgroundColor: "#E3E3E3",
                height: 40,
                borderRadius: 10,
                flexDirection: 'row',
                alignItems: 'center',
                paddingHorizontal: 20,
                gap: 10
            }}>
            <Icon name="search" size={24} color="black" />
            <TextInput
                placeholder='search Store' 
                style={{flex:1}}/>
        </View>
    )
}

export default HomeSearch

const styles = StyleSheet.create({})
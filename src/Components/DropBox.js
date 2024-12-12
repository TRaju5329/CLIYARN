import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { Dropdown } from '../Utils/data';
import Icon from 'react-native-vector-icons/FontAwesome'

const DropBox = () => {
    const [myIndex, setmyInedex] = useState();
    const [toggle, setToggle] = useState(false);
    return (
        <View>
            <FlatList
                data={Dropdown}
                renderItem={({ item, index }) => (
                    <View>
                        <TouchableOpacity
                            onPress={() => {
                                setmyInedex(index);
                                setToggle(!toggle);
                            }}
                            style={{
                                flexDirection: "row",
                                justifyContent: "space-between",
                                alignItems: "center",
                                borderBottomColor: "#e3e3e3",
                                borderBottomWidth: 1,
                                marginBottom: 10,
                                paddingVertical: 20,
                            }}>
                            <Text>{item.title}</Text>
                            <Icon name={toggle?"arrow-right":"arrow-down"} size={24} color="black" />
                        </TouchableOpacity>
                        {myIndex == index && toggle ? <Text>{item.content}</Text> : null}
                    </View>
                )} />
        </View>
    )
}

export default DropBox

const styles = StyleSheet.create({})
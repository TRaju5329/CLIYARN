import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { fruits } from '../Utils/data'
import { myColors } from '../Utils/myColors'
import Icon from 'react-native-vector-icons/FontAwesome'
import { useNavigation } from '@react-navigation/native'
import Details from '../Screens/Details'

const ProductsCarosual = ({ data }) => {
    const nav = useNavigation()
    return (
        <View>
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={data}
                renderItem={({ item, index }) => (
                    <TouchableOpacity
                        onPress={() => {
                            nav.navigate("Details",{
                                main:item
                            });
                        }}
                        activeOpacity={0.7}
                        style={{
                            height: 220,
                            width: 175,
                            marginRight: 15,
                            borderRadius: 15,
                            borderWidth: 2,
                            borderColor: myColors.gray,
                        }}>
                        <Image
                            source={{ uri: item.img }}
                            style={{
                                height: 120,
                                resizeMode: 'contain'
                            }} />
                        <View style={{ paddingHorizontal: 10, gap: 3 }}>
                            <Text style={{ fontSize: 18, fontWeight: "600" }}>{item.name.charAt(0).toUpperCase() + item.name.slice(1)}</Text>
                            <Text style={{ color: 'grey' }}>{item.pieces} Prices</Text>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 10 }}>
                                <Text style={{ fontSize: 20, fontWeight: '500' }}>₹ {item.price}</Text>
                                <Icon name="plus-square" size={30} color={myColors.primary} />
                            </View>
                        </View>
                    </TouchableOpacity>
                )} />
        </View>
    )
}

export default ProductsCarosual

const styles = StyleSheet.create({})
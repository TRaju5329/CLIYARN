import { StyleSheet, Text, View, SafeAreaView, StatusBar, Image, FlatList } from 'react-native'
import React from 'react'
import { myColors } from '../Utils/myColors'
import Icon from 'react-native-vector-icons/FontAwesome'
import { useSelector, useDispatch } from "react-redux/es/exports";
import { removeFromCart } from '../../Redux/CartSlice'

const Cart = () => {

    const dispatch = useDispatch();
    const storeData = useSelector((state) => state.CartSlice);

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: myColors.white, paddingHorizontal: 15, gap: 20, paddingTop: 10 }}>
            <StatusBar backgroundColor="#FFFFFF" barStyle="dark-content" />
            <Text style={{ textAlign: 'center', fontSize: 24, fontWeight: "600", color: myColors.black }}>My Cart</Text>

            <FlatList data={storeData} renderItem={({ item, index }) => (


                <View style={{ height: "17%", borderBottomColor: "#e3e3e3", borderBottomWidth: 2, flexDirection: 'row' }}>
                    <View style={{ flex: 0.3, justifyContent: "center", alignItems: "center" }}>
                        <Image
                            style={{
                                height: 100,
                                width: 100,
                                resizeMode: 'contain'
                            }}

                            source={{
                                uri: item.img
                            }} />
                    </View>
                    <View style={{ flex: 0.7, paddingHorizontal: 10, paddingVertical: 20 }}>
                        <View style={{ flexDirection: 'row', alignContent: "center", justifyContent: 'space-between', alignItems: "center" }}>
                            <Text style={{ fontSize: 20, fontWeight: "600" }}>{item.name}</Text>
                            <Icon
                                name="remove"
                                size={25}
                                color="grey"
                                onPress={() => {
                                    dispatch(removeFromCart())
                                }}
                            />
                        </View>
                        <View>
                            <Text style={{ fontSize: 17, color: "grey", marginTop: 5 }}>{item.pieces}</Text>
                        </View>
                        <View style={{ flexDirection: "row", justifyContent: 'space-between', alignContent: "center", paddingTop: 20 }}>
                            <View style={{ flexDirection: "row", gap: 10, alignItems: "center" }}>
                                <Icon name="minus-square" size={26} color={myColors.primary} />
                                <Text style={{ fontSize: 17, }}>20</Text>
                                <Icon name="plus-square" size={26} color={myColors.primary} />
                            </View>
                            <View>
                                <Text style={{ fontSize: 19, fontWeight: "600", color: myColors.black }}>{item.price}</Text>
                            </View>
                        </View>

                    </View>
                </View>
            )} />

        </SafeAreaView>
    )
}

export default Cart

const styles = StyleSheet.create({})
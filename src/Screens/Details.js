import { StyleSheet, Text, View, Image, StatusBar, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/FontAwesome'
import { useNavigation } from '@react-navigation/native';
import { myColors } from '../Utils/myColors';
import DropBox from '../Components/DropBox';
import { useDispatch } from 'react-redux/es/hooks/useDispatch';
import { addToCart, removeFromCart } from '../../Redux/CartSlice';


const Details = ({ route }) => {


    const dispatch = useDispatch();
    const productData = route.params.main;
    const { name, price, pieces, img } = productData;
    const nav = useNavigation()
    return (
        <SafeAreaView style={{ flex: 1, gap: 20, backgroundColor: myColors.white }}>
            <StatusBar backgroundColor="#FFFFFF" barStyle="dark-content" />
            <Image
                resizeMode='contain'
                source={{
                    uri: img,
                }}
                style={{ height: 300, borderBottomLeftRadius: 15, borderBottomRightRadius: 15 }} />
            <View style={{
                flexDirection: "row",
                justifyContent: 'space-between',
                alignItems: 'center',
                position: 'absolute',
                width: '100%',
                paddingHorizontal: 10
            }}>
                <Icon
                    onPress={() => {
                        nav.goBack();
                    }}
                    name="backward" size={24} color="black" />
                <Icon name="share" size={24} color="black" />
            </View>
            <View style={{ paddingHorizontal: 15, backgroundColor: myColors.white, flex: 1 }}>
                <View style={{ flexDirection: 'row', justifyContent: "space-between", alignItems: 'center' }}>
                    <Text style={{ fontSize: 25, fontWeight: '600', color: myColors.black, }}>{name.charAt(0).toUpperCase() + name.slice(1)}</Text>
                    <Icon name="heart-o" size={24} color="black" />
                </View>
                <Text style={{ marginTop: 5, fontSize: 15, color: "grey" }}>{pieces}price</Text>
                <Text style={{ marginTop: 5, fontSize: 25, color: myColors.black, fontWeight: '600' }}>${price}</Text>

                <DropBox />

                <View
                    style={{
                        flex: 0.9,
                        justifyContent: 'flex-end'
                    }}>
                    <TouchableOpacity
                        onPress={() => {
                            dispatch(addToCart(productData))
                            nav.navigate('Cart');
                        }}
                        activeOpacity={0.8}
                        style={{
                            backgroundColor: myColors.primary,
                            borderRadius: 10,
                            height: 70,
                            justifyContent: "center",
                            alignItems: "center",

                        }}>
                        <Text style={{ fontSize: 18, color: myColors.white, fontWeight: "600" }}>Add to Basket</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default Details

const styles = StyleSheet.create({})
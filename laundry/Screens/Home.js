import { StyleSheet, Text, View, ScrollView, Pressable,StatusBar } from 'react-native'
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SafeAreaView } from 'react-native-safe-area-context'
import LocationCont from '../Components/LocationCont'
import Seachbar from '../Components/Seachbar'
import Carousel from '../Components/Carousel'
import Services from '../Components/Services'
import DressItem from '../Components/DressItem'
import { useNavigation } from '@react-navigation/native';
import { getProducts } from '../ProductReducer';



const Home = () => {

  const cart = useSelector((state) => state.cart.cart);
  const [items, setItems] = useState([]);
  const total = cart.map((item) => item.quantity * item.price).reduce((curr, prev) => curr + prev, 0);
  const navigation = useNavigation();



  const product = useSelector((state) => state.product.product);
  const dispatch = useDispatch();
  useEffect(() => {
    if (product.length > 0) return;

    const fetchProducts = () => {
      services.map((service) => dispatch(getProducts(service)))
    };
    fetchProducts();
  }, []);
  console.log(product);

  const services = [
    {
      id: "0",
      image: "https://cdn-icons-png.flaticon.com/128/4643/4643574.png",
      name: "shirt",
      quantity: 0,
      price: 10,
    },
    {
      id: "11",
      image: "https://cdn-icons-png.flaticon.com/128/892/892458.png",
      name: "T-shirt",
      quantity: 0,
      price: 10,
    },
    {
      id: "12",
      image: "https://cdn-icons-png.flaticon.com/128/9609/9609161.png",
      name: "dresses",
      quantity: 0,
      price: 10,
    },
    {
      id: "13",
      image: "https://cdn-icons-png.flaticon.com/128/599/599388.png",
      name: "jeans",
      quantity: 0,
      price: 10,
    },
    {
      id: "14",
      image: "https://cdn-icons-png.flaticon.com/128/9431/9431166.png",
      name: "Sweater",
      quantity: 0,
      price: 10,
    },
    {
      id: "15",
      image: "https://cdn-icons-png.flaticon.com/128/3345/3345397.png",
      name: "shorts",
      quantity: 0,
      price: 10,
    },
    {
      id: "16",
      image: "https://cdn-icons-png.flaticon.com/128/293/293241.png",
      name: "Sleeveless",
      quantity: 0,
      price: 10,
    },
  ];
  return (
    <>
      <SafeAreaView style={{ flex: 1, backgroundColor: "#d5e1f5" }}>
      <StatusBar barStyle="dark-content" backgroundColor="#d5e1f5" />
        <ScrollView>
          <LocationCont />
          <Seachbar />
          <Carousel />
          <Services />

          {/* Render all the Products */}
          {product.map((item, index) => (
            <DressItem item={item} key={index} />
          ))}
        </ScrollView>
      </SafeAreaView>

      {total === 0 ? (
        null
      ) : (
        <Pressable
          style={{
            backgroundColor: "#088F8F",
            padding: 10,
            marginBottom: 20,
            margin: 15,
            borderRadius: 7,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <View>
            <Text style={{ fontSize: 17, fontWeight: "500", color: "#fff" }}>{cart.length} items |  $ {total}</Text>
            <Text style={{ fontSize: 14, fontWeight: "400", color: "#fff", marginVertical: 6 }}>extra charges might apply</Text>
          </View>

          <Pressable onPress={() => navigation.navigate("PickUpScreen")}>
            <Text style={{ fontSize: 17, fontWeight: "500", color: "#fff" }}>Proceed to pickup</Text>
          </Pressable>
        </Pressable>
      )}

    </>
  )
}

export default Home

const styles = StyleSheet.create({})
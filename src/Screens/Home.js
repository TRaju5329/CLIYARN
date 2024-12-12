import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Homeicon from '../Components/Homeicon'
import HomeSearch from '../Components/HomeSearch'
import HomeBanner from '../Components/HomeBanner'
import Productstitle from '../Components/Productstitle'
import ProductsCarosual from '../Components/ProductsCarosual'
import { myColors } from '../Utils/myColors'
import { fruits, vegetable } from '../Utils/data'

const Home = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: myColors.white }}>
      <ScrollView
      showsVerticalScrollIndicator={false}
      style={{
        flex:1,
        paddingHorizontal: 20,
        paddingTop: 10,
      }}>
        <View style={{ gap: 20, paddingBottom: 10}}>
          <Homeicon />
          <HomeSearch />
          <HomeBanner />
          <Productstitle title='Exclusive Offer' />
          <ProductsCarosual data={fruits}/>
          <Productstitle title='Best Selling' />
          <ProductsCarosual data={vegetable}/>
         
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({})
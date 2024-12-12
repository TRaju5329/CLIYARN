import { StyleSheet } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Screens/Home';
import PickUpScreen from './Screens/PickUpScreen';
import ProceedcartScreen from './Screens/ProceedcartScreen';
import PlaceOrderScreen from './Screens/PlaceOrderScreen';


const StackNavigator = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='Home'
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="PickUpScreen" component={PickUpScreen} />
        <Stack.Screen name="ProceedcardScreen" component={ProceedcartScreen} />
        <Stack.Screen name="PlaceOrderScreen" component={PlaceOrderScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default StackNavigator

const styles = StyleSheet.create({})
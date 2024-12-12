import { StyleSheet,StatusBar } from 'react-native'
import React from 'react'
import { Provider } from 'react-redux';
import store from './store';
import StackNavigator from './StackNavigator';

const App = () => {
  return (
    <Provider store={store}>
      <StackNavigator/>
      <StatusBar style="auto" />
    </Provider>
  )
}

export default App

const styles = StyleSheet.create({})
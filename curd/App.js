import { View, Text, StatusBar } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/Home';
import AddTodo from './screens/AddTodo';
import { Wrapper } from './Wrapper';

const Stack = createNativeStackNavigator();
const App = () => {
    return (
        <Wrapper>
            <NavigationContainer>
                <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />
                <Stack.Navigator
                    initialRouteName='Home'
                    screenOptions={{
                        headerShown: false,
                    }}>
                    <Stack.Screen name="Home" component={Home} />
                    <Stack.Screen name="AddTodo" component={AddTodo} />
                </Stack.Navigator>
            </NavigationContainer>
        </Wrapper>
    )
}

export default App
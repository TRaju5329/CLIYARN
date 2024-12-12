import { View, Text, StatusBar } from 'react-native'
import React from 'react'
import DropdownComponent from './Screeens/DropdownComponent'
import DropdownIcon from './Screeens/DropdownIcon'
import MultiSelectComponent from './Screeens/MultiSelectComponent'
import MultiSelectIcon from './Screeens/MultiSelectIcon'
import SelectCountryScreen from './Screeens/SelectCountryScreen'
import SelectCountryIcon from './Screeens/SelectCountryIcon'
import DemoCalend from './Screeens/DemoCalend'
import AgendaScreen from './Screeens/AgendaScreen'
import Schedule from './Screeens/Schedule'
import Canlendarkit from './Screeens/Canlendarkit'



const App = () => {
    return (
        <>
            <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />
            {/*<DropdownComponent />
            <DropdownIcon/>
            <MultiSelectComponent />
            <MultiSelectIcon/>
            <SelectCountryScreen/>
            <SelectCountryIcon/> 
            <DemoCalend/>
            <AgendaScreen/>
            <Schedule/>*/}
            <Canlendarkit/>
        </>
    )
}

export default App
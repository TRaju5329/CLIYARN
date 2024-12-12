import { StyleSheet, Text, View } from 'react-native'
import React, { useState,useMemo } from 'react';
import { Calendar, LocaleConfig } from 'react-native-calendars';

const CalendarCm = (props) => {
    const [selected, setSelected] = useState('');
    const marked = useMemo(() => ({
    [selected]: {
      customStyles: {
        container: {
          backgroundColor: 'green',
          borderRadius: 50,
        },
        text: {
          color: 'white',
        }
      }
    }
  }), [selected]);

    return (
        <Calendar

            style={{
                borderWidth: 0,
                height: 100
            }}
           

           

            initialDate="2024-02-02"
            markingType="custom"
            markedDates = {marked}
            onDayPress={(day) => {
                setSelected(day.dateString);
                props.onDaySelect && props.onDaySelect(day);
            }}
            {...props}


        />
    )
}


const AgendaScreen = () => {
    return (
        <View>
            <CalendarCm onDaySelect={(day) => console.log(`Date selected: ${day.dateString}`)}/>
        </View>
    )
}

export default AgendaScreen

const styles = StyleSheet.create({})
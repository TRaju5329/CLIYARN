import React, { useState } from 'react';
import { Calendar, LocaleConfig } from 'react-native-calendars';

const DemoCalend = () => {
    const [selected, setSelected] = useState('');

    return (
        <Calendar

            style={{
                borderWidth: 0,
                height: 100
            }}
            onDayPress={day => {
                setSelected(day.dateString);
                console.log('selected day', day);
            }}

            markedDates={{
                //'2024-02-01': {selected: true, marked: true, selectedColor: 'blue'},
                //'2024-02-02': {marked: true},
                //'2024-02-03': {selected: true, marked: true, selectedColor: 'blue'}

                [selected]: {selected: true, disableTouchEvent: true, selectedDotColor: 'orange'}
              }}
              
            
        />
    );
};

export default DemoCalend;
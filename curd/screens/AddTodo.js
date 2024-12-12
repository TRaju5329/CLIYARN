import { View, Text, SafeAreaView, TextInput, TouchableOpacity, Keyboard, Alert } from 'react-native'
import React, { useContext, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { Store } from '../Wrapper'
import COLORS from '../const/color'

const AddTodo = ({ route }) => {
  const receivedData = route.params?.item;
  console.log(receivedData, "i am receivedData")
  const { todo, setTodo } = useContext(Store);

  const nav = useNavigation();
  const [inputData, setinputData] = useState(receivedData && receivedData);



  handleSubmit = () => {
    if (inputData) {
      setTodo([...todo, inputData]);
      setinputData("");
      Keyboard.dismiss();
      nav.goBack();
    } else {
      Alert.alert("Please fill the todo")
    }
  }

  const handleUpadate = () => {
    const duplicateStore = [...todo];
    const receivedDataIndex = todo.findIndex((value) => value === receivedData);
    duplicateStore[receivedDataIndex] = inputData;
    setTodo(duplicateStore);
    Keyboard.dismiss();
    nav.goBack();
  };

  return (
    <SafeAreaView style={{ gap: 10, flex: 1, paddingHorizontal: 20, paddingTop: 20, backgroundColor: "#ffffff" }}>
      <Text style={{ fontSize: 24, fontWeight: "500", textAlign: "center", color: COLORS.black }}>ADD YOUR TODO NOW</Text>

      <View style={{ gap: 20, flex: 0.7, justifyContent: "center" }}>
        <Text style={{ fontSize: 15, fontWeight: '400', color: COLORS.black }}>ENTER YOUR TASK</Text>
        <TextInput placeholder='ENTER TODO HERE..' style={{ borderWidth: 0.9, borderColor: COLORS.black, borderRadius: 5 }} selectionColor={COLORS.black}
          value={inputData}
          onChangeText={(value) => {
            setinputData(value);
          }}
        />
        <TouchableOpacity activeOpacity={0.8} style={{ height: 55, backgroundColor: COLORS.black, justifyContent: 'center', alignItems: 'center', borderRadius:5 }}
          onPress={() => {
            receivedData ? handleUpadate() : handleSubmit()
          }}
        >
          <Text style={{ fontSize: 20, fontWeight: "500", color: "#fff" }}>
            {receivedData ? 'UPDATE TODO' : "SUBMIT TODO"}
          </Text>
        </TouchableOpacity>
      </View>

    </SafeAreaView>
  )
}

export default AddTodo
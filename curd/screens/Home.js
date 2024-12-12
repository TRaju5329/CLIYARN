import { View, Text, StatusBar, SafeAreaView, TouchableOpacity, Alert, FlatList } from 'react-native'
import React, { useContext } from 'react'
import { useNavigation } from '@react-navigation/native'
import { Store } from '../Wrapper'
import Icon from 'react-native-vector-icons/AntDesign'
import COLORS from '../const/color'

const Home = () => {
  const nav = useNavigation();
  const { todo, setTodo } = useContext(Store);
  console.log(todo)


  const handleDelete = (item) => {
    setTodo(todo.filter((value, index) => value != item))
  };
  return (
    <SafeAreaView style={{ flex: 1, paddingHorizontal: 10, backgroundColor: "#ffffff", paddingTop: 20 }}>
      <Text style={{ fontSize: 24, fontWeight: "500", textAlign: "center", color: COLORS.black }}>YOUR TODO HERE</Text>

      <View style={{ flex: 0.98, }}>
        <FlatList
          style={{ marginTop: 20 }}
          data={todo}
          renderItem={({ item, index }) => (
            <TouchableOpacity style={{ backgroundColor: COLORS.black, marginBottom: 10, height: 50, justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center', paddingHorizontal: 15, borderRadius: 5 }}
              onPress={() => {
                nav.navigate("AddTodo", { item })
              }}
            >
              <Text style={{ color: "#fff", fontSize: 24 }}>{item}</Text>
              <Icon name="delete" size={24} color="#fff"
                onPress={() => {
                  handleDelete(item)
                }}
              />
            </TouchableOpacity>
          )}
        />
      </View>
      <TouchableOpacity activeOpacity={0.8} style={{ height: 55, backgroundColor: COLORS.black, justifyContent: 'center', alignItems: 'center',borderRadius:5 }}
        onPress={() => {
          nav.navigate("AddTodo")
        }}
      >
        <Text style={{ fontSize: 20, fontWeight: "500", color: "#fff" }}>ADD TODO'S</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

export default Home
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  Pressable,
  ScrollView,
  Alert,
  StatusBar
} from "react-native";
import React, { useState } from "react";
import HorizontalDatepicker from "@awrminkhodaei/react-native-horizontal-datepicker";
import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";


const PickUpScreen = () => {

  const [selectedDate, setSelectedDate] = useState("");

  const cart = useSelector((state) => state.cart.cart);
  const total = cart
    .map((item) => item.quantity * item.price)
    .reduce((curr, prev) => curr + prev, 0);
  const [selectedTime, setSelectedTime] = useState([]);
  const [delivery, setDelivery] = useState([]);
  const deliveryTime = [
    {
      id: "0",
      name: "2-3 Days",
    },
    {
      id: "1",
      name: "3-4 Days",
    },
    {
      id: "2",
      name: "4-5 Days",
    },
    {
      id: "3",
      name: "5-6 Days",
    },
    {
      id: "4",
      name: "Tommorrow",
    },
  ];

  const times = [
    {
      id: "0",
      time: "9:00 AM",
    },
    {
      id: "1",
      time: "10:00 AM",
    },
    {
      id: "2",
      time: "11:00 AM",
    },
    {
      id: "2",
      time: "6:00 PM",
    },
    {
      id: "4",
      time: "7:00 PM",
    },
    {
      id: "5",
      time: "8:00 PM",
    },
  ];
  const navigation = useNavigation();

  const proceedToCart = () => {
    if (!selectedDate || !selectedTime || !delivery) {
      Alert.alert(
        "Empty or invalid",
        "Please select all the fields",
        [
          {
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel"
          },
          { text: "OK", onPress: () => console.log("OK Pressed") }
        ],
        { cancelable: false }
      );
    }
    if (selectedDate && selectedTime && delivery) {
      navigation.replace("ProceedcardScreen", {
        pickUpDate: selectedDate,
        selectedTime: selectedTime,
        no_Of_days: delivery,

      })
    }
  }

  return (
    <>
      <SafeAreaView style={{ marginTop: 10, }}>
        <StatusBar barStyle="dark-content" backgroundColor="#f2f5f4" />
        <Text style={{ fontSize: 16, fontWeight: "500", color: "#000", marginHorizontal: 10 }}>
          enter Address
        </Text>
        <TextInput
          style={{
            padding: 40,
            borderColor: "#000",
            borderWidth: 0.7,
            paddingVertical: 80,
            borderRadius: 9,
            margin: 10,
          }}
        />

        <Text style={{ fontSize: 16, fontWeight: "500", color: "#000", marginHorizontal: 10 }}>
          Pick Up Date
        </Text>
        <HorizontalDatepicker
          mode="gregorian"
          startDate={new Date("2023-02-21")}
          endDate={new Date("2023-02-28")}
          initialSelectedDate={new Date("2020-08-22")}
          onSelectedDateChange={(date) => setSelectedDate(date)}
          selectedItemWidth={170}
          unselectedItemWidth={38}
          itemHeight={38}
          itemRadius={10}
          selectedItemTextStyle={styles.selectedItemTextStyle}
          unselectedItemTextStyle={styles.selectedItemTextStyle}
          selectedItemBackgroundColor="#222831"
          unselectedItemBackgroundColor="#ececec"
          flatListContainerStyle={styles.flatListContainerStyle}
        />

        <Text style={{ fontSize: 16, fontWeight: "500", color: "#000", marginHorizontal: 10 }}>
          Select Time
        </Text>

        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {times.map((item, index) => (
            <Pressable
              key={index}
              onPress={() => setSelectedTime(item.time)}
              style={
                selectedTime.includes(item.time)
                  ? {
                    margin: 10,
                    borderRadius: 7,
                    padding: 15,
                    borderColor: "#088F8F",
                    borderWidth: 1,
                  }
                  : {
                    margin: 10,
                    borderRadius: 7,
                    padding: 15,
                    borderColor: "#000",
                    borderWidth: 1,
                  }
              }
            >
              <Text style={{ fontSize: 13, fontWeight: "400", color: "#000" }}>{item.time}</Text>
            </Pressable>
          ))}
        </ScrollView>
        <Text style={{ fontSize: 16, fontWeight: "500", color: "#000", marginHorizontal: 10 }}>
          Delivery Date
        </Text>

        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {deliveryTime.map((item, i) => (
            <Pressable
              style={
                delivery.includes(item.name)
                  ? {
                    margin: 10,
                    borderRadius: 7,
                    padding: 15,
                    borderColor: "#088F8F",
                    borderWidth: 1,
                  }
                  : {
                    margin: 10,
                    borderRadius: 7,
                    padding: 15,
                    borderColor: "#000",
                    borderWidth: 1,
                  }
              }
              onPress={() => setDelivery(item.name)}
              key={i}
            >
              <Text style={{ fontSize: 13, fontWeight: "400", color: "#000" }}>{item.name}</Text>
            </Pressable>
          ))}
        </ScrollView>
      </SafeAreaView>

      {total === 0 ? null : (
        <Pressable
          style={{
            backgroundColor: "#088F8F",
            marginTop: "auto",
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
            <Text style={{ fontSize: 17, fontWeight: "500", color: "#fff" }}>
              {cart.length} items | $ {total}
            </Text>
            <Text style={{ fontSize: 14, fontWeight: "400", color: "#fff", marginVertical: 6 }}>
              extra charges might apply
            </Text>
          </View>

          <Pressable onPress={proceedToCart}>
            <Text style={{ fontSize: 17, fontWeight: "500", color: "#fff" }}>
              Proceed to Cart
            </Text>
          </Pressable>
        </Pressable>
      )}
    </>
  );
};

export default PickUpScreen;

const styles = StyleSheet.create({});

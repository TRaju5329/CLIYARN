import { View, Text, Switch, SafeAreaView, StatusBar, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

const App = () => {
  const [darkTheme, setdarkTheme] = useState(false);
  const [result, setResult] = useState("");

  const getColor = (light, dark) => darkTheme ? dark : light;
  const colors = {
    dark: '#222831',
    light: '#F9F9F9',
  }

  const Btn = ({ title, type }) => {
    return (
      <TouchableOpacity style={{ padding: 10, borderRadius: 50, elevation: 2, backgroundColor: getColor(colors.light, colors.dark), height: 70, width: 70, margin: 15, }}
        onPress={() => Calculator(title)}
      >
        <Text style={{ fontSize: 28, marginTop: 5, alignSelf: 'center', color: getBtnColor(type) }}>{title}</Text>
      </TouchableOpacity>
    );
  };

  const getBtnColor = (type) => {
    if (type == "Top") {
      return '#631ab8';
    } else if (type == "Right") {
      return '#EB6363'
    } else {
      return getColor(colors.dark, colors.light)
    }
  }

  const Calculator = (title) => {
    if (title == "C") {
      setResult('');
    } else if (title == "DL") {
      setResult(result.substring(0, result.length - 1));
    } else if (title == "=") {
      const ans = Number(eval(result).toFixed(3)).toString()
      setResult(ans);
    } else {
      setResult(result + title)
    }
  }


  return (
    <SafeAreaView style={{ flex: 1, paddingVertical: 10, alignItems: 'center', backgroundColor: darkTheme ? colors.dark : colors.light }}>
      <StatusBar barStyle={darkTheme ? "light-content" : "dark-content"} backgroundColor={darkTheme ? colors.dark : colors.light} />
      <Switch value={darkTheme}
        onValueChange={() =>
          setdarkTheme(!darkTheme)
        }
        thumbColor={darkTheme ? colors.light : colors.dark}
        trackColor={{ true: colors.light, false: colors.dark }}
      />
      <View style={{ marginTop: 50, flex: 0.2, }}>
        <Text style={{ color: getColor(colors.dark, colors.light), fontSize: 35 }}>{result}</Text>
      </View>
      <View style={{ flex: 0.8, flexDirection: "row", flexWrap: "wrap", justifyContent: "center", backgroundColor: getColor(colors.light, colors.dark), borderTopRightRadius: 20, borderTopLeftRadius: 20 }}>
        <Btn title="C" type="Top" />
        <Btn title="DL" type="Top" />
        <Btn title="/" type="Top" />
        <Btn title="%" type="Top" />
        <Btn title="7" type="Number" />
        <Btn title="8" type="Number" />
        <Btn title="9" type="Number" />
        <Btn title="*" type="Right" />
        <Btn title="4" type="Number" />
        <Btn title="5" type="Number" />
        <Btn title="6" type="Number" />
        <Btn title="-" type="Right" />
        <Btn title="1" type="Number" />
        <Btn title="2" type="Number" />
        <Btn title="3" type="Number" />
        <Btn title="+" type="Right" />
        <Btn title="00" type="Number" />
        <Btn title="0" type="Number" />
        <Btn title="." type="Number" />
        <Btn title="=" type="Right" />
      </View>
    </SafeAreaView>
  )
}

export default App
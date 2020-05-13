// App.js
import React, { Component } from "react";
import { StyleSheet } from "react-native";
import SwitchNavigator from "./navigation/SwitchNavigator";

export default class App extends Component {
  render() {
    return <SwitchNavigator />;

    //(
    // <View style={styles.container}>
    //  <StatusBar backgroundColor="#fff" barStyle="dark-content" />
    //  <Routes />
    // </View>
    //);
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

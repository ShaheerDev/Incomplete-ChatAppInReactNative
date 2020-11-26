/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import firebase from 'firebase'
import { Platform, StyleSheet, Text, View, TextInput, Button, Alert, Linking } from "react-native";

export default class SignUp extends Component {

  constructor(props) {
      super(props)
      this.state = {
        Email: '',
        Password: '',
      }
  }

  signupfunc = () =>{
      const { Email }  = this.state ;
      const { Password } = this.state ;
      firebase.auth().createUserWithEmailAndPassword(Email, Password)
      .then((user) => {
      // Signed in
      alert("You are now Signed-Up!")
      Linking.openURL('/')
      })
      .catch((error) => {
       var errorCode = error.code;
       var errorMessage = error.message;
       alert(errorMessage)
      });
      }

      gotologin = () => {
        window.location = '/'
      }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.headerText}>
         Sign-Up
        </Text>

        <TextInput
          style={{height: 45,width: "95%",borderColor: "gray",borderWidth: 2}}
          // Adding hint in TextInput using Placeholder option.
          placeholder=" Enter Email Address"
          //set the value in state.
          onChangeText={Email => this.setState({Email})}
          // Making the Under line Transparent.
          underlineColorAndroid="transparent"
        />

        <TextInput
          style={{height: 45,width: "95%",borderColor: "gray",borderWidth: 2}}
          // Adding hint in TextInput using Placeholder option.
          placeholder=" Enter Password"
          //set the value in state.
          onChangeText={Password => this.setState({Password})}
          // Making the Under line Transparent.
          underlineColorAndroid="transparent"
        />

        <View style={[{ width: "93%", margin: 15, backgroundColor: "red" }]}>
          <Button
          onPress={this.signupfunc}
          title="Login"
          color="#00B0FF"
          />
          <Button title="Already Signed-Up? Login." onPress={this.gotologin} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#e5e5e5"
  },
  headerText: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
    fontWeight: "bold"
  }
});
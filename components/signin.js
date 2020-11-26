import React from "react";
import firebase from 'firebase'
import { Platform, StyleSheet, Text, View, TextInput, Button, Alert, Linking } from "react-native";

export default class SignIn extends React.Component {

  constructor(props) {
      super(props)
      this.state = {
        Email: '',
        Password: '',
      }
  }

  signinfunc = () =>{
      const { Email }  = this.state ;
      const { Password } = this.state ;
      firebase.auth().signInWithEmailAndPassword(Email, Password)
      .then((user) => {
      // Signed in
      Linking.openURL('/chatroom' + '?' + this.state.Email)
      })
      .catch((error) => {
       var errorCode = error.code;
       var errorMessage = error.message;
       alert(errorMessage)
      });
      }
  
  gotosignup = () => {
    window.location = '/signup'
  }


  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.headerText}>
         Sign-In
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
          onPress={this.signinfunc}
          title="Login"
          color="#00B0FF"
          />
          <Button title="Don't Have an Account? Signup." onPress={this.gotosignup} />
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
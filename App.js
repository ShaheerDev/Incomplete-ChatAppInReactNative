import { StatusBar } from 'expo-status-bar'; 
import * as firebase from 'firebase'  
import {auth, database} from 'firebase'
const firebaseConfig = {
  apiKey: "AIzaSyBQ2kIjoOeDJ9cpn7IOrEjn1TlscwSrfWs",
  authDomain: "react-native-challenge-chat.firebaseapp.com",
  databaseURL: "https://react-native-challenge-chat.firebaseio.com",
  projectId: "react-native-challenge-chat",
  storageBucket: "react-native-challenge-chat.appspot.com",
  messagingSenderId: "271191896139",
  appId: "1:271191896139:web:c6fc94836ad3bf115a9dce",
  measurementId: "G-DJQ9956066"
};
firebase.initializeApp(firebaseConfig);

import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import { StyleSheet, Text, View, Button, TextInput, Linking } from 'react-native';
import Signin from './components/signin'
import Signup from './components/signup'
import Chatroom from './components/chatroom'


export default function App() {
  return (<>
      <Router>
        <Route exact path='/' component={Signin} />
        <Route exact path='/signup' component={Signup} />
        <Route exact path='/chatroom' component={Chatroom} />

      </Router>
  </>);
}

const styles = StyleSheet.create({
});

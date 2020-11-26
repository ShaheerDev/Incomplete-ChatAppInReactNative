import { StatusBar } from 'expo-status-bar';
import React from 'react';
import firebase from 'firebase'
import { ActivityIndicatorComponent, StyleSheet, Text, View, TextInput, Button } from 'react-native';
import Drawer from './drawer' 
import HTML from 'react-native-render-html'

export default class Chatroom extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      UEmail: '',
      DefaultText: 'No contact has been selected.',
      messagebox: '',
    }
}

  visiblechat = () => {
    this.setState({DefaultText: "Contact has been selected."})
  }
 

  chatfunc = () => {
   var email = this.state.UEmail
   var emailurl = window.location.href;
   var useremailid = emailurl.substring(emailurl.indexOf("?") + 1);
   firebase.auth().fetchSignInMethodsForEmail(email)
   .then(providers => {
  if (providers.length === 0) {
    alert("This email ID doesn't exist. Enter a different Email address")
  }else if(email === useremailid){
   alert("You can't message yourself. Enter a different Email address")
  }else {
    this.visiblechat()
  }
});
  }

  sendMessage = () => {
    var emailurl = window.location.href;
    var useremailid = emailurl.substring(emailurl.indexOf("?") + 1); //User display name
    var message;  //User message
    firebase.database().ref("messages").push().set({ //Save user name and message in reference "messages" in firebase database
        "sender": useremailid,
        "message": message
    });
    return false;
}

  render() {

    var emailurl = window.location.href;
    var useremailid = emailurl.substring(emailurl.indexOf("?") + 1);

    var chatcontainer = {
      position: "relative",
      top: 130,
      left: 8, 
    }

    startchat = () => {
      const hcontent = 
      <li>{this.state.messagebox}</li>;
      document.getElementById("messageboxul").appendChild(hcontent)
    }

  return (<>
  <Drawer />
  <Text>Your Email: {useremailid}</Text>
  <Text style={{fontWeight: "bold",fontSize: 20, position: "relative", top: 20}}>ENTER THE EMAIL OF WHO YOU WANT TO TALK TO:</Text>
  <View style={{position: "absolute", top: 115, width: "100%"}}>
  <TextInput
          style={{height: 45,width: "100%",borderColor: "gray",borderWidth: 2}}
          placeholder=" Enter Email..."
          onChangeText={UEmail => this.setState({UEmail})}
          underlineColorAndroid="transparent"
        />
        <Button
          onPress={this.chatfunc}
          title="Login"
          color="#00B0FF"
        />
        </View>

        <View style={chatcontainer}>
        <Text style={{fontWeight:"bold", position:"relative",top:1}}>{this.state.DefaultText}</Text>
        <View style={{position: "relative", top:12}}>
        <ul id="messageboxul">
         <li>hahah</li>
        </ul>
        <div style={{position: "sticky", top: 240,height: 60, width: "100%"}}>
        <TextInput style={{position: "relative", width: "100%", height: "100%"}} placeholder="Enter your message"
        onChangeText={messagebox => this.setState({messagebox})}
        />
        <button style={{position: "relative", width: 243}} onClick={this.startchat}>Send Message</button>
        </div>
        </View>
        </View>
</>);
  }
}

const styles = StyleSheet.create({

});

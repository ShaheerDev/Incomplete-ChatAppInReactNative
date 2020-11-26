import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, } from 'react-native';

export default function Drawer() {
  return (<View>
   <View style={styles.headera}>
       <Text style={{fontFamily: "sans-serif", color: "green"}}>                                MESSENGER APP                                                   </Text>
   </View>
  </View>);
}

const styles = StyleSheet.create({
   headera: {
       backgroundColor: "green"
   },
});

import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Colors from '../../utils/Colors'

export default function Login() {
  return (
    <View style={styles.maindiv}>
      <Text>Login</Text>
    </View>
  )
}

const styles = StyleSheet.create({
   maindiv:{
    backgroundColor:Colors.tabbarbg,
    width:380,
    height:50,
    alignSelf:'center',
    marginTop:15,
    borderRadius:2,
    alignItems:'flex-end',
    padding:14   //to align the text "login"
   }

})
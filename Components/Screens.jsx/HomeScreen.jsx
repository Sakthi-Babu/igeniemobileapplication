import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import Header from '../HomeScreencomps/Header'
import { SafeAreaView } from 'react-native-safe-area-context'
import Login from '../HomeScreencomps/Login'
import Latestitems from '../HomeScreencomps/LatestProducts'
import Colors from '../../utils/Colors'
import MostViewed from '../HomeScreencomps/MostViewed'

export default function HomeScreen() {
  return (
   <SafeAreaView style={styles.wholediv}>
    <Header />
    <Login />
    <Latestitems />
    <MostViewed />
   </SafeAreaView>
  )
}
const styles = StyleSheet.create({
    wholediv:{
        backgroundColor:Colors.white,
        display:'flex',
        flexDirection:'column'
    }
})
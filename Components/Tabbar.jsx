import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './Screens.jsx/HomeScreen';
import MessageScreen from './Screens.jsx/MessageScreen';
import MenuScreen from './Screens.jsx/MenuScreen';
import CategoryScreen from './Screens.jsx/CategoryScreen';
import MyaccountScreen from './Screens.jsx/MyaccountScreen';
import { Entypo } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import Colors from '../utils/Colors';
import { MaterialCommunityIcons } from '@expo/vector-icons';



const Tab = createBottomTabNavigator();

export default function Tabbar() {
  return (
    <Tab.Navigator 
    screenOptions={{
        headerShown: false,
        tabBarLabelStyle: {
          fontSize: 12, // Adjust font size of tab labels
        },
        tabBarIconStyle: {
            paddingBottom:1, // Adjust margin bottom of icons if needed
        },
        tabBarItemStyle: {
          justifyContent: 'center', // Center align items in the tab
        },
        tabBarStyle: {
          height: 54, // Adjust height of the tab bar
          padding:5,
          backgroundColor: Colors.tabbarbg, // Change background color of the tab bar
        },
      }}

    
    >
        <Tab.Screen name='Home' component={HomeScreen} 
            options={{
                tabBarLabel:()=>(
                    <Text style={styles.text}>Home</Text>
                ),
                tabBarIcon:()=>(
                    <Entypo name="home" size={24} color="black" />
                )
            }}
        
        />
        <Tab.Screen name='Category' component={CategoryScreen} 
            options={{
                tabBarLabel:()=>(
                    <Text style={styles.text}>Category</Text>
                ),
                tabBarIcon:()=>(
                    <MaterialIcons name="category" size={22} color="black" />
                )
            }}
        
        />
        <Tab.Screen name='Screen' component={MenuScreen} 
        
        options={{
            tabBarLabel:()=>null,
            tabBarIcon:()=>(
                <View style={styles.menuicon}>
                    <Entypo name="menu" size={28} color="black" />
                </View>
               
            ),
            
        }}
        
        />
        <Tab.Screen name='Message' component={MessageScreen} 
        options={{
            tabBarLabel:()=>(
                <Text style={styles.text}>Message'</Text>
            ),
            tabBarIcon:()=>(
                <MaterialIcons name="message" size={22} color="black" />
            )
        }}
        />
        <Tab.Screen name='My account' component={MyaccountScreen} 
         options={{
            tabBarLabel:()=>(
                <Text style={styles.text}>My account</Text>
            ),
            tabBarIcon:()=>(
                <MaterialCommunityIcons name="account" size={22} color="black" />
            )
        }}
        
        />
    </Tab.Navigator>
  )
}

const styles = StyleSheet.create({
    text:{
        fontSize:12,
        paddingBottom:10
        
    },
    menuicon:{
        backgroundColor:Colors.white,
        height:45,
        width:45,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:88
    }
        
    
})
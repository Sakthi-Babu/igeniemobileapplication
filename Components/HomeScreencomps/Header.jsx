import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { AntDesign, FontAwesome } from '@expo/vector-icons';
import { IconSvg } from '../../utils/Icon';
import Colors from '../../utils/Colors';
import { EvilIcons } from '@expo/vector-icons';



const Header = () => {
    return (
      <View style={styles.container}>
        <IconSvg name='Igenie'/>
        <View style={styles.searchBar}>
          <TextInput 
            placeholder='Search'
            placeholderTextColor={Colors.Black}
            style={styles.textInput}
          />
          <FontAwesome name="search" size={20} color={Colors.white} style={styles.searchBtn} />
        </View>
        <EvilIcons name="location" size={24} color="black" />
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      backgroundColor: '#F1EFE7',
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.1,
      shadowRadius: 1,
      elevation: 1,
      padding: 20,
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'space-between',
      gap: 16,
    },
    searchBar: {
      flexDirection: 'row',
      flex: 1,
      marginRight: 10,
    },
    textInput: {
      flex: 1,
      height: 40,
      paddingHorizontal: 10,
      backgroundColor: Colors.white,
      borderRadius: 5,
    },
    searchBtn: {
      padding: 5,
      width: 30,
      height: 30,
      borderRadius: 4,
      backgroundColor: Colors.searchbg,
      position: 'absolute',
      right: 9,
      top: 5,
      
    },
    loginText: {
      fontSize: 16,
      color: 'black',
    },
  });
  
  export default Header;
  
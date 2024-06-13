import { StyleSheet, Text, View, FlatList } from 'react-native';
import React from 'react';
import Comdiv from './Comdiv';


const DATA = [
  {
    id: '1',
    title: 'Latest Products 1',
    images: [
      require('./Images/sampleimage.png'),
      require('./Images/sampleimage1.png'),
    ],
  },
  {
    id: '2',
    title: 'Latest Products 2',
    images: [
      require('./Images/sampleimage.png'),
      require('./Images/sampleimage1.png'),
      require('./Images/sampleimage2.png'),
    ],
  },
  {
    id: '3',
    title: 'Latest Products 3',
    images: [
      require('./Images/sampleimage.png'),
      require('./Images/sampleimage1.png'),
      require('./Images/sampleimage2.png'),
    ],
  },
  {
    id: '4',
    title: 'Latest Products 4',
    images: [
      require('./Images/sampleimage.png'),
      require('./Images/sampleimage1.png'),
      require('./Images/sampleimage2.png'),
    ],
  },
  // Add more data items as needed
];

export default function MostViewed() {
  return (
    <View style={styles.maincontainer}>
      <Text style={styles.Text}>Most Viewed Products</Text>
      <FlatList
        data={DATA}
        renderItem={({ item }) => <Comdiv data={item} />}
        keyExtractor={item => item.id}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        ItemSeparatorComponent={() => <View style={{ width: 30 }} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  maincontainer: {
    display: 'flex',
    width: '100%',
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: 10,
    marginTop:0,
    height: 400,
  },
  Text: {
    color: '#000',
    fontSize: 20,
    fontStyle: 'normal',
    fontWeight: '500',
    marginBottom: 10, // Adjust this value to increase the gap
    marginLeft:10,
    marginTop:10
  },
  flatListContentContainer: {
    paddingHorizontal: 10, // Adjust as needed
    justifyContent: 'space-between',
  },
});

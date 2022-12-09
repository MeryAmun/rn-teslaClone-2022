import { View, Text, ImageBackground } from 'react-native'
import React from 'react';
import styles from './styles';

const CarItem = () => {
  return (
    <View style={styles.carContainer}>

        <ImageBackground source={require('../../assets/assets/images/ModelX.jpeg')}
        style={styles.image}/>
      <View style={styles.titles}>
        <Text style={styles.title}> Model 5</Text>
        <Text style={styles.subtitles}>Starting at $69,420</Text>
      </View>
      </View>
  )
}

export default CarItem
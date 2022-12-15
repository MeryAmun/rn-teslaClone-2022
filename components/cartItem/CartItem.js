import { View, Text, ImageBackground } from 'react-native'
import React from 'react';
import styles from './styles';
import StyleButton from '../styleButton/StyleButton';

const CarItem = () => {
  return (
    <View style={styles.carContainer}>

        <ImageBackground source={require('../../assets/assets/images/ModelX.jpeg')}
        style={styles.image}/>
      <View style={styles.titles}>
        <Text style={styles.title}> Model 5</Text>
        <Text style={styles.subtitles}>Starting at $69,420</Text>
      </View>
      <StyleButton type='primary' 
      content={"Custom Order"} 
      onPress={() => {
        console.warn("Custom Order was pressed")
      }}
      />
      <StyleButton type='secondary'
      content={"Existing Inventory"} 
      onPress={() => {
        console.warn("Existing Inventory was pressed")
      }}/>
      </View>
  )
}

export default CarItem
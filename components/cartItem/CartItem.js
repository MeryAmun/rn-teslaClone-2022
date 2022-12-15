import { View, Text, ImageBackground } from 'react-native'
import React from 'react';
import styles from './styles';
import StyleButton from '../styleButton/StyleButton';

const CarItem = (props) => {
  const {name, tagLine,tagLineCTA, image} = props
  return (
    <View style={styles.carContainer}>

        <ImageBackground source={image}
        style={styles.image}/>
      <View style={styles.titles}>
        <Text style={styles.title}> {name}</Text>
        <Text style={styles.subtitles}>{tagLine}
        {" "}
        <Text style={styles.subtitleCTA}>{tagLineCTA}</Text>
        </Text>
        
      </View>
      <View style={styles.buttonContainer}>
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
      </View>
  )
}

export default CarItem
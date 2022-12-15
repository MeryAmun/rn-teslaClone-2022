import { View, Text } from 'react-native'
import React from 'react'
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import styles from './styles';

const StyleButton = (props) => {
    const type = props.type;
    const backgroundColor = type === 'primary' ? '#171A20CC' : '#FFFFFFA6';
    const textColor = type === 'primary' ? '#FFFFFF' : '#171A20';
  return (
    <View style={styles.container}>
      <Pressable style={[styles.button,{backgroundColor:backgroundColor}]}
      onPress={() => {
        console.warn('Hey there')
      }}
      >
        <Text style={[styles.text, {color: textColor}]}>Custom Order</Text>
      </Pressable>
    </View>
  )
}
export default StyleButton 
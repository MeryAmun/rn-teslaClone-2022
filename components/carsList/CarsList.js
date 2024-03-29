import { View, FlatList, Dimensions } from 'react-native'
import React from 'react'
import styles from './styles'
import cars from '../../assets/assets/cars'
import CarItem from '../cartItem/CartItem'
import useWindowDimensions from 'react-native/Libraries/Utilities/useWindowDimensions'

const CarsList = () => {
  return (
    <View style={styles.container}>
    <FlatList
    data={cars}
    renderItem={
        ({item}) => <CarItem 
       car={item}/>}
       showsVerticalScrollIndicator={false}
    snapToAlignment={'start'}
    decelerationRate={'fast'}
    snapToInterval= {Dimensions.get('window').height}
    />

    </View>
  )
}

export default CarsList
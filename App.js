import { StyleSheet, Text, View, } from 'react-native';
import CarsList from './components/carsList/CarsList';
import Header from './components/header/Header';


export default function App() {
  return (
    <View style={styles.container}>
      <Header/>
    <CarsList/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
});




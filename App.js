import React from 'react';
import { createStackNavigator, createAppContainer} from 'react-navigation';

import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import Place from './components/place';
import PlaceManado from './components/placeManado';


const navigator = createStackNavigator({
  Home: HomeScreen,
  Place: Place,
  PlaceManado: PlaceManado
  // Place2: placeTomohon,
  // Place3: placeBitung
},{
  initialRouteName: 'Home',
  defaultNavigationOptions: {
    headerTitle: 'Sulut Fest',
    headerStyle: {
      backgroundColor: 'grey'
    }
  }
});

export default createAppContainer(navigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

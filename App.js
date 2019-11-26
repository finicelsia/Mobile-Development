import React from 'react';
import { createStackNavigator, createAppContainer} from 'react-navigation';

import { StyleSheet, Text, View } from 'react-native';
import Home from './screens/Home';
import HomeScreen from './screens/HomeScreen';
import Place from './components/place';
import PlaceManado from './components/placeManado';
import PlaceTomohon from './components/placeTomohon';
import PlaceBitung from './components/placeBitung';
import PlaceMinahasa from './components/placeMinahasa';
import festivalManado from './components/festivalManado';
import festivalManado2 from './components/festivalManado2';
import festivalManado3 from './components/festivalManado3';
import festivalManado4 from './components/festivalManado4';
import festivalManado5 from './components/festivalManado5';
import festivalTomohon from './components/festivalTomohon';
import festivalBitung1 from './components/festivalBitung1';
import festivalBitung2 from './components/festivalBitung2';
import festivalBitung3 from './components/festivalBitung3';
import festivalMinahasa from './components/festivalMinahasa';



const navigator = createStackNavigator({
  Home : Home,
  Home: HomeScreen,
  Place: Place,
  PlaceManado: PlaceManado,
  PlaceTomohon: PlaceTomohon,
  PlaceBitung: PlaceBitung,
  PlaceMinahasa: PlaceMinahasa,
  ManadoFest1: festivalManado,
  ManadoFest2: festivalManado2,
  ManadoFest3: festivalManado3,
  ManadoFest4: festivalManado4,
  ManadoFest5: festivalManado5,
  TomohonFest1: festivalTomohon,
  BitungFest1: festivalBitung1,
  BitungFest2: festivalBitung2,
  BitungFest3: festivalBitung3,
  MinahasaFest1: festivalMinahasa


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

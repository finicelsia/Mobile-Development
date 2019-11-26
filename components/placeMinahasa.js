import React from 'react';
import { Text, StyleSheet, FlatList, View, ImageBackground, Button} from 'react-native';

// const places = [
//     {Festival: 'Manado Fiesta', Location: 'Kawasan Megamas'},
//     {Festival: 'Christmas Festival', Location: 'Kawasan Megamas'},
//     {Festival: 'Festival Pesona Bunaken', Location: 'Bunaken'},
//     {Festival: 'Telkomsel Langit Musik Pagelaran Festival', Location: 'Kawasan Megamas'},
//     {Festival: 'Figura Festival', Location: 'Kawasan Megamas'}
// ]

const placeMinahasa = ({ navigation }) => {
    return (
        <ImageBackground source={require('../assets/b.jpg')} style={{width: '100%', height: '100%'}}>
            <View style={styles.followButton}>
            <Button 
                title="Festival Danau Tondano"
                onPress={() => navigation.navigate('MinahasaFest1')}
           />
           </View>
           
        </ImageBackground>
    );
};
const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      margin : 120
    },
    ukuran:{
        width : 120, height : 120
    },
    followButton: {
      marginTop:10,
      height:40,
      width:380,
    //   padding:10,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius:80,
      backgroundColor: "white",
      borderWidth:1,
      borderColor:"black",
    },
  });
export default placeMinahasa;
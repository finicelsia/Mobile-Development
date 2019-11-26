import React from 'react';
import { Text, StyleSheet, FlatList, View, ImageBackground, Button} from 'react-native';

// const places = [
//     {Festival: 'Manado Fiesta', Location: 'Kawasan Megamas'},
//     {Festival: 'Christmas Festival', Location: 'Kawasan Megamas'},
//     {Festival: 'Festival Pesona Bunaken', Location: 'Bunaken'},
//     {Festival: 'Telkomsel Langit Musik Pagelaran Festival', Location: 'Kawasan Megamas'},
//     {Festival: 'Figura Festival', Location: 'Kawasan Megamas'}
// ]

const placeBitung = ({ navigation }) => {
    return (
        <ImageBackground source={require('../assets/Bitung.jpg')} style={{width: '100%', height: '100%'}}>
            <View style={styles.followButton}>
            <Button 
                title="Festival Pesona Selat Lembeh"
                onPress={() => navigation.navigate('BitungFest1')}
           />
           </View>
           <View style={styles.followButton}>
           <Button 
                title="Colorful Bitung"
                onPress={() => navigation.navigate('BitungFest2')}
           />
           </View>
           <View style={styles.followButton}>
           <Button 
                title="Tulede Festival"
                onPress={() => navigation.navigate('BitungFest3')}
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

export default placeBitung;
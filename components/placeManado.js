import React from 'react';
import { Text, StyleSheet, FlatList, View, ImageBackground, Button} from 'react-native';

// const places = [
//     {Festival: 'Manado Fiesta', Location: 'Kawasan Megamas'},
//     {Festival: 'Christmas Festival', Location: 'Kawasan Megamas'},
//     {Festival: 'Festival Pesona Bunaken', Location: 'Bunaken'},
//     {Festival: 'Telkomsel Langit Musik Pagelaran Festival', Location: 'Kawasan Megamas'},
//     {Festival: 'Figura Festival', Location: 'Kawasan Megamas'}
// ]

const placeManado = ({ navigation }) => {
    return (
        <ImageBackground source={require('../assets/b.jpg')} style={{width: '100%', height: '100%'}}>
            <View >
            <View style={styles.followButton}>
            <Button 
                title="Manado Fiesta"
                onPress={() => navigation.navigate('ManadoFest1')}
           />
           </View>
           <View style={styles.followButton}>
           <Button 
                title="Christmas Festival"
                onPress={() => navigation.navigate('ManadoFest2')}
           />
           </View>
           <View style={styles.followButton}>
           <Button 
                title="Festival Pesona Bunaken"
                onPress={() => navigation.navigate('ManadoFest3')}
            />
            </View>
            <View style={styles.followButton}>
            <Button 
                title="Telkomsel Langit Musik Pagelaran Festival"
                onPress={() => navigation.navigate('ManadoFest4')}
            />
            </View>
            <View style={styles.followButton}>
            <Button 
                title="Figura Festival"
                onPress={() => navigation.navigate('ManadoFest5')}
            />
            </View>
            </View>
        </ImageBackground>
    );
};
const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      margin : 20
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

export default placeManado;
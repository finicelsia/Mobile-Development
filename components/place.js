import React from 'react';
import { Text, View, Button, ImageBackground, StyleSheet } from 'react-native';

const place = ({ navigation }) => {
    return (
     <ImageBackground source={require('../assets/wi1.jpg')} style={{width: '100%', height: '100%'}}>
       <View>
           <Text>Place of Festival</Text>
           <View style={styles.container}>
           <View style={styles.followButton}>
           <Button 
                title="Manado"
                onPress={() => navigation.navigate('PlaceManado')}
           />
           </View>
           <View style={styles.followButton}>
           <Button 
                title="Tomohon"
                onPress={() => navigation.navigate('PlaceTomohon')}
           />
           </View>
           <View style={styles.followButton}>
           <Button 
                title="Bitung"
                onPress={() => navigation.navigate('PlaceBitung')}
            />
            </View>
            <View style={styles.followButton}>
            <Button 
                title="Minahasa"
                onPress={() => navigation.navigate('PlaceMinahasa')}
            />
            </View>
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
      margin : 120
    },
    ukuran:{
        width : 120, height : 120
    },
    followButton: {
      marginTop:10,
      height:50,
      width:200,
      shadowOpacity: 0.60 ,
    //   padding:10,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius:30,
      backgroundColor: "whitesmoke",
      borderWidth:1,
      borderColor:"#dcdcdc",
    },
  });
export default place;
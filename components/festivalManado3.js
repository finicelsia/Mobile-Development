import React from 'react';
import { Text, View, Button, Image, ImageBackground, StyleSheet} from 'react-native';

const festivalManado = ({ navigation }) => {
    return (
    <ImageBackground source={require('../assets/c.jpg')} style={{width: '100%', height: '100%'}}>
       <View>
           <Text>Festival Pesona Bunaken</Text>
           <View style={styles.container}>
           <Image
                style={{width: 300, height: 100}}
                source={require('../assets/m3.jpeg')}
            />
            </View>
            <Text>Informasi :</Text>
            <Text>Festival Pesona Bunaken merupakan pelestarian sumber daya alam bawah laut, 
                seni budaya di Pulau Bunaken sehingga dapat memberikan jaminan kberlangsungan pariwisata 
                setempat yang pada akhirnya akan meningkatkan
                 kunjungan wisatawan yang berdampak pada peningkatan kesejahteraan ekonomi masyarakat.</Text>
       </View>
    </ImageBackground>
    );
};
const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      margin : 60
    },
    ukuran:{
        width : 120, height : 120
    }
  });
export default festivalManado;
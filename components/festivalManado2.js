import React from 'react';
import { Text, View, Button, Image, ImageBackground, StyleSheet } from 'react-native';

const festivalManado2 = ({ navigation }) => {
    return (
    <ImageBackground source={require('../assets/c.jpg')} style={{width: '100%', height: '100%'}}>
       <View>
           <Text>Christmas Festival</Text>
           <View style={styles.container}>
           <Image
                style={{width: 300, height: 100}}
                source={require('../assets/m2.jpg')}
            />
            </View>
             <Text>Informasi :</Text>
            <Text>Pelaksanaan Christmas Festival 2019 dipastikan akan lebih meriah dan berwarna dari tahun sebelumnya.
                 Event tahunan kali ini akan di-handle oleh PT Multi Muda Mandiri yang telah 
                 melakukan penandatangan kontrak bersama Dinas Pariwisata Daerah (Disparda) Provinsi Sulut, Senin (18/11/2019).
                Kepala Disparda Sulut Daniel Mewengkang mengatakan, TP Multi Muda Mandiri telah memenangkan tender 
                untuk menangani Christmas Festival 2019 yang direncanakan mulai digelar pada 2 sampai 31 Desember 2019.</Text>
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
export default festivalManado2;
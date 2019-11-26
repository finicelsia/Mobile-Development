import React from 'react';
import { Text, View, Button, Image, ImageBackground, StyleSheet } from 'react-native';

const festivalManado = ({ navigation }) => {
    return (
    <ImageBackground source={require('../assets/c.jpg')} style={{width: '100%', height: '100%'}}>
       <View>
           <Text>Figura Festival</Text>
           <View style={styles.container}>
           <Image
                style={{width: 300, height: 200}}
                source={require('../assets/m5.jpeg')}
            />
            </View>
            <Text>Informasi :</Text>
            <Text>Figura adalah kegiatan festival yang dilaksanakan secara rutian setiap tahunnya di Kota Manado, Sulawesi Utara dalam rangka mengakhiri tahun dan memasuki tahun baru. Kegiatan festival ini merupakan kalender kegiatan 
                parawisata, dikarenakan kegiatan ini dilakukan sebagai kesenian rakyat oleh masyarakat Kota Manado.</Text>
                <Text>Festival Figura biasanya diadakan pada pekan keempat di bulan Januari sebagai pesta konci taong (tahun). Selain berbagai kostum lucu, di festival tersebut biasanya juga
                     dimeriahkan dengan pertunjukan cakalele atau tarian perang dan tarian katrili serta penampilan musik bambu.
                     Festival Figura juga menjadi ajang masyarakat merefleksikan peristiwa satu tahun ke belakang. 
                     Mulai dari penertiban PKL, korupsi, trafficking dan penegakan hukum. Semua itu disajikan dengan cara parodi.
                     Figura merupakan kesenian rakyat, berasal dari bahasa latin yang artinya figur atau sosok. Seni ini lebih dekat dengan seni pantomim atau menirukan tokoh-tokoh yang berpengaruh.

Kesenian ini dibawa oleh pelaut Spanyol ke pesisir Teluk Manado beberapa ratus tahun lalu. Para peserta yang ikut festival adalah utusan dari kelurahan akau kelompok se-Kota Manado. Peserta dari luar kota juga diperbolehkan mengikutinya.</Text>
       </View>
    </ImageBackground>
    );
};
const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      margin : 100
    },
    ukuran:{
        width : 120, height : 120
    }
  });
export default festivalManado;
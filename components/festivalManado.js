import React from 'react';
import { Text, View, Button, Image, ImageBackground, StyleSheet} from 'react-native';

const festivalManado = ({ navigation }) => {
    return (
    <ImageBackground source={require('../assets/c.jpg')} style={{width: '100%', height: '100%'}}>
       <View>
           <Text>Manado Fiesta</Text>
           <View style={styles.container}>
           <Image
                style={{width: 300, height: 100}}
                source={require('../assets/m1.jpeg')}
            />
            </View>
            <Text>Informasi :</Text>
            <Text>Manado ibu kota Sulawesi Utara itu sedang berpesta. 
                Kota yang terkenal dengan masyarakatnya yang ramah itu sedang menggelar Festival Manado Fiesta, 
                Sejak akhir 27 Juli hingga 4 Agustus 2019.
                Puncak acara digelar di tepi pantai Megamas Manado, yang dipadati ribuan. Mereka berpartisipasi dalam perhelatan pesta akbar itu. 
                Acara dimeriahkan dengan atraksi terjun payung dilanjutkan parade busana laut, mobil-mobil hias, 
                berbagai atraksi tarian daerah termasuk tarian perang Papua.
                Di pantai, penyelenggara membangun panggung besar seukuran setengah lapangan sepak bola, 
                dengan penataan cahaya yang berwarna-warni, menjadikan acara layaknya panggung mewah kelas dunia.
                Semakin malam acara di panggung semakin meriah, dengan para penyanyi yang sudah dikenal oleh masyarakat Manado. 
                Musik dengan beat berirama cepat dan kencang membuat pengunjung bergoyang.
                Tidak jauh dari bibir pantai, kapal kebanggaan Angkatan Laut KRI Dewaruci pun ikut menyaksikan masyarakat Manado yang sedang berpesta.</Text>
            
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
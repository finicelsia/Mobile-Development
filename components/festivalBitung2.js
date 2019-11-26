import React from 'react';
import { Text, View, Button, Image, ImageBackground, StyleSheet } from 'react-native';

const festivalBitung2 = ({ navigation }) => {
    return (
    <ImageBackground source={require('../assets/a.jpg')} style={{width: '100%', height: '100%'}}>
       <View>
           <Text>ColorFull Bitung</Text>
           <View style={styles.container}>
           <Image
                style={{width: 300, height: 100}}
                source={require('../assets/b222.jpg')}
            />
            </View>
            <Text>Informasi :</Text>
            <Text>Untuk menyamakan visi peran media sebagai regulator dalam kesuksesan program program pemerintah, Selasa (19/2) Bagian Humas Setda Kota Bitung menggelar media conference yang dihadiri oleh media-media lokal di daerah untuk mempertajam pelaksanaan program Colorful Bitung 2019 di BPU Kantor Wali Kota Bitung.

Fauzan Hami dari Tim Penggerak Percepatan Pariwisata Kota Bitung didampingi Kabag Humas Pemkot Bitung Albert Sergius mengatakan Colorful Bitung merupakan program pemerintah Kota Bitung untuk mewujudkan cita-cita Kota Bitung sebagai kota destinasi wisata d Indonesia dan dunia.

"Dalam beberapa bulan hingga akhir tahun 2019, akan ada banyak festival yang dilakukan di sini. Kegiatan ini perlu adanya kontribusi lebih dari jurnalis dalam mempromosikan pariwisata di Bitung," sambungnya.

Kaitannya untuk Colorful Bitung, pemerintah kota Bitung akan membuat asset digital dan infrastruktur digital yang baik, sehingga percepatan dan pertumbuhan ekonomi di Kota Bitung juga dapat terlaksana dengan baik.

"Pada langkah awal, pemerintah kota Bitung akan menjadikan #marijokabitung #ColorfulBitung #BitungBahariBerseri & #pancapesonabitung menjadi hashtag official kota Bitung sehingga semua orang dapat melihat dinamika serta perkembangan dari program Colorful Bitung bersama-sama," tuturnya.

Sementara itu Kabag Humas Pemkot Bitung mengatakan bahwa Peranan media khususnya media digital dianggap penting untuk menjadi salah satu tolak ukur sebuah campaign berjalan dengan baik, lewat social media kita dapat memberi tahu sebuah pesan dengan cepat keseluruh penjuru dunia.

</Text>
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
export default festivalBitung2;
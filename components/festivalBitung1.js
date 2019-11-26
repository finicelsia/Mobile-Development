import React from 'react';
import { Text, View, Button, Image, ImageBackground, StyleSheet} from 'react-native';

const festivalBitung1 = ({ navigation }) => {
    return (
    <ImageBackground source={require('../assets/a.jpg')} style={{width: '100%', height: '100%'}}>
       <View>
           <Text>Festival Pesona Selat Lembeh</Text>
           <View style={styles.container}>
           <Image
                style={{width: 300, height: 100}}
                source={require('../assets/b1.jpeg')}
            />
            </View>
            <Text>Informasi :</Text>
            <Text>Selat Lembeh, merupakan salah satu destinasi wisata bahari di Bitung, Sulawesi Utara, yang dikenal dengan pesona lautnya. Di selat ini pulalah Festival Pesona Selat Lembeh digelar awal Oktober 2019.</Text>
            <Text>Tahun ini Festival Pesona Selat Lembeh akan diselenggarakan pada 6-10 Oktober 2019. Seperti biasanya, festival tahun ini akan meriahkan dengan berbagai perlombaan seperti kapal hias dan lari 10 km. Tidak hanya itu, Festival Pesona Selat Lembeh 2019 juga akan dimeriahkan dengan penanaman koral, pentas seni budaya, dan atraksi jet ski.

Bagi wisatawan yang suka kuliner, di festival ini bisa mencicipi sashimi tuna khas Bitung. Ikan tuna mentah yang dipotong tipis dicelup ke dalam bumbu kecap yang diberi daun serei. Juga disajikan pisang goroho rebus atau singkong goreng.

Di sekitar lokasi festival, pengunjung juga bisa bertandang ke Ekowisata Pasir Panjang Pantai Kahona dan Hutan Mangrove Pintu Kota. Bagi penyuka diving, bisa menyelam di beberapa titik selam dan koral yang indah. Jangan lupa, di sore hari, Selat Lembeh juga menjadi spot yang indah untuk melihat matahari terbenam.

Festival yang digelar di pelabuhan Bitung ini bisa menjadi pilihan liburan pada 6-10 Oktober nanti. Bitung merupakan kawasan KEK Destinasi Superprioritas oleh Kementerian Pariwisata yang memiliki beragam fasilitas mumpuni bagi wisatawan.

Apa yang istimewa dari Selat Lembeh? Selat ini terkenal karena keajaiban bawah laut yang luar biasa indahnya. Selat Lembeh dekat sekali dengan Pelabuhan Bitung dan Kota Manado, Ibu Kota Provinsi Sulawesi Utara.</Text>
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
export default festivalBitung1;
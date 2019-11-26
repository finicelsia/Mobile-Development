import React from 'react';
import { Text, View, Button, Image, ImageBackground, StyleSheet } from 'react-native';

const festivalTomohon = ({ navigation }) => {
    return (
    <ImageBackground source={require('../assets/c.jpg')} style={{width: '100%', height: '100%'}}>
       <View>
           <Text>Tomohon International Flower Festival</Text>
           <View style={styles.container}>
           <Image
                style={{width: 300, height: 200}}
                source={require('../assets/t22.jpg')}
            />
            </View>
            <Text>Informasi :</Text>
            <Text>Tomohon International Flower Festival (TIFF) 2019 merupakan parade bunga yang menampilkan kendaraan hias yang didekorasi menggunakan bunga 
                khas Kota Tomohon dan daerah lainnya, ditampilkan dalam berbagai bentuk dan variasi sesuai karakteristik
                 masing – masing peserta. Kendaraan hias akan dinilai oleh tim pakar independen yang memiliki kompetisi di bidang florikultura.
                  Parade bunga yang menampilkan kendaraan hias yang didekorasi menggunakan bunga khas Kota Tomohon dan daerah lainnya.
                 Festival ini bertujuan untuk mempolulerkan 
                Tomohon sebagai kota bunga memiliki alam yang indah yang dikaruniai banyak gunung, danau, dan air terjun.
                </Text>
            <Text>
Akses/Transportasi: Akses yang paling umum digunakan menuju Kota Tomohon adalah terbang ke Manado lalu dilanjutkan dengan Bus lewat jalur darat. Atau bisa juga menggunakan jalur udara dengan penerbangan ke Bandara Sam Ratulangi di Manado dan naiv bus pemandu moda rute Bandara Sam Ratulangi di Manado ke Tomohon dengan biaya sebesar Rp30.000. Lama perjalanan Manado - Tomohon adalah sekitar satu jam.

Tanggal: 7 - 12 Agustus 2019

Tempat: Kota Tomohon, Sulawesi Utara

Penyelenggara: Dinas Pariwisata Daerah Sulawesi Utara</Text>

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

export default festivalTomohon;
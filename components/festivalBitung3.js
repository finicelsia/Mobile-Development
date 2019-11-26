import React from 'react';
import { Text, View, Button, Image, ImageBackground, StyleSheet } from 'react-native';

const festivalBitung3 = ({ navigation }) => {
    return (
    <ImageBackground source={require('../assets/a.jpg')} style={{width: '100%', height: '100%'}}>
       <View>
           <Text>Tulude Festival</Text>
           <View style={styles.container}>
           <Image
                style={{width: 300, height: 100}}
                source={require('../assets/b3.jpg')}
            />
            </View>
            <Text>Informasi :</Text>
            <Text>Pemerintah Kota Bitung, akan melaksanakan pesta adat Tulude pada Jumat 1 Februari 2019 mendatang, dengan mengambil lokasi di pantai Sari, Manembo-nembo.

Penyelenggaraan budaya Tulude ini sendiri bekerjasama dengan IKKSAT Kota Bitung dan akan diawali dengan pameran budaya. Kegiatan ini merupakan awal dari serangkaian Colorfull Bitung tahun 2019, yang memang sudah masuk dalam Calender of event Pemkot Bitung.

Tulude sendiri merupakan upacara ucapan syukur masyarakat Sangihe atas berkat yang diberikan Tuhan ditahun sebelumnya dan mulai menyongsong kehidupan yang lebih baik ditahun yang akan datang.

“Kegiatan ini akan dilakasanakan pada 1 Februari mendatang berlokasi di destinasi wisata baru yakni “Pantai Sari” tepatnya di kelurahan Manembo nembo, kecamatan Matuari dan dimulai pukul 14.00 wita sampai selesai,” jelas Kadis Pariwisata Bitung,  Pingkan Kapoh, SP kepasa media di ruang VIP Pemkot Bitung. Senin (28/01/2019)

Menurutnya, kegiatan akan diawali dengan parade kue tamo yang akan diarak menuju lokasi kegiatan diiringi dengan beragam sajian kesenian etnis Sangihe seperti tari gunde dan sajian musik perkusi tagonggong. “Ada juga pameran mini terkait budaya sangihe dan beragam bentuk pertunjukan budaya seperti tari Salo Masamper serta kuliner khas budaya Sangihe yang nantinya gratis bagi pengunjung,” tukas Kapoh, didampingi Kabag Humas dan Protokol, Albert Pelenkahu, S. Sos.

Sebelumnya Wali Kota Bitung Max Lonban mengatakan bahwa kegiatan ini merupakan wujud dari implementasi Bitung Bahari Berseri sebagai salah satu jurus pembangunan Kota Bitung dalam sektor Pariwisata.</Text>
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
export default festivalBitung3;
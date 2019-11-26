import React from 'react';
import { Text, View, Button, Image, ImageBackground, StyleSheet} from 'react-native';

const festivalManado = ({ navigation }) => {
    return (
    <ImageBackground source={require('../assets/c.jpg')} style={{width: '100%', height: '100%'}}>
       <View>
           <Text>Telkomsel Langit Musik Pagelaran Festival</Text>
           <View style={styles.container}>
           <Image
                style={{width: 300, height: 100}}
                source={require('../assets/m6.jpg')}
            />
            </View>
             <Text>Informasi :</Text>
             <Text>Telkomsel bersama Langit Musik  dan Rans Entertaiment menggelar event  yang bertajuk  Langit Musik Pagelarans Festival 2019 dan 
                  OMG Poin Festival  yang dilaksanakan di Lapangan Basket Kawasan Megamas Manado, Sabtu  16 November 2019.
                  Event yang akan menghibur masyarakat  dan meramaikan kota Manado  disaat weekend ini akan menghadirkan  banyak musisi dari Jakarta , 
                  diantaranya yaitu :  Lyla, Luthfi Aulia $ Cerita Pulang Sekolah, Okka, Idol Junior,  Coboy dan Junior Reborn. 
                  Dan tak ketinggalan pula penampilan  dari para musisi lokal  
                  yang ada di  kota Manado yang tentunya sudah tidak asing lagi bagi sebagian besar warga masyarakat Manado dan sekitarnya. 
                  Manager Branch Manado   Anthony Pahotan Sitorus mengatakan, Langit Musik Pagelarans 2019 dihadirkan sebagai apresiasi  
                  bagi para pelanggan setia Telkomsel maupun pengguna Langit Musik. “Melalui pertunjukan musik ini, kami ingin Langit
                   Musik dilihat sebagai sebuah sarana baru dalam dunia musik tanah air yang menyediakan layanan musik digital yang dapat 
                   dinikmati para penggemar musik langsung dari ponsel,” ujar Sitorus, Kamis, 14/11/2019.
                  Event pagelaran  ini juga sebagai bentuk apresiasi  Telkomsel kepada industri musik khususnya musisi  dalam negeri 
                  terutama musisi daerah  agar karyanya bisa semakin banyak didengar oleh masyarakat  dan sekaligus sebagai upaya melindungi karya musik anak bangsa.
Selain itu  event ini juga bertujuan agar dapat memotivasi para musisi lokal untuk terus berkarya menghasilkan karya terbaik mereka serta mampu
mempromosikan karyanya melalui aplikasi digital Langit Musik dan karya orisinil mereka bisa menghasilkan keuntungan di era digital saat ini.
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
export default festivalManado;
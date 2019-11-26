import React from 'react';
import { Text, View, Button, Image, ImageBackground, StyleSheet} from 'react-native';

const festivalMinahasa = ({ navigation }) => {
    return (
    <ImageBackground source={require('../assets/c.jpg')} style={{width: '100%', height: '100%'}}>
       <View>
           <Text>Festival Danau Tondano</Text>
           <View style={styles.container}>
           <Image
                style={{width: 300, height: 100}}
                source={require('../assets/t1.jpg')}
            />
            </View>
            <Text>Informasi :</Text>
            <Text>Festival Danau Tondano menjadi salah satu event yang masuk dalam event nasional. Festival ini guna untuk menarik wisatawan berkunjung dan memperkenalkan minahasa pada tingkat nasional.
                Festival Danau Tondano (Fesdaton) 2019 yang akan digelar di Tondano Bulan November 2019 nanti.

Tumundo menambahkan, di samping iven Fesdaton 2019 sebagai pagelaran akbar Pemerintah Kabupaten Minahasa, pihaknya pula akan menggelar iven Festival Benteng Moraya di Bulan Mei, Pemilihan Waraney dan Wulan Minahasa Bulan Oktober, dan Wonderful Christmas Bulan Desember 2019 nanti.



Artikel ini telah tayang di tribunmanado.co.id dengan judul Festival Danau Tondano Masuk Event Nasionalh</Text>
            
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

export default festivalMinahasa;
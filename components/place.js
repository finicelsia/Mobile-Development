import React from 'react';
import { Text, View, Button, ImageBackground } from 'react-native';

const place1 = ({ navigation }) => {
    return (
     <ImageBackground source={require('../assets/image3.jpg')} style={{width: '100%', height: '100%'}}>
       <View>
           <Text>Home Screen</Text>
           <Button 
                title="Manado"
                onPress={() => navigation.navigate('PlaceManado')}
           />
           <Button 
                title="Tomohon"
                onPress={() => navigation.navigate('PlaceTomohon')}
           />
           <Button 
                title="Bitung"
                onPress={() => navigation.navigate('PlaceBitung')}
            />
       </View>
       </ImageBackground>
    );
};

export default place1;
import React from 'react';
import { Text, View, Button, Image, ImageBackground } from 'react-native';

const HomeScreen = ({ navigation }) => {
    return (
    <ImageBackground source={require('../assets/image1.jpg')} style={{width: '100%', height: '100%'}}>
       <View>
           <Text>Home Screen</Text>
           <Image
                style={{width: 200, height: 200}}
                source={require('../assets/icon2.png')}
            />
           <Button 
                title="Place of Festival"
                onPress={() => navigation.navigate('Place')}
           />
       </View>
    </ImageBackground>
    );
};

export default HomeScreen;
import React from 'react';
import { Text, StyleSheet, FlatList, View, ImageBackground} from 'react-native';

const places = [
    {Festival: 'Fest1', Location: 'Unknown'},
    {Festival: 'Fest2', Location: 'Unknown'},
    {Festival: 'Fest3', Location: 'Unknown'},
    {Festival: 'Fest4', Location: 'Unknown'}
]

const placeManado = () => {
    return (
        <ImageBackground source={require('../assets/image2.jpg')} style={{width: '100%', height: '100%'}}>
        <FlatList 
            data={places}
            renderItem={({ item }) => 
                <View style={styles.textStyle}>
                    <Text >
                        {item.Festival}
                    </Text>
                    <Text>
                        {item.Location}
                    </Text>
                </View>
            }
            keyExtractor={item => item.Festival}
        />
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    textStyle: {
        marginVertical: 10
    }
});

export default placeManado;
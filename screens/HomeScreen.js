import React from 'react';
import { StyleSheet, Text, View, Button, Image, ImageBackground, TouchableOpacity, FlatList, Dimensions, Alert, ScrollView} from 'react-native';

const HomeScreen = ({ navigation }) => {
    return (
    <ImageBackground source={require('../assets/1.png')} style={{width: '100%', height: '90%'}}>
       <View>
           <Text>Home Screen</Text>
           <View style={styles.container}>
           <View style={styles.followButton}>
           <Button 
                title="Place of Festival"
                onPress={() => navigation.navigate('Place')}
           />
           </View>
           </View>
       </View>
    </ImageBackground>
    );
};
const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      margin : 40
    },
    ukuran:{
        width : 120, height : 120
    },
    followButton: {
      // marginTop:10,
      height:50,
      width:200,
      // shadowOpacity: 0.60 ,
      // padding:10,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius:30,
      backgroundColor: "whitesmoke",
      borderWidth:1,
      borderColor:"grey",
    },
  });
export default HomeScreen;
// import React, { Component } from 'react';
// import {
//   StyleSheet,
//   Text,
//   View,
//   Image,
//   TouchableOpacity,
//   FlatList,
//   Dimensions,
//   Alert,
//   ScrollView
// } from 'react-native';

// export default class Home extends Component {

//   constructor(props) {
//     super(props);
//     this.state = {
//       modalVisible:false,
//       userSelected:[],
//       data: [
//         {id:1,  name: "Manado",   image:"https://img.icons8.com/clouds/100/000000/groups.png",           count:6},
//         {id:2,  name: "Tomohon",    image:"https://img.icons8.com/color/100/000000/real-estate.png",       count:4},
//         {id:3,  name: "Bitung",       image:"https://img.icons8.com/color/100/000000/find-matching-job.png", count:2} ,
//       ]
//     };
//   }

//   clickEventListener = (item) => {
//     Alert.alert('Message', 'Item clicked. '+item.name);
//   }

//   render() {
//     return (
//       <View style={styles.container}>
//         <FlatList 
//           style={styles.contentList}
//           columnWrapperStyle={styles.listContainer}
//           data={this.state.data}
//           keyExtractor= {(item) => {
//             return item.id;
//           }}
//           renderItem={({item}) => {
//           return (
//             <TouchableOpacity style={styles.card} onPress={() => {this.clickEventListener(item)}}>
//               <Image style={styles.image} source={{uri: item.image}}/>
//               <View style={styles.cardContent}>
//                 <Text style={styles.name}>{item.name}</Text>
//                 <Text style={styles.count}>{item.count}</Text>
//                 <TouchableOpacity style={styles.followButton} onPress={()=> this.clickEventListener(item)}>
//                 <Text style={styles.followButtonText}>More</Text>  
//                 </TouchableOpacity>
//               </View>
//             </TouchableOpacity>
//           )}}/>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container:{
//     flex:1,
//     marginTop:20,
//     backgroundColor:"#ebf0f7"
//   },
//   contentList:{
//     flex:1,
//   },
//   cardContent: {
//     marginLeft:20,
//     marginTop:10
//   },
//   image:{
//     width:90,
//     height:90,
//     borderRadius:45,
//     borderWidth:2,
//     borderColor:"#ebf0f7"
//   },

//   card:{
//     shadowColor: '#00000021',
//     shadowOffset: {
//       width: 0,
//       height: 6,
//     },
//     shadowOpacity: 0.37,
//     shadowRadius: 7.49,
//     elevation: 12,

//     marginLeft: 20,
//     marginRight: 20,
//     marginTop:20,
//     backgroundColor:"white",
//     padding: 10,
//     flexDirection:'row',
//     borderRadius:30,
//   },

//   name:{
//     fontSize:18,
//     flex:1,
//     alignSelf:'center',
//     color:"#3399ff",
//     fontWeight:'bold'
//   },
//   count:{
//     fontSize:14,
//     flex:1,
//     alignSelf:'center',
//     color:"#6666ff"
//   },
  // followButton: {
  //   marginTop:10,
  //   height:35,
  //   width:100,
  //   padding:10,
  //   flexDirection: 'row',
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   borderRadius:30,
  //   backgroundColor: "white",
  //   borderWidth:1,
  //   borderColor:"#dcdcdc",
  // },
//   followButtonText:{
//     color: "#dcdcdc",
//     fontSize:12,
//   },
// });
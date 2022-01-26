import { useNavigation } from '@react-navigation/core';
import React, { useEffect } from 'react';
import{
   View, Text, FlatList, Image,TouchableOpacity,
} from 'react-native';
export default function Card(props){
   const navigation = useNavigation();
   return(
      <TouchableOpacity style = {{flex:0.4, }}
         onPress = {()=>navigation.navigate("Details",{item:props.item})}>
         <Image 
            source = {{uri:props.image}} 
            style = {{height:190, borderRadius:5, marginBottom:10, }}
            resizeMode= "cover"/>
         <Text style = {{color:'#ffffff', fontSize:18, fontWeight:'bold'}}>
            {props.name}
         </Text>
         <Text style = {{color:'#ffffff', fontSize:12}}>
            {props.nickName}
         </Text>
      </TouchableOpacity>
   );
}
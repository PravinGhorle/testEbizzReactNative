import React, { useEffect } from 'react';
import{
   View, Text, FlatList, Image,TouchableOpacity,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import {fetchData} from '../redux/data/DataEffect';
import {data_request, data_failure, data_success} from '../redux/data/DataAction';
import baseURL from '../appConstants';
import Card from './Components/Card';
export default function Home({navigation}){
   const data = useSelector((state)=> state.data.data );
   //console.log('lll', useSelector((state)=> state.data.data ));
   const dispatch = useDispatch();
   useEffect(()=>{
     callMe();
   },[]);
    async function   callMe(){
       dispatch(data_request ());
      try{
         let response =  await fetch(baseURL +'/api/characters',{
            method: 'GET',
            headers: {
              'Content-Type':'application/json',
            }
          });
          let res = await  response.text();
          let json = JSON.parse(res);
          console.log('respons',json);
          dispatch(data_success(json));
        
       }catch(e){
         console.log('error', e);
         dispatch(data_failure());
       }
   }
   
   function Separator(){
      return(
         <View style = {{height:20, backgroundColor:'#242424'}}/>
      );
   }
	return(
		<View style = {{backgroundColor:'#242424'}}>
			<FlatList
            style = {{marginTop:20}}
            data = {data}
            keyExtractor  = {(item)=> item.char_id}
            renderItem = {(item)=>(
               <Card name = {item.item.name}
                     image ={item.item.img}
                     nickName = {item.item.nickname}
                     item = {item.item}
               />
               )}
            numColumns = {2}
            columnWrapperStyle = {{justifyContent:'space-evenly' }}
            ItemSeparatorComponent = {Separator}
         />
		</View>
	);
}
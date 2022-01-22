import React, { useEffect, useState } from 'react'
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native"

const Home = ({ navigation }) => {
  console.log(navigation)
  const [userList, setUserList] = useState([]);
  useEffect(() => {
    getData()
  }, [])
  
  const getData = async () => {
    const result = await getUserList()
    setUserList(result)
    console.log('result', result)
  }

  const getUserList = () => {
    return fetch('https://api.github.com/users?since=0', {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
    }
    ).then((response) => response.json())
    .then((result) => { return result})
    .catch((err)=> console.log('error', err))
  }

  const UserStrip = (props) => {
    
    const {item} = props
    return (
      <TouchableOpacity style={{
        flex: 1,
        flexDirection: 'row',
        borderWidth: 1,
        margin: 10,
        padding:10

      }}
      onPress = {()=> navigation.navigate("Profile",{id:item.id})}>
        <Image
          source={{ uri: item.avatar_url }}
          style={{
            height: 50,
            width: 50,
            borderRadius:50
          }}
        />
        <View style={{
          marginLeft:10
        }}>
          <Text style={{
          fontWeight:'bold'
        }}>
          {item?.login}
        </Text>
        </View>
        
      </TouchableOpacity>
    )
  }
  return (
    //fltList
    // item  gull img icon,  username, details if note icon<Flat
    <FlatList
      data={userList}
      keyExtractor={(item, index) => index.toString()}
      renderItem = {({item})=> <UserStrip item = {item}/>}
    />
  )
}

export default Home
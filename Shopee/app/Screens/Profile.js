// header name with back arrow
// followers followinfg
// name compony blog
// note

import React, { useEffect, useState } from "react"
import { Text, TouchableOpacity, View } from "react-native"

const Profile = ({ navigation, route }) => {
  const [userdata, setUserData] = useState([])

  useEffect(() => {
    console.log('route', route)
    getData()
  },[])
  
  const getData = async () => {
    const result = await getUserData(route.params.id)
    console.log('result', result)
    setUserData(result)
  }

  const getUserData = (id) => {
    return fetch('https://api.github.com/users/'+id, {
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
  
  return (
    <View style = {{flex:1}}>
      <Text>
        Profile
      </Text>
      <View style={{
        flexDirection: "row",
        justifyContent:'space-evenly'
      }}>
        <Text>
          followers: {userdata?.followers}
        </Text>
        <Text>
          following: {userdata?.following}
        </Text>
      </View>
      <View style={{
        borderWidth: 1,
        //flex: 1,
        padding: 10,
        marginVertical: 20,
        //height:100
      }}>
        <Text>name: {userdata?.name }</Text>
        <Text>company: {userdata?.company }</Text>
        <Text>bio: {userdata?.bio}</Text>

      </View>

      {/* <Text>
          Notes:
        </Text> */}
      {/* <View style={{
        borderWidth:1
      }}>
        
      </View> */}
      {/* <TouchableOpacity style={{
        marginVertical:20
      }}>
        <Text>
          Save
        </Text>
      </TouchableOpacity> */}
    </View>
  )
}
export default Profile
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from './Screens/Home'
import Profile from './Screens/Profile'

const Stack = createNativeStackNavigator()
const Route = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          />
        <Stack.Screen
          name="Profile"
          component={ Profile}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}
export default Route
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from './screen/Home'
import Details from './screen/Details'

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
          name="Details"
          component={Details}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}
export default Route
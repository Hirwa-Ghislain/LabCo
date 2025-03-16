import { View, Text } from 'react-native'
import React from 'react'
import tw from '../../lib/tailwind'

const Home = () => {
  return (
    <View>
      <Text>Home</Text>
      <Text style={tw`text-lg`}>Welcome On Home</Text>
    </View>
  )
}

export default Home
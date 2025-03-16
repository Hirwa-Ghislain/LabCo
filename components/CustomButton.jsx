import { TouchableOpacity,Text } from 'react-native'
import React from 'react'
import tw from '../lib/tailwind'

const CustomButton = ({title,handlePress,containerStyles={},textStyles={},isLoading=false}) => {
  return (
    <TouchableOpacity 
    onPress={handlePress}
    activeOpacity={0.7}
    style={[tw`bg-white rounded-xl min-h-[42px] justify-center items-center`, containerStyles, isLoading && tw`opacity-50`]}
    disabled={isLoading}
    >
        <Text style={[tw`text-primary font-psemibold text-xm`, textStyles]}>{title}</Text>
    </TouchableOpacity>
  )
}

export default CustomButton
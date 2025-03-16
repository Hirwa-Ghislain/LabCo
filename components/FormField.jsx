import { View, Text, TextInput, TouchableOpacity,Image } from 'react-native'
import React from 'react'
import tw from '../lib/tailwind'
import { useState } from 'react'
import {icons} from '../constants'

const FormField = ({title,value,placeholder,handleChangeText,otherStyles, ...props}) => {
    const [isFocused, setisFocused] = useState(false);
    const [showPassword, setshowPassword] = useState(false);

  return (
    <View style={[tw`space-y-2`,otherStyles]}>
      <Text style={tw`text-base text-gray-100 font-pmedium`}>{title}</Text>
      <View style={tw`flex-row border-2 ${isFocused ? "border-secondary" : "border-black-200"} w-full h-16 px-4 bg-black-100 rounded-2xl items-center`}>
        <TextInput
        style={tw`flex-1 w-full text-white font-psemibold text-base`}
        value={value}
        placeholder={placeholder}
        onFocus={() => setisFocused(true)}
        onBlur={() => setisFocused(false)}
        placeholderTextColor='#7b7b8b'
        onChangeText={handleChangeText}
        secureTextEntry={title === 'Password' && !showPassword}
        />
        {title === 'Password' && (
            <TouchableOpacity onPress={()=>setshowPassword(!showPassword)}>
                <Image
                source={!showPassword ? icons.eye:icons.eyeHide}
                style={tw`w-6 h-6`}
                resizeMode='contain'
                />
            </TouchableOpacity>
        )}
      </View>
    </View>
  )
}

export default FormField
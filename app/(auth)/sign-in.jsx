import { View, Text, Image, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import tw from '../../lib/tailwind'
import { images } from '../../constants'
import FormField from '../../components/FormField'
import CustomButton from '../../components/CustomButton'
import { useState } from 'react'
import { Link } from 'expo-router'
import { signIn } from '../../lib/appwrite'

const SignIn = () => {

  const [form, setform] = useState({
    email:'',
    password:''
  });

  const [isSubmitting, setisSubmitting] = useState(false);
  
    const submit = async () =>{
  
      if(!form.email || !form.password){
        Alert.alert('Error','Please fill in all fields')
      }
  
      setisSubmitting(true);
      try {
        await signIn(form.email,form.password)
  
        //set it to global state ...
  
        router.replace('/home')
      } catch (error) {
        Alert.alert('Error',error.message)
      } finally{
        setisSubmitting(false)
      }
  
    }

  return (
    <SafeAreaView style={tw`bg-primary h-full`}>
      <ScrollView>
        <View style={tw`w-full justify-center h-full px-4 my-6`}>
          <Text style={tw`text-xl text-white mt-5 font-psemibold`}>Log into LabCo</Text>
          <FormField 
          title="Email"
          value={form.email}
          handleChangeText={(e) => setform({ ...form,email: e })}
          otherStyles={tw`mt-7`}
          keyboardType="email-address"
          />
          <FormField 
          title="Password"
          value={form.password}
          handleChangeText={(e) => setform({ ...form,password: e })}
          otherStyles={tw`mt-7`}
          />

          <CustomButton
          title='Sign-in'
          handlePress={submit}
          containerStyles={tw`mt-8 p-4`}
          isLoading={isSubmitting}
          />
          <View style={tw`justify-center pt-4 flex-row gap-2`}>
            <Text style={tw`text-xm text-gray-100 font-pregular`}>
              Don't have an account?
            </Text>
            <Link href="./sign-up" style={tw`text-xm font-psemibold text-blue-500`}>Sign Up</Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignIn 
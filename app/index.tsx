import { ScrollView, Text, View, Image } from "react-native";
import { Redirect,router } from "expo-router";
import tw from '../lib/tailwind'
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from '../constants'
import CustomButton from '../components/CustomButton'
import { StatusBar } from "expo-status-bar";


export default function Index() {
  return (
    <SafeAreaView style={tw`bg-primary h-full`}>
      <ScrollView contentContainerStyle={{ height: '100%' }}>
        <View style={tw`w-full h-full items-center px-4`}>
          
          <View style={tw`relative mt-5`}>
            <Text style={tw`text-2xl text-white font-bold text-center`}>Start with {" "}
              <Text style={tw`text-blue-500`}>
                LabCo
              </Text>
            </Text>
          </View>
          <View>
            <Text style={tw`text-sm font-pregular text-gray-100 text-center`}>Where creativity meets innovation: embark on a journey of limitless exploration with LabCo</Text>
          </View>

          <CustomButton 
          title="Continue With Email"
          handlePress={()=> router.push('/sign-in')}
          containerStyles={tw`w-full mt-6`}
          />
        </View>
      </ScrollView>
      <StatusBar
      backgroundColor="#161622"
      style="light"
      />
    </SafeAreaView>
  );
}

import { ScrollView, Image, Text, View } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { Link } from 'expo-router'
import "./global.css"
import { SafeAreaView } from 'react-native-safe-area-context'

import { images } from '../constants'
import CustomButton from '@/components/CustomButton'

const App = () => {
  return (
    <SafeAreaView className='bg-primary h-full'>

      <ScrollView  contentContainerStyle={{ height: '100%' }}>
        <View className='w-full justify-center items-center h-full px-4'>
          <Image
           source={images.logo}
          //  className='bg-red-500'
          style={{ height: '84px', width: '130px' }}
          resizeMode='contain'
           />

           <Image
           source={images.cards}
           className="w-full"
           style={{ maxWidth: '380px', height: '300px' }}
           resizeMode='contain' 
           />

           <View className='relative mt-5'>
            <Text className='text-3xl text-white font-bold text-center'>
              Discover Endless possibilities with {' '}
              <Text className='text-yellow-500'>
                Aora
              </Text>
            </Text>

            <Image
            style={{ width: '136px', height: '15px' }}
            className='absolute -bottom-2 -right-8'
            source={images.path}
            resizeMode='contain'
            />

           </View>

           <Text className='text-sm font-pregular text-white text-center'>Where creativity needs innovation:
            embark on a journey of a limitless exploration with Aora
           </Text>

           <CustomButton
           title="Continue with Email"
           handlePress={() => {}}
           containerStyles="w-full mt-7"
           />
        </View>
      </ScrollView>

      <StatusBar 
      backgroundColor='#161622'
      style='light'
      />

    </SafeAreaView> 
 )
}

export default App


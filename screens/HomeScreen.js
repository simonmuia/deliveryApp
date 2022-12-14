import { View, Text } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'

const HomeScreen = () => {
  return (
    <View className='flex-1 items-center justify-center bg-white'>
      <Text className="text-red-500"> HomeScreen</Text>
      <StatusBar style='auto' />
    </View>
  )
}

export default HomeScreen
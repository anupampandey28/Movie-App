import { Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const profile = () => {
  return (
<SafeAreaView className='items-center justify-center flex-1'>
      <Text className='font-bold text-secondary text-2xl '>Profile Page</Text>
    </SafeAreaView>
  )
}

export default profile

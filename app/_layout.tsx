import { View, Text } from 'react-native'
import React from 'react'

import '../global.css';
import { nowPlagingAction } from '@/core/actions/movies/now-playing.action';

const RootLayout = () => {

  nowPlagingAction();

  return (
    <View>
      <Text className='text-3xl'>RootLayout</Text>
    </View>
  )
}

export default RootLayout;
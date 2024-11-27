import { TouchableOpacity, Text } from 'react-native'
import React from 'react'

type Props = {
    title: string,
    handlePress: any,
    containerStyles: any
    textStyles: any
    isLoading: any
}

const CustomButton = ({ title, handlePress, containerStyles, textStyles, isLoading }: Props) => {
  return (
    <TouchableOpacity 
    onPress={handlePress}
    activeOpacity={0.7}
    disabled={isLoading}
    className={`bg-yellow-500 rounded-xl justify-center items-center ${containerStyles} ${ isLoading ? 'opacity-50' : '' } `}
    style={{ minHeight: '62px' }}
    >
      <Text
      className={`text-primary font-psemibold text-lg ${textStyles}`}
      >{title}</Text>
    </TouchableOpacity>
  )
}

export default CustomButton
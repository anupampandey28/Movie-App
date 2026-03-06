import { View, TextInput } from 'react-native'
import React, { useState } from 'react'
import { Ionicons } from '@expo/vector-icons'

interface props {
  onPress : () => void;
  placeholder:string
    value: string;
  onChangeText: (text: string) => void;

}

// const SearchBar = ({onPress , placeholder} : props) => {
const SearchBar = ({onPress , placeholder , value , onChangeText} : props) => {

  return (
    <View className="flex-row items-center bg-dark-200 rounded-full px-5 py-4">
      <Ionicons name="search" size={24} color="#ab8bff"/>
      <TextInput  onPress={onPress} value={value}  onChangeText={onChangeText} placeholder={placeholder} placeholderTextColor="#a8b5db" className="flex-1 ml-3 text-white"/>
    </View>
  )
}

export default SearchBar

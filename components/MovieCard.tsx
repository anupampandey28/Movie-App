import { View, Text, TouchableOpacity , Image } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import { icons } from '@/constants/icons'

const MovieCard = ({id , poster_path , title , vote_average , release_date }:Movie) => {
  return (
    <Link href={`/movie/${id}`} asChild>
      <TouchableOpacity className='w-[30%]  rounded-lg overflow-hidden'>
        <Image source={{
          uri:poster_path?
          `https://image.tmdb.org/t/p/w500${poster_path}`
          : `https://placehold.co/600x400/1a1a1a/ffffff.png`
        }} 
        className='w-full h-52 rounded-t-lg'
        resizeMode='cover'/> 
        <Text className='text-sm font-bold text-white mt-2 ml-2' numberOfLines={1}>{title}</Text>
          <View className='flex-row gap-x-1 px-2 pb-1 items-center justify-start'>
            <Image source={icons.star} className='size-3'/>
          <Text className='text-sm font-bold text-white'>{Math.round(vote_average/2)}</Text>
        <Text className='text-sm ml-11 text-white'>{release_date?.split("-")[0]}</Text>
          </View>
      </TouchableOpacity>
    
    </Link>
  )
}

export default MovieCard
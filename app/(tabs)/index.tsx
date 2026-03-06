import MovieCard from "@/components/MovieCard";
import SearchBar from "@/components/SearchBar";
import { icons } from "@/constants/icons";
import { images } from "@/constants/images";
import { fetchMovies } from "@/sevices/api";
import useFetch from "@/sevices/useFetch";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { ActivityIndicator, FlatList, Image, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Index = () => {
  const router = useRouter();
  const [search , setSearch] = useState("")
  const {
    data: movies,
    loading: moviesLoading,
    error: moviesError,
    refetch:refetcgMovies,
  } = useFetch(() =>
    fetchMovies({
      query: search,
    }),false
  );
  return (
    <SafeAreaView className="flex-1 bg-primary">
      <Image source={images.bg} className="w-full absolute z-0" />
      <ScrollView
        showsVerticalScrollIndicator={false}
        className="flex-1 px-5"
        contentContainerStyle={{
          minHeight: "100%",
          paddingBottom: 10,
        }}
      >
        <Image source={icons.logo} className="w-12 h-10 mx-auto mt-20 mb-5" />
        {moviesLoading ? (
          <ActivityIndicator
            size="large"
            color="#0000FF"
            className="mt-10 self-center"
          />
        ) : moviesError ? (
          <Text>Error: {moviesError?.message}</Text>
        ) : (
          <View>
            <SearchBar
            onPress={()=>{}}
              value={search}
              onChangeText={setSearch}
              placeholder="Search for a movie"
            />
            <>
            <Text className="font-bold text-white text-lg mt-5 mb-3">Latest Movies</Text>
            <FlatList
            data={movies}
            renderItem={({item})=>(
              <MovieCard {...item}/>
            )}
            keyExtractor={(item)=>item.id.toString()}
            numColumns={3}
            scrollEnabled={false}
            columnWrapperStyle={
              {
                justifyContent:"flex-start",
                gap:20,
                paddingRight:5,
                marginBottom:10,
              }
            }
            className="mt-2 pb-32"
            />
            
            </>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Index;

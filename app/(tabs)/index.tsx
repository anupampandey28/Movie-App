import MovieCard from "@/components/MovieCard";
import TrendingCard from "@/components/TrendingCard";
import { icons } from "@/constants/icons";
import { images } from "@/constants/images";
import { fetchMovies } from "@/services/api";
import { getTrendingMovies } from "@/services/appwrite";
import useFetch from "@/services/useFetch";
import { useFocusEffect } from "@react-navigation/native";
import { useRouter } from "expo-router";
import React, { useCallback, useEffect } from "react";
import {
    ActivityIndicator,
    FlatList,
    Image,
    ScrollView,
    Text,
    View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Index = () => {

 const {
  data: trendingMovie,
  loading: trendingMovieLoading,
  error: trendingMovieError,
} = useFetch(getTrendingMovies)


  const {    
    data: movies,
    loading: moviesLoading,
    error: moviesError,
  } = useFetch(() =>
    fetchMovies({
      query: "",
    }),
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
        {moviesLoading || trendingMovieLoading ?(
          <ActivityIndicator
            size="large"
            color="#0000FF"
            className="mt-10 self-center"
          />
        ) : moviesError || trendingMovieError ? (
          <Text className="text-white">Error: {moviesError?.message|| trendingMovieError?.message}</Text>
        ) : (
          <View>
            

            {(trendingMovie?.length ?? 0) > 0  && (
              <View className="mt-10">
              <Text className="font-bold text-white text-lg mt-5 mb-3">
                Trending Movies
              </Text>
                <FlatList 
                horizontal
                showsHorizontalScrollIndicator={false}
                className="mb-4 mt-3 "
                ItemSeparatorComponent={()=><View className="w-4"/>}
                data={trendingMovie}
                renderItem={({item , index})=>(
                  <TrendingCard movie={item} index={index} />
                )}
                keyExtractor={(item)=>item.movie_id.toString()}
                />
              </View>
            )
          }
            <>
              <Text className="font-bold text-white text-lg mt-5 mb-3">
                Latest Movies
              </Text>
              <FlatList
                data={movies}
                renderItem={({ item }) => <MovieCard {...item} />}
                keyExtractor={(item) => item.id.toString()}
                numColumns={3}
                
                scrollEnabled={false}
                columnWrapperStyle={{
                  justifyContent: "flex-start",
                  columnGap:16,
                  
                  marginBottom: 10,
                }}
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

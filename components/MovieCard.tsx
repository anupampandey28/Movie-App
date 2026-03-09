import { Link } from "expo-router";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

const MovieCard = ({
  id,
  poster_path,
  title,
  vote_average,
  release_date,
}: Movie) => {
  return (
    <Link href={`/movie/${id}`} asChild>
      <TouchableOpacity className="w-[30%]">
        <Image
          source={{
            uri: poster_path
              ? `https://image.tmdb.org/t/p/w500${poster_path}`
              : `https://placehold.co/500x750/0F0D23/A8B5D8.png?text=No+Poster`,
          }}
          className="w-full rounded-lg h-52 "
          resizeMode="cover"
        />
        <Text
          className="text-sm font-bold text-white mt-2 ml-2"
          numberOfLines={1}
        >
          {title}
        </Text>
        <View className="flex-row justify-between items-center px-2">
          <View className="flex-row items-center gap-1">
            <Text className="text-xs">⭐</Text>
            <Text className="text-white text-sm">
              {vote_average?.toFixed(1)}
            </Text>
          </View>
          <Text className="text-sm text-white">
            {release_date?.split("-")[0]}
          </Text>
        </View>
      </TouchableOpacity>
    </Link>
  );
};

export default MovieCard;

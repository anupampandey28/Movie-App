import Index from "@/app/(tabs)";
import { images } from "@/constants/images";
import MaskedView from "@react-native-masked-view/masked-view";
import { Link } from "expo-router";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

const TrendingCard = ({
  movie: { movie_id, title, poster_url },
  index,
}: TrendingCardProps) => {
  return (
    <Link href={`/movie/${movie_id}`} asChild>
      <TouchableOpacity className="w-32 relative pl-2">
        <Image
          source={{
            uri: poster_url,
          }}
          className="w-full h-52 rounded-lg "
          resizeMode="cover"
        />
        <View className="absolute bottom-7 -left-4 px-2 py-1 rounded-full">
          <MaskedView  maskElement={
              <Text className="font-bold text-white text-6xl">{index+1}</Text>
          }>
            <View className="bg-white size-14 " />
          </MaskedView>
        </View>
        <View>
          <Text
            className="text-sm font-bold text-white mt-5 ml-2"
            numberOfLines={1}
          >
            {title}
          </Text>
        </View>
      </TouchableOpacity>
    </Link>
  );
};

export default TrendingCard;

import { FetchMovieData } from "@/services/api";
import { updateMovieClickedCount } from "@/services/appwrite";
import { router, useLocalSearchParams } from "expo-router";
import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

interface MovieInfoProp {
  label: string;
  value?: string | number | null;
}

const formatRuntime = (runtime: number | null | undefined) => {
  if (!runtime) return "N/A";

  const hours = Math.floor(runtime / 60);
  const minutes = runtime % 60;

  return `${hours}h ${minutes}m`;
};

const MovieInfo = ({ label, value }: MovieInfoProp) => (
  <View className="flex-col items-start justify-center mt-5 ">
    <Text className="text-light-200 font-normal text-sm">{label}</Text>
    <Text className="text-light-100 font-bold text-sm mt-2">
      {value || "N/A"}
    </Text>
  </View>
);

const MovieDetails = () => {
  const { id } = useLocalSearchParams();
  const [movie, setMovie] = useState<MovieDetails | null>(null);

  useEffect(() => {
    const loadMovie = async () => {
      const data = await FetchMovieData(id.toString());
      setMovie(data);
    };
    loadMovie();
  }, [id]);

  useEffect(() => {
    const loadMovie = async () => {
      const data = await FetchMovieData(id.toString());
      setMovie(data);
      await updateMovieClickedCount(data);
    };
    loadMovie();
  }, [id]);

  return (
    <SafeAreaView className="flex-1 bg-primary justify-center items-center">
      {!movie ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <ScrollView>
          <View className="gap-4">
            <View className="w-full  rounded-t-2xl rounded-b-md overflow-hidden">
              <Image
                source={{
                  uri: movie?.backdrop_path
                    ? `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`
                    : `https://placehold.co/600x400/0F0D23/A8B5D8.png?text=No+Poster+Available`,
                }}
                className="w-full h-72"
                resizeMode="cover"
              />

              <View className="flex-row justify-between px-3 items-center w-full h-10 bg-black/40 absolute bottom-0">
                <Text className="text-light-200 text-md font-bold">
                  {movie?.title}
                </Text>

                <View className="flex-row gap-6">
                  <View className="flex-row items-center gap-0.5">
                    <Text className="text-xs/4">⭐</Text>
                    <Text className="text-light-200 text-md font-bold">
                      {movie?.vote_average?.toFixed(1)}
                    </Text>
                    <Text className="text-light-200 text-xs/3 ">
                      ({movie?.vote_count})
                    </Text>
                  </View>
                </View>
              </View>
            </View>

            <View className="pl-2">
              <View className="flex-row gap-x-4">
                <Text className="text-light-100 text-sm bg-dark-100 px-3 py-1 rounded-md">
                  {movie?.release_date?.split("-")[0]}
                </Text>
                <Text className="text-light-100 text-sm bg-dark-100 px-4 py-1 rounded-md ">
                  {formatRuntime(movie?.runtime)}
                </Text>
                <Text className="text-light-100 text-sm bg-dark-100 px-4 py-1 rounded-md ">
                  {movie?.adult ? "A+" : "U/A 16+"}
                </Text>
                <View>
                  <Text className="text-light-200 text-sm "></Text>
                </View>
              </View>
              <MovieInfo
                label="Genres"
                value={movie?.genres.map((genre) => genre.name).join("  -  ")}
              />
              <MovieInfo label="Synopsis" value={movie?.overview} />
              <View className="flex-row justify-between w-4/5">
                <MovieInfo
                  label="Budget"
                  value={`$ ${((movie?.budget ?? 0) / 1_000_000).toFixed(2)}M`}
                />
                <MovieInfo
                  label="Revenue"
                  value={`$ ${((movie?.revenue ?? 0) / 1_000_000).toFixed(2)}M`}
                />
              </View>
              <MovieInfo
                label="Production Companies"
                value={
                  movie?.production_companies
                    .map((c) => c.name)
                    .join("  -  ") || "N/A"
                }
              />
            </View>
          </View>
        </ScrollView>
      )}
      <TouchableOpacity
        className="flex-row absolute bottom-8 left-0 right-0 mx-5 justify-center gap-x-8 items-center bg-accent py-4 rounded-lg z-50"
        onPress={router.back}
      >
        <Text className="text-xl font-bold text-white">←</Text>
        <Text className="text-xl font-bold text-white">Go back</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default MovieDetails;
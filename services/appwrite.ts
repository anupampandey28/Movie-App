import { Client, Databases, ID, Query } from "react-native-appwrite";

const DB_ID = process.env.EXPO_PUBLIC_APPWRITE_DATABASE_ID!;
const TB_ID = process.env.EXPO_PUBLIC_APPWRITE_TABLE_ID!;

// Creating Client

const client = new Client()
  .setEndpoint("https://sgp.cloud.appwrite.io/v1")
  .setProject(process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID!)
  .setPlatform("com.anupam.movieapp");

const database = new Databases(client);

export const updateMovieClickedCount = async (movie: MovieDetails) => {
  try {
    const res = await database.listDocuments(DB_ID, TB_ID, [
      Query.equal("movie_id", movie.id),
    ]);
    if (res.documents.length > 0) {
      const exixtingMovie = res.documents[0];

      await database.updateDocument(DB_ID, TB_ID, exixtingMovie.$id, {
        count: exixtingMovie.count + 1,
      });
    } else {
      await database.createDocument(DB_ID, TB_ID, ID.unique(), {
        count: 1,
        movie_id: movie.id,
        poster_url: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
        title: movie.title,
      });
    }
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const getTrendingMovies = async (): Promise<
  TrendingMovie[] | undefined
> => {
  try {
    const res = await database.listDocuments(
      DB_ID, 
      TB_ID,
      [
        Query.limit(10),
        Query.orderDesc('count'),
      ]
    );

    return res.documents as unknown as TrendingMovie[];
  } catch (error) {
    console.log(error);
    return undefined;
  }
};

export const MOVIEDB_CONFIG  = {
  BASE_URL : 'https://api.themoviedb.org/3',
  API_KEY : process.env.EXPO_PUBLIC_MOVIE_API_KEY,
  headers:{
    accept:"application/json",
    Authorization: `Bearer ${process.env.EXPO_PUBLIC_MOVIE_API_KEY}`,
  }
}

export const fetchMovies = async ({query}:{query:string}) =>{
  const endpoint =  query
  ?`${MOVIEDB_CONFIG.BASE_URL}/search/movie?query=${encodeURIComponent(query)}`
  :`${MOVIEDB_CONFIG.BASE_URL}/discover/movie?sort_by=popularity.desc`;

  const res = await fetch(endpoint , {
    method:"GET",
    headers:MOVIEDB_CONFIG.headers,
  })
  

  if(!res.ok){
    throw new Error(`Failed to fetch movies, ${res?.statusText}`);
  }

  const data = await res.json()

  return data.results;
}


// Fetch Movie Details By id
export const FetchMovieData = async (id: string):Promise<MovieDetails> => {
  try {
    const res = await fetch(`${MOVIEDB_CONFIG.BASE_URL}/movie/${id}`, {
      method: "GET",
      headers: MOVIEDB_CONFIG.headers,
    });
  
    if (!res.ok) {
      throw new Error(`Failed to fetch movie data: ${res.statusText}`);
    }
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error)
    throw(error)
  }
};

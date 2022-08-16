import React from 'react'

const MovieService = () => {

   const _apiBase = "https://api.themoviedb.org/3";
   const _apiKey = "8a889d86688e82341a3066e97fac71f0";
   const _newMovie = "/movie/latest";

   const getResources = async url => {
      let res = await fetch(url);
      if (!res.ok){
         throw new Error(`Could not fetch ${url}, status: ${res.status}`);
      }
      return await res.json();
   }

   const getNewMovies = async () => {
      return await getResources(`${_apiBase}${_newMovie}?api_key=${_apiKey}&language=en-US`)
   }

   return (
      <>
         
      </>
   )
}

export default MovieService
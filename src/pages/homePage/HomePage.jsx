import React from 'react'
import MovieList from '../../components/movieList/MovieList';
import MainButton from '../../components/UI/mainButton/MainButton';
import cl from './HomePage.module.css'

const HomePage = () => {

   return (
      <div className={cl.homePage}>
         <div className={cl.container}>
            <div className={cl.hero}>
               <div className={cl.hero__container}>
                  <h2 className={cl.hero__title}>Doctor Strange: In the Multiverse of Madness</h2>
                  <MainButton>Learn more</MainButton>
               </div>
            </div>
            <MovieList />
         </div>
      </div>
   )
}

export default HomePage
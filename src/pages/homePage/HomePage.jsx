import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { getMovie } from '../../actions/MovieAction';
import MainButton from '../../components/UI/mainButton/MainButton';
import cl from './HomePage.module.css'

const HomePage = () => {

   const items = useSelector(state => state.movie.items);
   const dispatch = useDispatch();

   useEffect(() => {
      dispatch(getMovie());
   }, [])

   console.log(items);


   return (
      <div className={cl.homePage}>
         <div className={cl.container}>
            <div className={cl.hero}>
               <div className={cl.hero__container}>
                  <h2 className={cl.hero__title}>Doctor Strange: In the Multiverse of Madness</h2>
                  <MainButton>Learn more</MainButton>
               </div>
            </div>
         </div>
      </div>
   )
}

export default HomePage
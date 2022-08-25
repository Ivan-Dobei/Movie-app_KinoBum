import React from 'react'
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'
import HomePage from './pages/homePage/HomePage'
import MoviePage from './pages/moviePage/MoviePage'
import MovieListPage from './pages/movieListPage/MovieListPage'
import cl from './App.module.css'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import FavoritePage from './pages/favoritePage/FavoritePage'

const App = () => {


   return (
      <div className={cl.app}>
         <BrowserRouter>
            <Header />
            <Routes>
               <Route path='/' element={<HomePage />} />
               <Route path='movies' element={<MovieListPage />} />
               <Route path='favorites' element={<FavoritePage />} />
               <Route path='movie:id' element={<MoviePage />} />
            </Routes>
            <Footer />
         </BrowserRouter>
      </div>
   )
}

export default App

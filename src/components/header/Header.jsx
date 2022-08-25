import React from 'react'
import MyInput from '../UI/myInput/MyInput'
import Logo from '../UI/logo/Logo'
import cl from './Header.module.css'
import BurderBtn from '../UI/burgerBtn/BurgerBtn'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getBtnStateAction } from '../../store/reducers/BurgerReducer'

const Header = () => {

   const dispatch = useDispatch();
   const btn = useSelector(state => state.burger.btnState);

   const checkBtn = () => {
      dispatch(getBtnStateAction());
      console.log(btn);
   }

   return (
      <header className={cl.header}>
         <div className={cl.header__container}>
            <div className={cl.header__block}>
               <BurderBtn onClick={checkBtn} />
               <ul
                  className={btn ? cl.header__list__open : cl.header__list__close}
               >
                  <li className={cl.header__item}>
                     <Link
                        onClick={checkBtn}
                        className={cl.header__link}
                        to='/'
                     >
                        Home</Link>
                  </li>
                  <li className={cl.header__item}>
                     <Link
                        onClick={checkBtn}
                        className={cl.header__link}
                        to='/movies'
                     >
                        Movie</Link>
                  </li>
                  <li className={cl.header__item}>
                     <Link
                        onClick={checkBtn}
                        className={cl.header__link}
                        to='/favorites'
                     >
                        Favorite</Link>
                  </li>
               </ul>
               <Logo />
            </div>
            <MyInput
               placeholder="Search..."
            />
         </div>
      </header>
   )
}

export default Header
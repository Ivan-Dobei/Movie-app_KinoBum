import React from 'react'
import MyInput from '../UI/myInput/MyInput'
import cl from './Header.module.css'

const Header = () => {
   return (
      <div className={cl.header}>
         <div className={cl.header__container}>
            <div className={cl.header__block}>
               <button className={cl.header__burger}>
                  <span className={cl.burger__line}></span>
               </button>
               <h3 className={cl.logo}>Kino<span className={cl.logo__blue}>Bum</span></h3>
            </div>
            <MyInput
               placeholder="Search..."
            />
         </div>
      </div>
   )
}

export default Header
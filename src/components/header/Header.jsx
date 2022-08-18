import React from 'react'
import MyInput from '../UI/myInput/MyInput'
import Logo from '../UI/logo/Logo'
import cl from './Header.module.css'

const Header = () => {
   return (
      <header className={cl.header}>
         <div className={cl.header__container}>
            <div className={cl.header__block}>
               <button className={cl.header__burger}>
                  <span className={cl.burger__line}></span>
               </button>
               <Logo/>
            </div>
            <MyInput
               placeholder="Search..."
            />
         </div>
      </header>
   )
}

export default Header
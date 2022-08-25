import React from 'react'
import cl from './BurgerBtn.module.css'

const BurgerBtn = ({ ...props }) => {
   return (
      <button
         {...props}
         className={cl.burgerBtn}
      >
         <span className={cl.burgerLine}></span>
      </button>
   )
}

export default BurgerBtn
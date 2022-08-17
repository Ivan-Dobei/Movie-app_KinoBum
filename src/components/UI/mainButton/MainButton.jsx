import React from 'react'
import cl from './MainButton.module.css'

const MainButton = ({ children, ...props }) => {
   return (
      <button
         {...props}
         className={cl.mainButton}
      >
         {children}
      </button>
   )
}

export default MainButton
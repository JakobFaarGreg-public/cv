import React, { createContext, useState } from 'react'


const IsEditingContext = createContext()

const IsEditingProvider = ({children}) => {
    const [isEditing, setIsEditing] = useState(false)
    
    return (
    <IsEditingContext.Provider value={{isEditing, setIsEditing}} >
        {children}
    </IsEditingContext.Provider>
  )
}

export {IsEditingContext, IsEditingProvider}
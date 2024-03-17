import React, { createContext } from 'react'
export const person = createContext()
const Context = ({children}) => {
  return (
    <person.Provider value={{name:"durgesh",age:"23"}}>
        {children}
    </person.Provider>
  )
}

export default Context
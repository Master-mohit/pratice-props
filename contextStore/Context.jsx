import React, { createContext, useState } from 'react'
export const mycontext = createContext();

const Context = ({children}) => {

    const [add, setadd] = useState(0)
  return (
    <div>
      <mycontext.Provider value={{add , setadd}}>
           {children}
      </mycontext.Provider>
    </div>
  )
}

export default Context

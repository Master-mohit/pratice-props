import React, { createContext, useState } from 'react'
export const mycontext = createContext();


const Context = ({children}) => {
    const [ginti, setginti] = useState(0)
  return (
    <div>
      <mycontext.Provider value={{ginti, setginti}}>
        {children}
      </mycontext.Provider>
    </div>
  )
}

export default Context

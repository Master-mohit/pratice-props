import React, { useState } from 'react'
import CountDisplay from '../components/CountDisplay';

const App = () => {
  const [ginti, setginti] = useState(0)
  const countHandler = () => {
    setginti (ginti + 1);
    console.log(ginti);
    
  }
  return (
    <div className='w-screen h-screen bg-gray-700 p-[25px] text-white flex items-center justify-center flex-col'>
    <CountDisplay manage = {ginti} />
      <div className='m-5 text-[28px] border-2 min-w-min max-h-min p-4 overflow-hidden text-center rounded '>
        <button onClick={countHandler}>Update</button>
      </div>
    </div>
  )
}

export default App

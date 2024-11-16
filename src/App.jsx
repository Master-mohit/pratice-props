import React, { useContext} from 'react'
import { mycontext } from '../contextStore/Context'

const App = () => {

 const {ginti, setginti} = useContext(mycontext)
  const countHandler = () => {
setginti(ginti + 1);
console.log(ginti);

    
    
  }
  return (
    <div className='w-screen h-screen bg-gray-700 p-[25px] text-white flex items-center justify-center flex-col'>
    <div className='text-[35px] w-64 h-56 border-2 flex items-center justify-center rounded'>
    {ginti}
      </div>
      <div className='m-5 text-[28px] border-2 min-w-min max-h-min p-4 overflow-hidden text-center rounded '>
        <button onClick={countHandler}>Update</button>
      </div>
    </div>
  )
}

export default App

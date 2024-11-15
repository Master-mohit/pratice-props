import React from 'react'

const CountDisplay = ({manage}) => {
  return (
    <div>
        <div className='text-[35px] w-64 h-56 border-2 flex items-center justify-center rounded'>
        {manage}
      </div>
    </div>
  )
}

export default CountDisplay

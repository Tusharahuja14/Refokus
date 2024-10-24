import React from 'react'
import { Button } from './Button'

const Product = ({val,mover,count}) => {
  return (
    <div className='w-full py-20 h-[18rem] text-white'>
        <div onMouseEnter={()=>{mover(count)}} className='max-w-screen-lg mx-auto flex items-center justify-between'>
          <h1 className='text-6xl capatalize font-semibold'>{val.title}</h1>
          <div className='dets w-1/3'>
            <p>{val.description}.</p>
            <div className='flex gap-5 items-center'>
            {val.live&&<Button title='Hello'/>}
          {
            val.case&&<Button title='Case Study'/>
          }
            </div>
         
          </div>
        </div>
    </div>
  )
}

export default Product
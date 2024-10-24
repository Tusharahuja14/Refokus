import React from 'react'
import { Button } from './Button';
import logo from './innovative.png';


const Navbar = () => {
  return (
    <div className='max-w-screen-lg mx-auto py-2 flex items-center justify-between border-b-[1px] border-zinc-700'>
       <div className='nleft flex items-center  '>
       <img src={logo} alt="" className='h-[4rem] w-[8rem] rounded-lg'/>
        <div className='links flex gap-14 ml-20'>

       {["Home","Work","Culture","","News"].map((elem,index)=>elem.length===0?<span key={index} className='h-7 w-[2px] bg-zinc-700'></span>:<a key={index} className='text-sm flex items-center gap-1 font-regular' href='#'>
        {index===1?(<span  style={{boxShadow: "0 0 0.45em #00FF19"}} className='inline-block w-1 h-1 bg-green-500 rounded-full'></span>):null}
        {elem}</a>)}
        <Button/>
        </div>
        
       </div>
    </div>
  )
}

export default Navbar;
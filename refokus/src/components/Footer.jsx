import React from 'react'

const Footer = () => {
  return (
    <div className='w-full'>
      <div className='max-w-screen-lg mx-auto py-10 flex gap-32 overflow-hidden'>
        <div className='basis-1/2'>
        <h5 className='text-[6rem] font-semibold leading-none tracking-tight'>innovative.</h5>

        </div>
        <div className='basis-1/2 flex gap-4'>
        <div className='basis-1/3'>
          <h4 className='mb-10 text-zinc-500 capitalize'>socials</h4>
         { ["instagram","twitter(x?)","LinkdIn"].map((item,index)=><a key={index} className='block mt-3 text-zinc-600 capitalize'>{item}</a>)}
        </div>
        <div className='basis-1/3'>
          <h4 className='mb-10 text-zinc-500 capitalize'>socials</h4>
         { ["instagram","twitter(x?)","LinkdIn"].map((item,index)=><a key={index} className='block mt-3 text-zinc-600 capitalize'>{item}</a>)}
        </div>
        </div>
        <div className='basis-1/2 flex flex-col items-end '>
        <p className='text-right text-align content-fit max-w-xs'>Here is the website that we created to show our work</p>
        <img src="https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/6637ba0d8481b4339b1cda4f_Frame%2048097733.svg" alt=""className='w-32 mt-10 '/>
        </div>
      </div>
    </div>
  )
}

export default Footer
import { motion } from 'framer-motion';
import React from 'react'
import { IoIosArrowRoundForward } from "react-icons/io";

const Card = ({width,start,para,hover='false'}) => {
  return (
    <motion.div whileHover={{backgroundColor:hover==='true'&&"#7443ff",padding:"25px"}} className={`bg-zinc-800 p-5 rounded-xl ${width} min-h-[30rem] flex flex-col justify-between `}>
        <div className='w-full'>
        <div className='w-full flex justify-between items-center'>
            <h3>one heading</h3>
            <IoIosArrowRoundForward />

        </div>
        <h1 className=' text-3xl font-medium mt-5'>Whatever Heading.</h1>
        </div>
        <div className='w-full down '>
            {start&&( <> <h1 className='text-5xl font-semibold tracking-tight leading-none'>start a project</h1>
            <button className='rounded-full py-2 px-3 border-zinc-50 border-[2px] mt-5'>Contact us</button></>)}
            { para&&(<p className='text-sm text-zinc-700 font-medium mt-5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam itaque quis, temporibus ipsam modi repellendus tempora beatae, laboriosam non voluptas inventore quidem atque officia dolorum quibusdam illo tenetur ullam harum?</p>)}
        </div>
       
    </motion.div>
  )
}

export default Card
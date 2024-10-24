import { motion } from 'framer-motion';
import React from 'react'

const Marque = ({imagesurls,direction}) => {
  
  return (
    <div className='flex w-full overflow-hidden gap-40'>
    <motion.div initial={{x:direction==='left'?'0':'-100%'}} animate={{x:direction==="left"?"-100%":"0"}} transition={{ease:"linear",duration:15,repeat:Infinity}} className='flex flex-shrink-0 w-full py-10 pr-40 gap-40 '>
         {imagesurls.map((url,index)=><img key={index} src={url} className='flex-shrink-0 w-[6vw]'/>)}
         {imagesurls.map((url,index)=><img key={index} src={url} className='flex-shrink-0 w-32'/>)}
    </motion.div>
    <motion.div initial={{x:direction==='left'?'0':'-100%'}} animate={{x:direction==="left"?"-100%":"0"}} transition={{ease:"linear",duration:15,repeat:Infinity}} className='flex flex-shrink-0 w-full py-10 pr-40 gap-40 '>
         {imagesurls.map((url,index)=><img key={index} src={url} className='flex-shrink-0 w-[6vw]'/>)}
         {imagesurls.map((url,index)=><img key={index} src={url} className='flex-shrink-0 w-32'/>)}
    </motion.div>
    </div>
  )
}

export default Marque;
import React from 'react'
import Marque from './Marque'

const Marquees = () => {
    var images=[
        ['https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/65b2d275e12177716cb3f2ea_basf.svg', 'https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/65b2d27505e3a120466b87aa_singularity.svg', 'https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/65b2d275c2fcf540272672ef_intenseeye.svg', 'https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/65b2d27518bb52e4d642644e_bcgp.svg', 'https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/65b2d2756e8df24e52915c71_flowcode.svg', 'https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/65b2d275e1d5aa08ccc379dd_ypo.svg', 'https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/65b2d275909535ff431975cf_lavender.svg', 'https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/65b2d36963b956910ca67534_remind.svg', 'https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/65b2d36963b956910ca67534_remind.svg'],
        ['https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/65b2d275e12177716cb3f2ea_basf.svg', 'https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/65b2d27505e3a120466b87aa_singularity.svg', 'https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/65b2d275c2fcf540272672ef_intenseeye.svg', 'https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/65b2d27518bb52e4d642644e_bcgp.svg', 'https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/65b2d2756e8df24e52915c71_flowcode.svg', 'https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/65b2d275e1d5aa08ccc379dd_ypo.svg', 'https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/65b2d275909535ff431975cf_lavender.svg', 'https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/65b2d36963b956910ca67534_remind.svg', 'https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/65b2d36963b956910ca67534_remind.svg']
    ]
  return (
    <div className='py-20 mt-20 w-full relative overflow-hidden'>
        {images.map((item,index)=><Marque key={index} imagesurls={item} direction={index===0?"left":"right"}/>)}
    </div>
  )
}

export default Marquees
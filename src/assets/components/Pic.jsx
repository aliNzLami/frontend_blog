import React from 'react'
import Centered from './Centered'

function Pic({src, alt}) {
    return (
        <Centered>
            <img 
                src={src} 
                className='rounded-10 dBlock mb-50 fullImgMobile'
                alt={alt}
            />
        </Centered>
    )
}

export default Pic
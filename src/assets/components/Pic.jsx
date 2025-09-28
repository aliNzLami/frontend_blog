import React, { useState } from 'react'
import Centered from './Centered'

function Pic({src, alt}) {

    const [open, setOpen] = useState(false);

    return (
        <Centered>
            <img 
                src={src} 
                className='rounded-10 dBlock mb-50 fullImgMobile thumbnail'
                alt={alt}
                onClick={() => setOpen(true)}
            />

            {open && (
                <div className="modal" onClick={() => setOpen(false)}>
                <div className="overlay" />
                    <img src={src} className="modal-img" alt={alt} />
                </div>
            )}
        </Centered>
    )
}

export default Pic
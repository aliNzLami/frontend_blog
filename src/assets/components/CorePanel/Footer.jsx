import React from 'react'

function Footer() {

    const contact = [
        {
            title: 'About',
            link: 'https://alinzlami.github.io/aliLamiry-portfolio/'
        },

        {
            title: 'GitHub',
            link: 'https://github.com/aliNzLami'
        },

        {
            title: 'Email',
            link: 'ali.nabizadeh79@yahoo.com'
        },

        {
            title: 'YouTube',
            link: ''
        },
    ]
    return (
        <footer>
            <div className='footer_links'>
                {
                    contact.map(item => {
                        return(
                            <a key={item.title} target='_blank' href={item.link}>
                                { item.title }
                            </a>
                        )
                    })
                } 
            </div>

            <p className='emoComplie'>
                Compiled with feelings
            </p>
        </footer>
    )
}

export default Footer
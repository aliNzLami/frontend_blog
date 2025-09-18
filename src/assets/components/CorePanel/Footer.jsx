import React from 'react'

function Footer() {

    const contact = [
        {
            title: 'About',
            link: ''
        },

        {
            title: 'GitHub',
            link: ''
        },

        {
            title: 'Email',
            link: ''
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
import React from 'react'

function HomeHeader() {
  return (
    <header className='header-font main-gray'>
        <h1 className='header-homePage'>
          Ali's blog
        </h1>
        <h2 className='normal-font subHeader-homePage'>
          <span className='dBlock'>
            This is my journey in frontend development.
          </span>
          <span className='dBlock'>
            When I face an interesting challenge,
          </span>
          <span className='dBlock'>
            I share it here 👀
          </span>
        </h2>

        <h3 className='whoAmI'>
          <a href="">
            wH0 aM i ؟
          </a>
        </h3>
      </header>
  )
}

export default HomeHeader
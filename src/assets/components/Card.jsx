import React from 'react'

function Card({data}) {

    return (
      <div className='cardBox'>
        <div>
          <h4 className='header-font main-gray'>
            { data?.title??"" }
          </h4>
          <p className='normal-font main-gray'>
            { data?.subTitle??"" }
          </p>
        </div>
        <span className='dBlock normal-font main-gray'>
          { data?.time??"" } min
        </span>
      </div>
    )
}

export default Card
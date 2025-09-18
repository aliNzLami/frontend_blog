import React from 'react'

function Card({tag, data}) {

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
        <div className='footerCard'>
          <span className='dBlock normal-font main-gray'>
            { data?.time??"" } min
          </span>
          {
            tag 
            ?
              <img width={20} src={tag} alt={`${data?.tag??""} icon`} />
            : 
              ""
          }
        </div>
      </div>
    )
}

export default Card
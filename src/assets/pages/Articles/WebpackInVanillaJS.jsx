import React, { useEffect } from 'react'
import ArticlesHeader from '../../components/ArticlesHeader'

function WebpackInVanillaJS() {

  const getData = () => {
    let data = localStorage.getItem('article');
    data = JSON.parse(data);
    return data;
  }
  
  return (
    <div>
      <ArticlesHeader 
        data={getData()}
      />
    </div>
  )
}

export default WebpackInVanillaJS
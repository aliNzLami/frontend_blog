import React, { useContext } from 'react';
import {Routes, Route} from "react-router";

import './assets/style/main.css';

// Context
import { RoutesList } from './assets/context/RoutesList';

// GSAP
// import gsap from 'gsap';
// import { ScrollTrigger } from 'gsap/all';
// gsap.registerPlugin(ScrollTrigger);

function App() {

  const routesList = useContext(RoutesList);

  return (
      <main>
        <div className='wholeMain' />

        <Routes>
          <Route key="blog">
            {
              routesList
              &&
              Object.entries(routesList).map( (route) => {
                // route --> ['home', {…}] 
                return (
                  <Route key={route[0]} path={route[1].url} element={route[1].element} />
                )
              } )
            }
          </Route>
        </Routes>
      </main>
  )
}

export default App

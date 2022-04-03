import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
  Link,
} from 'react-router-dom'

import Home from '../pages/Home';
import FormRecomendation from '../pages/FormRecomendation';
import { Card } from '../../infrastructure/common'

import './style.css'

export default function HomeLayout () {
  const [currentLocation, setCurrentLocation] = useState('home');

  return (
    <Router>
      <div className='container'>
        {/* <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav> */}

        <Card className='header-container'>
          <div className='flex-row-space-between'>
            <div className='flex-row'>
              <Link to="/" onClick={() => setCurrentLocation('home')} className='breadcrumb-item'>Home</Link>
              {
                currentLocation !== 'home' && <>
                  <span className='breadcrumb-item separator'> / </span>
                  <Link to="/recomendation/form" onClick={() => setCurrentLocation('/recomendation/form')} className='breadcrumb-item'>formulario</Link>
                </>
              }
            </div>
            <Link to="/recomendation/form" onClick={() => setCurrentLocation('/recomendation/form')} className='add-button'>Agregar recomendación</Link>
          </div>
        </Card>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/recomendation/form" element={<FormRecomendation />} />
          <Route path="/" element={<Home />} />
        </Switch>
      </div>
    </Router>
  );
}
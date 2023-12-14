// src/Layout.js
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import HomeView from './views/HomeView';
import FormView from './views/FormView';
import injectContext from './store/appContext';

const Layout = () => {
  const basename = process.env.BASENAME || '';

  return (
    <div>
      <BrowserRouter basename={basename}>
       
          <Routes>
            <Route path="/home-view" element={<HomeView />} />
            <Route path="/form-view" element={<FormView />} />
          </Routes>
       
        
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);

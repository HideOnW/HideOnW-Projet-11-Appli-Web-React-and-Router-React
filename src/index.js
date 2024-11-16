import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import './css/index.css';
import Home from './page/home/index.jsx'
import Propos from './page/propos/propos.jsx'
import Error from './page/error/error.jsx'

import reportWebVitals from './reportWebVitals';
import Logement from './page/logement/logement.jsx';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/propos" element={<Propos />} />
        <Route path="/logement/:id" element={<Logement />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  </React.StrictMode>
);

reportWebVitals();

import React from 'react';
import {render} from 'react-dom';
import './index.css';
import App from './App'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'


render(
  <Router>
    <Routes>
      <Route path='/' element={<App />}>
      </Route>
    </Routes>
  </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
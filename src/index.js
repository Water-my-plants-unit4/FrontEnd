import React from 'react';
import {createRoot} from 'react-dom/client';
import './index.css';
import App from './App'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Login from './components/Login';


const container = document.getElementById('root')
const root = createRoot(container)



root.render(
  <Router>
    <Routes>
      <Route path='/' element={<App />}>
        <Route path='login' element={<Login />} />
      </Route>
    </Routes>
  </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

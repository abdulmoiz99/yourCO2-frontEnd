import React from 'react'
// import './index.css';
import * as ReactDOMClient from 'react-dom/client';

import { BrowserRouter, Route, Routes } from 'react-router-dom'

// import App from './App';
import reportWebVitals from './reportWebVitals'
import Index from './views/Index'
import Login from './componenets/Auth/Login';
import Register from './componenets/Auth/Register';

const root = ReactDOMClient.createRoot(document.getElementById('root'))
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Index />}></Route>
      <Route path="/auth" element={<Login />}></Route>
      <Route path="/auth/register" element={<Register />}></Route>

    </Routes>
  </BrowserRouter>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()

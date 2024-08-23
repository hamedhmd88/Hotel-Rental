import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.scss'
import { BrowserRouter } from 'react-router-dom'
import ContextProvider from './Context/ContextProvider.jsx'
import { SearchFilter } from './componnets/filter/Filter.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <SearchFilter>
  <ContextProvider>
    <App />
    </ContextProvider>
    </SearchFilter>
    </BrowserRouter>
)

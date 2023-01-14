import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import ProductContext from './context/ProductContext'
import './styles/global.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  
  <BrowserRouter>
  <ProductContext>
    {/* wrapping the app component with browserrouter for routing  */}
    <App />
    </ProductContext>
  </BrowserRouter>

)

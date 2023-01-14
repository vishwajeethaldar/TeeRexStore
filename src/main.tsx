import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import ErrorContext from './context/ErrorContext'
import ProductContext from './context/ProductContext'
import './styles/global.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(

  <BrowserRouter>
  {/* wrapping the app component with browserrouter for routing  */}
  <ProductContext>
    <ErrorContext>
      {/*  App module is wrapped by Error Context and Product context to maintain global context fo these two  */}
      <App />
    </ErrorContext>
    </ProductContext>
  </BrowserRouter>

)

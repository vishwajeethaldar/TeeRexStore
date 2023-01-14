import {Routes, Route} from 'react-router-dom'
import { Home, Cart } from '../pages'

export default function index() {
  return (
    <Routes>
          <Route path="/"  element={<Home/>}/>
          <Route path="/cart" element={<Cart/>}/>
    </Routes>
  )
}

import style from '../../styles/Navbar.module.css'   // importing css module for Navbar 
import {Link} from 'react-router-dom'
import CartItem from '../cart/CartIcon'


// Navbar Component
export default function Navbar() {
  return (
    <nav className={style.container}>
        <Link to={"/"} className={style.linktext}> 
                TeeRex Store 
        </Link>

        <div className={style.rightpart}>
            <Link to={"/"} className={style.linktext}>  
                  Products
            </Link>

            <Link to={"/cart"} className={style.linktext}>  
                <CartItem/>
            </Link>


        </div>

    </nav>
  )
}

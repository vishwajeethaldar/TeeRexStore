import style from '../../styles/Navbar.module.css'   // importing css module for Navbar 
import {Link} from 'react-router-dom'
import CartItem from '../cart/CartIcon'


// Navbar Component
export default function Navbar() {
  return (
    <nav className={style.container}>
        <Link to={"/"} className={style.linktext}> 
                {/* TeeRex Store  */}
                <img src="/img/TeerexLogo.png" alt="Teerex" className={style.brandlogo}/>
        </Link>

        <div className={style.rightpart}>
            <Link to={"/"} className={style.linktext}>  
                  <span className={style.underline}> Products </span>
            </Link>

            <Link to={"/cart"} className={style.linktext}>  
                <CartItem/>
            </Link>


        </div>

    </nav>
  )
}

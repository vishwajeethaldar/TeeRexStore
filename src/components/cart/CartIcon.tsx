import {useContext} from 'react'
import {AiOutlineShoppingCart} from 'react-icons/ai'  // Cart icon from rect-icons
import style from '../../styles/CartIcon.module.css'  // css style 
import {productContext} from '../../context/ProductContext'

// Cart icon on top navbar 
export default function CartItem() {
  const {contval} = useContext(productContext)

  return (
    <div className={style.container}>
      <p className={style.itemcount}>
          {contval.totalcartItem}
      </p>  
      <div className={style.icon}>
          <AiOutlineShoppingCart/>
      </div>
    </div>
  )
}

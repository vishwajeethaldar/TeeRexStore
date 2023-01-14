import {useContext} from 'react'
import {AiOutlineShoppingCart} from 'react-icons/ai'  // Cart icon xs
import style from '../../styles/CartIcon.module.css'  // css style 
import {productContext} from '../../context/ProductContext'

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

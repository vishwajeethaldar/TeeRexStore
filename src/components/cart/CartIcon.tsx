
import {AiOutlineShoppingCart} from 'react-icons/ai'  // Cart icon xs
import style from '../../styles/CartIcon.module.css'  // css style 

export default function CartItem() {
  return (
    <div className={style.container}>
      <p className={style.itemcount}>
          1 
      </p>  
      <div className={style.icon}>
          <AiOutlineShoppingCart/>
      </div>
    </div>
  )
}

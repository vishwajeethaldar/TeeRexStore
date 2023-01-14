
import { useContext } from 'react'
import { productContext } from '../../context/ProductContext'
import styles from '../../styles/TotalPriceCard.module.css'
import { Button } from '../Button'

export default function TotalPriceCard({totalPrice}:{totalPrice:number}) {
  const {contval} = useContext(productContext)
  
  return (
    <div className={styles.container}>
          <div className={styles.priceInfo}>
              <h2> Total Added Products : {contval.totalcartItem<10?'0'+contval.totalcartItem:contval.totalcartItem}</h2>
              <h2> Total Price : {totalPrice}</h2>
          </div>

          <Button text='Proceed to Checkout'/>
    </div>
  )
}

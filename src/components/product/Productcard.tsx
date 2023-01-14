import { product } from '../../interface'  //Typescript interface for products
import styles from '../../styles/Productcard.module.css'
import { Button } from '../Button'

export default function Productcard({product}:{product:product}) {
  
  return (
    <div className={styles.container}>
        <h3 className={styles.productname}> {product.name} </h3>
        <img src={product.imageURL} alt={product.name} className={styles.productimg}/>
    
        <section className={styles.bottomsection}>
          <p>
            Rs {product.price}
          </p>
          {
          !product.addedtocart?
            <div className={styles.addCartitem}>
                <Button text='Add to Cart'/>
            </div>
          :
            <div className={styles.updateCartitem}>
                <Button text='+'/>
                <p>{product.count}</p>
                <Button text='-'/>
            </div>
          }
             
             
        </section>
    </div>
  )
}

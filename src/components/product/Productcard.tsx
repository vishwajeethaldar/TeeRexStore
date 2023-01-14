import { useContext } from 'react'
import { productContext } from '../../context/ProductContext'
import { product } from '../../interface'  //Typescript interface for products
import styles from '../../styles/Productcard.module.css'
import { addCount, addtoCart, reduceCount } from '../../utils/cartfunctions'
import { Button } from '../Button'

export default function Productcard({product}:{product:product}) {
  const {contval, setConval} = useContext(productContext);

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
                <Button text='Add to Cart' onClick={()=>{addtoCart(product,contval,setConval)}}/>
            </div>
          :
            <div className={styles.updateCartitem}>
                <Button text='+' onClick={()=>addCount(product,contval,setConval)}/>
                <p>{product.count}</p>
                <Button text='-' onClick={()=>reduceCount(product,contval,setConval)}/>
            </div>
          }
             
             
        </section>
    </div>
  )
}

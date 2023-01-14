import React from 'react'
import { product } from '../../interface';
import styles from '../../styles/CartItemcard.module.css'
import { addCount, reduceCount, deleteProductFromCart} from '../../utils/cartfunctions';
import { Button } from '../Button';

export default function CartItemcard({product,contval,setConval}:{product:product, contval:any, setConval:Function}) {

   return (
        <main className={styles.cartproduct}>
            
                <img src={product.imageURL} alt={product.name} className={styles.productimg}/>
                
                <div className={styles.prodctinfo}>
                    <h4 className={styles.productname}> {product.name} </h4>
                    <p className={styles.productprice}> Rs. {product.price}</p>
                </div>
          
                <div className={styles.updateCartitem}>
                    <Button text='+' onClick={()=>addCount(product,contval,setConval)}/>
                    <p>{product.count}</p>
                    <Button text='-' onClick={()=>reduceCount(product,contval,setConval)}/>
                </div>

                <div className={styles.removebtn}>
                    <Button text='Delete' onClick={()=>deleteProductFromCart(product,contval,setConval)}/>
                </div>
           
        </main>
  )
}

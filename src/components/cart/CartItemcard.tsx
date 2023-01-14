import React from 'react'
import { errorContext } from '../../context/ErrorContext';
import { product } from '../../interface';
import styles from '../../styles/CartItemcard.module.css'
import { addCount, reduceCount, deleteProductFromCart} from '../../utils/cartfunctions';
import { Button } from '../Button';

// Cart items card 
export default function CartItemcard({product,contval,setConval}:{product:product, contval:any, setConval:Function}) {
   
    const {error, setError} = React.useContext(errorContext)

    const handleaddCount = ()=>{
        if(product.count===product.quantity){
          setError(true)
        }else{
          addCount(product,contval,setConval)
        }
    }


   return (
        <main className={styles.cartproduct}>
                <img src={product.imageURL} alt={product.name} className={styles.productimg}/>
                
                <div className={styles.prodctinfo}>
                    <h4 className={styles.productname}> {product.name} </h4>
                    <p className={styles.productprice}> Rs. {product.price}</p>
                </div>
          
                <div className={styles.updateCartitem}>
                    <Button text='+' onClick={handleaddCount}/>
                    <p>{product.count}</p>
                    <Button text='-' onClick={()=>reduceCount(product,contval,setConval)}/>
                </div>

                <div className={styles.removebtn}>
                    <Button text='Delete' onClick={()=>deleteProductFromCart(product,contval,setConval)}/>
                </div>
           
        </main>
  )
}

import { useContext, useEffect, useState } from 'react'
import AlertMsg from '../components/AlertMsg';
import CartItemcard from '../components/cart/CartItemcard';
import TotalPriceCard from '../components/cart/TotalPriceCard';
import Navbar from '../components/nav/Navbar'
import { productContext } from '../context/ProductContext'
import { product } from '../interface';
import styles from '../styles/Cart.module.css'

export default function Cart() {
  const {contval, setConval} = useContext(productContext);   // productContext 

  const [totalPrice, setTotalprice] =  useState<number>(0)  // state to update and maintain total price 

  
  // fucntion will calculate the total price 
  const countTotalPrice =()=>{
    let total = 0
    for(let product of contval.products){
          if(product.addedtocart){
            let cost  = product.count*product.price
            total= total+cost;
          }
    }
    // updating the total price
    setTotalprice(total)
  }

  // every time when  contval context chnages call the countTotalPrice function to update the total price 
  useEffect(()=>{
    countTotalPrice()
  },[contval])


  return (
    <div className={styles.container}>
      <Navbar/>
      <main className={styles.main}>
        <section className={styles.cartitems}>
            {contval.products.map((product:product)=>{
                return product.addedtocart && <CartItemcard product={product} contval={contval} setConval={setConval} key={product.id}/>
            })}
            {contval.totalcartItem===0 && <img src="/img/emptycart.png" alt="empty cart" className={styles.emptycartimg}/>}
        </section>

        <aside className={styles.totalPriceInfo}>
              {contval.totalcartItem>0 && <TotalPriceCard totalPrice={totalPrice}/>}
        </aside>
      </main>
     
     {/* Error Alert */}
     <AlertMsg type='error' title="Error" description='We have limited quantity for this product in our store, we will notify you when we avail more products in our store' duration={5}/>  
      
    </div>
  )
}

import { useContext, useEffect, useState } from 'react'
import CartItemcard from '../components/cart/CartItemcard';
import TotalPriceCard from '../components/cart/TotalPriceCard';
import Navbar from '../components/nav/Navbar'
import { productContext } from '../context/ProductContext'
import { product } from '../interface';
import styles from '../styles/Cart.module.css'

export default function Cart() {
  const {contval, setConval} = useContext(productContext);
  const [totalPrice, setTotalprice] =  useState<number>(0)

  const countTotalPrice =()=>{
    let total = 0
    for(let product of contval.products){
          if(product.addedtocart){
            let cost  = product.count*product.price
            total= total+cost;
          }
    }
    setTotalprice(total)
  }

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
        </section>

        <aside className={styles.totalPriceInfo}>
                <TotalPriceCard totalPrice={totalPrice}/>
        </aside>
      </main>
     

    </div>
  )
}

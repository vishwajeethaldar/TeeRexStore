import React, { useContext, useEffect, useState } from 'react'
import { Button } from '../components/Button'
import Footer from '../components/Footer'
import Navbar from '../components/nav/Navbar'
import Filter from '../components/product/Filter'
import Products from '../components/product/Products'
import Searchbar from '../components/Searchbar'
import { productContext } from '../context/ProductContext'
import { IContext, product } from '../interface'

import styles from '../styles/Home.module.css'


export default function Home() {
  const [products, setProducts] =  useState<Array<product>>([]) 
  const [searchtext, setSearchtext] = useState<string>("")
  const [mobileFilter, setMobileFilter] =  useState<boolean>(false)
  const conval =  useContext(productContext)


  const searchData = ()=>{
    if(searchtext===""){
      return 
    }
    let searchedProducts = conval.contval.products.filter((product:product)=>{
        return product.name.toUpperCase().includes(searchtext.toUpperCase()) || product.color.toUpperCase().includes(searchtext.toUpperCase()) || product.type.toUpperCase().includes(searchtext.toUpperCase())
    })
    setProducts(searchedProducts)   
  }

  useEffect(()=>{
    setProducts(conval.contval.products)
  },[conval])

  return (
    <div>
      <Navbar/>
      <div className={styles.searchsection}>
            <Searchbar  searchf={searchData} updateSearchTextf={setSearchtext} toggleF={setMobileFilter} toggval={mobileFilter}/> 
      </div>
      <main className={styles.main}>
        <aside className={mobileFilter?styles.smFilterSection:styles.filtersection}>
            <Filter/>
        </aside>

        <section className={styles.productSection}>
            <Products products={products}/>
        </section>
      </main>

      <Footer/>
    </div>
  )
}

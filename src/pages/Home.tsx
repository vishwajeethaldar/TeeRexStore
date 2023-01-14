import React, { useContext, useEffect, useState } from 'react'
import { Button } from '../components/Button'
import Footer from '../components/Footer'
import Navbar from '../components/nav/Navbar'
import Filter from '../components/product/Filter'
import Products from '../components/product/Products'
import Searchbar from '../components/Searchbar'
import { productContext } from '../context/ProductContext'
import { filterval, IContext, product } from '../interface'

import styles from '../styles/Home.module.css'


export default function Home() {
  const [products, setProducts] =  useState<Array<product>>([]) 
  const [searchtext, setSearchtext] = useState<string>("")
  const [mobileFilter, setMobileFilter] =  useState<boolean>(false)
  const conval =  useContext(productContext)
  
  const [filterval, setFilterval] = useState<filterval>({
      colors:{
          red:"",
          blue:"",
          green:"",
      },
      gender:{
          men:"",
          women:"",
      },
      price:{
          first:"",
          second:"",
          third:"",
      },
      types:{
          polo:"",
          hoodie:"",
          basic:"",
      }
  })

  // Function to search products
  const searchData = ()=>{
    if(searchtext===""){
      setProducts(conval.contval.products) 
      return 
    }
    let searchedProducts = conval.contval.products.filter((product:product)=>{
        return product.name.toUpperCase().includes(searchtext.toUpperCase()) || product.color.toUpperCase().includes(searchtext.toUpperCase()) || product.type.toUpperCase().includes(searchtext.toUpperCase())
    })
    setProducts(searchedProducts)   
  }

  // filter Products
  const filterProducts = ()=>{
    // if searchtext is empty and nothing is present in filter object then display all the products.
    if(searchtext==="" && !filterval.colors.blue && !filterval.colors.red && !filterval.colors.green && !filterval.gender.men && !filterval.gender.women && !filterval.price.first && !filterval.price.second && !filterval.price.third && !filterval.types.basic && !filterval.types.hoodie && !filterval.types.polo){
      setProducts(conval.contval.products) 
      return;    
    }


    // if seartext is present 
    let filteredProducts = [];

    if(searchtext!==""){
      filteredProducts = conval.contval.products.filter((product:product)=>{
                return product.name.toUpperCase().includes(searchtext.toUpperCase()) || product.color.toUpperCase().includes(searchtext.toUpperCase()) || product.type.toUpperCase().includes(searchtext.toUpperCase())
            })
    }else{
      filteredProducts = conval.contval.products
    }
   
    if(filterval.colors.blue||filterval.colors.red||filterval.colors.green){
        filteredProducts = filteredProducts.filter((product:product)=>{   
          return  (
            filterval.colors.blue&&product.color.toUpperCase()===filterval.colors.blue.toUpperCase()|| filterval.colors.red && product.color.toUpperCase()===filterval.colors.red.toUpperCase()|| filterval.colors.green && product.color.toUpperCase()===filterval.colors.green.toUpperCase()
          )
        })
    }

    if(filterval.gender.men||filterval.gender.women){
      filteredProducts = filteredProducts.filter((product:product)=>{
        return filterval.gender.men&&product.gender.toUpperCase()===filterval.gender.men.toUpperCase() ||filterval.gender.women&&product.gender.toUpperCase()===filterval.gender.women.toUpperCase()
      })
    }
  
   
  if(filterval.price.first||filterval.price.second||filterval.price.third){
    filteredProducts = filteredProducts.filter((product:product)=>{
      return filterval.price.first&&product.price<=250 || filterval.price.second&&product.price>250 &&  product.price<=450 ||  filterval.price.third&&product.price>450
    })
  }

  if(filterval.types.basic||filterval.types.hoodie||filterval.types.polo){
    filteredProducts = filteredProducts.filter((product:product)=>{
      return filterval.types.basic&&filterval.types.basic.toUpperCase()===product.type.toUpperCase() || filterval.types.hoodie&&filterval.types.hoodie.toUpperCase()===product.type.toUpperCase() || filterval.types.polo&&filterval.types.polo.toUpperCase()===product.type.toUpperCase();
    })
  }
    // console.log(filteredProducts);
    setProducts(filteredProducts) 
  }

  useEffect(()=>{
    setProducts(conval.contval.products)
    filterProducts()
  },[conval])

useEffect(()=>{
   filterProducts()
  // when filter value state changes call the filterproduct function  
  // console.log(filterval);
},[filterval])

  return (
    <div>
      <Navbar/>
      <div className={styles.searchsection}>
            <Searchbar  searchf={searchData} updateSearchTextf={setSearchtext} toggleF={setMobileFilter} toggval={mobileFilter}/> 
      </div>
      <main className={styles.main}>
        <aside className={mobileFilter?styles.smFilterSection:styles.filtersection}>
            <Filter filterval={filterval} updateFilterval={setFilterval}/>
        </aside>

        <section className={styles.productSection}>
            <Products products={products}/>
        </section>
      </main>

      <Footer/>
    </div>
  )
}

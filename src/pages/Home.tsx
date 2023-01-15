import { useContext, useEffect, useState } from 'react'  
import { Button } from '../components/Button'  //custom button component
import Footer from '../components/Footer'  //footer component
import Navbar from '../components/nav/Navbar'  //navbar component
import Filter from '../components/product/Filter' //filter component
import Products from '../components/product/Products' // products component
import Searchbar from '../components/Searchbar' // searchbar component
import { productContext } from '../context/ProductContext' // product context
import { filterval, product } from '../interface'  // typescript interface declaration for filter and product
import { AiFillCloseSquare } from 'react-icons/ai'  //react icons
import AlertMsg from '../components/AlertMsg'  //custom alert component
import styles from '../styles/Home.module.css' //css module for Home page
import { filterProducts } from '../utils/productsfunction'  //product filter function
import Loader from '../components/Loader'


export default function Home() {
  const [products, setProducts] =  useState<Array<product>>([])  // this state will store copy of products from global context and these products will be visible on screen
  const [searchtext, setSearchtext] = useState<string>("")     // state to maintain search string
  const [mobileFilter, setMobileFilter] =  useState<boolean>(false)  // state to toggle the filter on small device
  const conval =  useContext(productContext)  // global context of products and total cart item
  const [showLoader, setShowLoader]  = useState<boolean>(true)  //State to display loader
  // state based in filter will work
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



useEffect(()=>{
  setProducts(conval.contval.products)
  filterProducts(searchtext,filterval,conval,setProducts)
},[conval])

useEffect(()=>{
  setShowLoader(true)
  filterProducts(searchtext,filterval,conval,setProducts)
  setShowLoader(false)
  // when filter value state changes call the filterproduct function  
},[filterval])

useEffect(()=>{
  setShowLoader(false)
},[])
  return (
    <div>
      <Navbar/>

      <div className={styles.searchsection}>
            <Searchbar  searchf={()=>filterProducts(searchtext,filterval,conval,setProducts)} updateSearchTextf={setSearchtext} toggleF={setMobileFilter} toggval={mobileFilter}/> 
      </div>
      <main className={styles.main}>
        <aside className={mobileFilter?styles.smFilterSection:styles.filtersection}>
          
          <div className={styles.filtertitle}>
              <h4>Filters</h4>
              <Button Icon={AiFillCloseSquare} className="closebtn" onClick={()=>setMobileFilter(!mobileFilter)}/>
          </div>
            <Filter filterval={filterval} updateFilterval={setFilterval}/>

        </aside>

        <section className={styles.productSection}>
            {products.length===0?
            <img src="/img/no-products.jpg" alt="no products found" className={styles.noproductimg}/>:
            <Products products={products}/>
            }
          </section>
      </main>

      <Footer/>

      {/* Custom error alert  */}
      <AlertMsg type='error' title="Error" description='We have limited quantity for this product in our store, we will notify you when we avail more products in our store' duration={5}/>  
      
      {/* Loader Component */}
     {showLoader && <Loader/>}
    </div>
  )
}

import React, { useEffect } from 'react'
import { IContext, product } from '../interface'

export const productContext  =  React.createContext<any>(null)

export default function ProductContext({children}:{children:React.ReactComponentElement<any>}) {
  const [contval, setConval] = React.useState<IContext>({products:[], totalcartItem:0})

  const getProducts = async()=>{
    let res = await fetch("https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json");
    let data:Array<product> = await res.json()   
    setConval({...contval,products:data})  
    return data
}

  useEffect(()=>{
    getProducts()
  },[])
  
  return (
    <productContext.Provider value={{contval, setConval}}>
        {children}
    </productContext.Provider>
  )
}

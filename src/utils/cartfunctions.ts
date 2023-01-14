import { product } from "../interface";

export const addtoCart =(product:product, contval:any, setConval:Function)=>{
    product.addedtocart = true;
    product.count = 1;

    let updatedproducts =  contval.products.map((prod:product)=>{
       if(prod.id===product.id){
         return product
       }else{
         return prod
       }
     })
     
     let total = contval.products.filter((prod:product)=>{
        return prod.addedtocart === true
     })    
     setConval({...contval, products:updatedproducts, totalcartItem:total.length})
   }
 
export const addCount = (product:product, contval:any, setConval:Function)=>{
   
   if(product.quantity>product.count){
     product.count+=1 
   }
 
   let updatedproducts =  contval.products.map((prod:product)=>{
     if(prod.id===product.id){
       return product
     }else{
       return prod
     }
   })
 
   setConval({...contval, products:updatedproducts})
  }
 
  export  const  reduceCount = (product:product, contval:any, setConval:Function)=>{
   
     if(product.count>1){
       product.count-=1 
     }
 
     let updatedproducts =  contval.products.map((prod:product)=>{
       if(prod.id===product.id){
         return product
       }else{
         return prod
       }
     })
 
     setConval({...contval, products:updatedproducts})
  }
 

export const deleteProductFromCart = (product:product, contval:any, setConval:Function)=>{
  product.addedtocart = false;
  product.count = 0;

  let updatedproducts =  contval.products.map((prod:product)=>{
     if(prod.id===product.id){
       return product
     }else{
       return prod
     }
   })
   
   let total = contval.products.filter((prod:product)=>{
      return prod.addedtocart === true
   })    
   setConval({...contval, products:updatedproducts, totalcartItem:total.length})
}
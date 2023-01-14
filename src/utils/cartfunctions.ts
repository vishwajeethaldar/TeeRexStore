import { product } from "../interface";

// This function will add the items into cart
export const addtoCart =(product:product, contval:any, setConval:Function)=>{
    // updating the product  
    product.addedtocart = true;
    product.count = 1;

    let updatedproducts =  contval.products.map((prod:product)=>{
       if(prod.id===product.id){
         return product
       }else{
         return prod
       }
     })
     
    //  counting the total items added in cart
     let total = contval.products.filter((prod:product)=>{
        return prod.addedtocart === true
     })    

    //  updating the global state/context of product and total cart item
     setConval({...contval, products:updatedproducts, totalcartItem:total.length})
   }

   
// This function will increment the item count which is added into cart
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
   
  //  updating the global state/context of product 
   setConval({...contval, products:updatedproducts})
  }
 
  // This function will decrement the item count which is added into cart
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
 //  updating the global state/context of product 
     setConval({...contval, products:updatedproducts})
  }
 

  // This function will delete the product which is added into cart
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

    //  updating the global state/context of product and total cart item
   setConval({...contval, products:updatedproducts, totalcartItem:total.length})
}
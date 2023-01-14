import { filterval, product } from "../interface";

// filter Products fucntion
export const filterProducts = (searchtext:string, filterval:filterval, conval:any, setProducts:Function)=>{
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
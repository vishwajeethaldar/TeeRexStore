import { product } from "../../interface";
import Productcard from "./Productcard";

import styles from '../../styles/Products.module.css'


export default function Products({products}:{products:Array<product>}) {
  
  return (
    <div className={styles.container}>
      {products.map((product)=>{
        return <Productcard product={product} key={product.id}/>
      })}
    </div>
  )
}

import { filterval } from '../../interface'
import styles from '../../styles/Filter.module.css'
import { Button } from '../Button'


export default function Filter({filterval, updateFilterval}:{filterval:filterval, updateFilterval:Function}) {
    
    return (
      <div className={styles.outercontainer}>
         <main className={styles.container}>
                <h2 className={styles.title}> Filters </h2>
                {/* Color Filters */}
                <section className={styles.multiSelction}>
                    <h3>Colors</h3>
                    <div className={styles.selctbox}>
                        <input name='color' type="checkbox" value={"red"} onChange={(e)=>{                  
                            updateFilterval({...filterval,colors:{red:e.target.checked?"red":"", green:filterval.colors.green||"", blue:filterval.colors.blue||""}})
                        }}/> Red 
                    </div>
                    <div className={styles.selctbox}>
                        <input name='color' type="checkbox" value={"blue"} onChange={(e)=>{
                            updateFilterval({...filterval,colors:{red:filterval.colors.red||"", blue:e.target.checked?"blue":"", green:filterval.colors.green||""}})
                        }}/> Blue 
                    </div>
                    <div className={styles.selctbox}>
                        <input name='color' type="checkbox" value={"green"} onChange={(e)=>{
                            updateFilterval({...filterval,colors:{red:filterval.colors.red||"", blue:filterval.colors.blue||"", green:e.target.checked?"green":""}})
                        }}/> Green
                    </div>
                </section>

                {/* Gender Filters */}
                <section className={styles.multiSelction}>
                    <h3>Gender</h3>
                    <div className={styles.selctbox}>
                        <input name='color' type="checkbox" value={"men"} onChange={(e)=>{
                            updateFilterval({...filterval,gender:{men:e.target.checked?e.target.value:"",women:filterval.gender.women||""}})
                        }}/> Men 
                    </div>
                    <div className={styles.selctbox}>
                        <input name='color' type="checkbox" value={"women"} onChange={(e)=>{
                        updateFilterval({...filterval,gender:{men:filterval.gender.men||"",women:e.target.checked?e.target.value:""}})
                        }}/> Women 
                    </div>
                </section>

                {/* Price Filters */}
                <section className={styles.multiSelction}>
                    <h3>Price</h3>
                    <div className={styles.selctbox}>
                        <input name='color' type="checkbox" value={"0"} onChange={(e)=>{
                            updateFilterval({...filterval,price:{first:e.target.checked?e.target.value:"",second:filterval.price.second||"", third:filterval.price.third||""}})
                        }}/> Rs 0 - 250
                    </div>
                    <div className={styles.selctbox}>
                        <input name='color' type="checkbox" value={"251"} onChange={(e)=>{
                            updateFilterval({...filterval,price:{first:filterval.price.first||"",second:e.target.checked?e.target.value:"", third:filterval.price.third||""}})
                        }}/> Rs 251-450 
                    </div>
                    <div className={styles.selctbox}>
                        <input name='color' type="checkbox" value={"451"} onChange={(e)=>{
                            updateFilterval({...filterval,price:{first:filterval.price.first||"",second:filterval.price.second||"", third:e.target.checked?e.target.value:""}})
                        }}/> Rs 451
                    </div>
                </section>

                {/* Type Filters */}
                <section className={styles.multiSelction}>
                    <h3>Type</h3>
                    <div className={styles.selctbox}>
                        <input name='color' type="checkbox" value={"polo"}  onChange={(e)=>{
                            updateFilterval({...filterval,types:{polo:e.target.checked?e.target.value:"",hoodie:filterval.types.hoodie||"", basic:filterval.types.basic||""}})
                        }}/> Polo 
                    </div>  
                    <div className={styles.selctbox}>
                        <input name='color' type="checkbox" value={"hoodie"}  onChange={(e)=>{
                            updateFilterval({...filterval,types:{polo:filterval.types.polo||"",hoodie:e.target.checked?e.target.value:"", basic:filterval.types.basic||""}})
                        }}/> Hoodie 
                    </div>
                    <div className={styles.selctbox}>
                        <input name='color' type="checkbox" value={"basic"}  onChange={(e)=>{
                            updateFilterval({...filterval,types:{polo:filterval.types.polo||"",hoodie:filterval.types.hoodie||"", basic:e.target.checked?e.target.value:""}})
                        }} /> Basic 
                    </div>
                </section>
            </main>
      </div>

  )
}

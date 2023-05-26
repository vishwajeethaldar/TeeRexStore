import React from 'react'
import { errorContext } from '../../context/ErrorContext'
import styles from '../styles/AlertMsg.module.css';

// Alert Component this component is to diplay alert messages on screen
export default function AlertMsg({type="success", description, title, duration}:{type:string, description:string, title:string,duration:number}) {
  const {error, setError} = React.useContext(errorContext)

  React.useEffect(()=>{
      if(error){
        setTimeout(()=>{
          setError(false)
        }, duration*1000)
      }
  },[error])
  return (
    error&&
    <div className={styles.container}>
      <div className={styles[type]}>
          <div className={styles.titleContainer}>
            <h4 className={styles.alerttitle}> {title} </h4> 
            <h4 className={styles.closealert} onClick={()=>setError(false)}> X </h4>
          </div>
          <p className={styles.alertdescription}> {description}</p>
    </div>
    </div>
  )
}
<<<<<<< HEAD
>>>>>>> d51626c (test32)
=======
>>>>>>> 0a0e84bb9f44b0b8300e022b35ffa1e6dd99fa2d

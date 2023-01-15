import {AiOutlineLoading3Quarters} from 'react-icons/ai'   //loader icon
import styles from '../styles/Loader.module.css'  // css style module

// Loader Component 
export default function Loader() {
  return (
    <div className={styles.loader}>
        <div className={styles.circlemotion}>
            <AiOutlineLoading3Quarters className={styles.circle}/>
        </div>
    </div>
  )
}

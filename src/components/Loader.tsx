import {AiOutlineLoading3Quarters} from 'react-icons/ai'
import styles from '../styles/Loader.module.css'
export default function Loader() {
  return (
    <div className={styles.loader}>
        <div className={styles.circlemotion}>
            <AiOutlineLoading3Quarters/>
        </div>
    </div>
  )
}

import styles from '../styles/Searchbar.module.css'
import { Button } from './Button'

// importing icons from React-icons library
import {FaFilter} from 'react-icons/fa'
import {BsSearch} from 'react-icons/bs'
import ToggleFilterBtn from './product/ToggleFilterBtn'

export default function Searchbar({searchf,toggval, toggleF, updateSearchTextf}:{searchf?:VoidFunction, updateSearchTextf:Function,toggval:boolean, toggleF:Function,}) {
  return (
    <div className={styles.container}>
        <input type="text" placeholder="Search for products..." onChange={(e)=>updateSearchTextf(e.target.value)}/>
        <Button Icon={BsSearch} className={"btn"} onClick={searchf}/>
        <ToggleFilterBtn toggleval={toggval} toggleF={toggleF}/>
    </div>
  )
}

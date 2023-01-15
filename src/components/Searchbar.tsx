import styles from '../styles/Searchbar.module.css'   // css style module 
import { Button } from './Button'   //Custom button component

// importing icons from React-icons library
import {BsSearch} from 'react-icons/bs' 
import ToggleFilterBtn from './product/ToggleFilterBtn'

// Search Component- searchf = function which will excecute search, toggval=current state of filter menu on smalee device, 
// toggleF = function which will change the state of   toggval
// updateSearchTextf =  function which will update the search text 
export default function Searchbar({searchf,toggval, toggleF, updateSearchTextf}:{searchf?:VoidFunction, updateSearchTextf:Function,toggval:boolean, toggleF:Function,}) {
  return (
    <div className={styles.container}>
      {/* Search input  */}
        <input type="text" placeholder="Search for products..." onChange={(e)=>updateSearchTextf(e.target.value)}/>
       
        <Button Icon={BsSearch} className={"btn"} onClick={searchf}/>  {/*Excecurte search function*  */}
       
        <ToggleFilterBtn toggleval={toggval} toggleF={toggleF}/>  {/* filter menu toggle button for samller devices */}
    </div>
  )
}

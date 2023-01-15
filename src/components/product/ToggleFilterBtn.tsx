import React from 'react'
import { FaFilter } from 'react-icons/fa'
import { Button } from '../Button'

// This component is for toggle the filter on mobile/smaller devices
export default function ToggleFilterBtn({toggleF, toggleval}:{toggleF:Function, toggleval:boolean}) {
  return (
    <div>
         <Button Icon={FaFilter} className={"m-btn"} onClick={()=>toggleF(!toggleval)}/>
    </div>
  )
}

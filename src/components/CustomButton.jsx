import React from 'react'
import state from '../store'
import { useSnapshot } from 'valtio'
import { getContrastingColor } from '../config/helpers'
const CustomButton = ({type,title,handleClick,customStyle}) => {
    const snap=useSnapshot(state)
    function generateStyle(type){
        if(type==='filled'){
            return {
                backgroundColor:snap.color,
                color:getContrastingColor(snap.color)
            }
        }else if(type==='outlined'){
            return {
                borderWidth:'1px',
                borderColor:snap.color,
                color:snap.color 
            }
        }
    }
  return (
    //when we click this button we are no longer in homepage. because we set state.intro =false;
   <button 
   className={ `px-2 py-1.5 ${customStyle}` } 
   style={generateStyle(type)}
   onClick={handleClick}>
    {title}
   </button>
  )
}
export default CustomButton
import React from 'react'
import menuItems from '../foodData'

export default function Homepage() {
  return (
    <div>
        <div className='row'>
           {foodData.map(foodData=>{

               return <div>
                   <div>
                        <foodData menuItems={menuItems}/>
                   </div>
               </div>
           })}
        </div>
    </div>
  )
}

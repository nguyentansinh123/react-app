import React from 'react'
import './Filter.css'
const Filter = ({categories ,filterItem}) => {

    return (
        <div className='filter-container'>
          {categories.map((cate , index)=>{
              return <button key={index} className='filter-button' onClick={()=>filterItem(cate)}>{cate}</button>
          })}
        </div>
    )
}

export default Filter

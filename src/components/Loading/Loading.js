// import { useState , useEffect } from "react"
import React from 'react'
import PacmanLoader from "react-spinners/PacmanLoader";
import '../Loading/Loading.css'

const Loading = () => {
   //  const [Loading , setLoading] = useState(false)
   //  useEffect(()=>{
   //     setLoading(true)
   //     setTimeout(()=>{
   //        setLoading(false)
   //     },8000)
   //  },[])
    return (
        <div className='box'>
           {Loading ? 
         <PacmanLoader color={"rgb(129, 216, 238)"} loading={Loading} size={40} />
         : <div></div>   
        }
        </div>
    )
}

export default Loading

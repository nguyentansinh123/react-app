import React from 'react'
import Loading from '../Loading/Loading'
import { useState , useEffect } from "react"
import Products from './Products'

const Product = () => {
    const [Product ,setProduct]=useState([])
    const [loading , setLoading] = useState(false)

    const URL= 'https://5f9e30f26ee5fa00168a509f.mockapi.io/sinhdeptrai'
    const geturl= async ()=>{
        setLoading(true)
        try{
            const respones = await fetch(URL)
            const product = await respones.json()
            setProduct(product)
            setLoading(false)
        } catch(err){
            console.error(err)
        }
    }
    useEffect(()=>{
       geturl()
    },[])
    if(loading){
        return <Loading/>
    }
    return (
        <Products Product={Product} setProduct={setProduct}/>
    )
}

export default Product

import React from 'react'
import './Products.css'
import Footer from '../Footer'
import { useContext , useState } from 'react'
import CreateContext from '../context/CreateContextTorender'
import Filter from './productfilter/Filter'
const Products = ({Product}) => {
    const {addToCart}=useContext(CreateContext)
    const category = ['all',...new Set(Product.map((item)=> item.type))]
    const [categories , setCategories]=useState(category)
    const [superItem , setSuperItem]=useState(Product)
    let x = Array.from(Product)
    
    const filterItem = (types)=>{
        if(types==='all'){
            setSuperItem(x)
            return ;
        }
        const Items = Product.filter((itemms)=>itemms.type === types)
        setSuperItem(Items)
          console.log(Product)
          
          
    }
    return (
        <div>
        <main className='main-container'>
            <div className="filter-container"> <Filter categories={categories} filterItem={filterItem}/> </div>
        <div className='products-container'>
            {superItem.map((item)=>{
                return <div className="products-item" key={item.id}>
                <img src={item.image} className='product-image' alt="" />
                <div className="products-text">
                    <h4>{item.name}</h4>
                    <h5 className='products-type'>Men's Shoes</h5>
                    <h4 className='products-price'>Price : ${item.price}</h4>
                    <button className='add-to-cart' onClick={()=>addToCart(item)}>ADD</button>
                </div>
        </div>
            })}
        </div>
        
        </main>
        <Footer/>
        </div>
    )
}

export default Products

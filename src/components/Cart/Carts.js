import React from 'react'
import './Carts.css'
import { useContext } from 'react'
import CreateContext from '../context/CreateContextTorender'
import Footer from '../Footer'
import CartDecoy from './CartDecoy'
import CartTotal from './CartTotal'
const Carts = () => {
    const { cartItem ,removeItem } = useContext(CreateContext)
    // console.log(cartItem[0].price + cartItem[1].price )
    if(cartItem.length===0){
        return ( <div>
            <h1>You dont have any item</h1>
            <Footer/>
        </div>
        )
    }
    return (
        <div className='supper-cart-container'>
             <CartDecoy/>
            {cartItem.map((carts) => {
              return  <div className='cart-container' key={carts.id}>
                    <img src={carts.image} className='cart-image' />
                    <div className="cart-text">
                        <h3 className='cart-name'>{carts.name}</h3>
                        <h4 className='cart-name'>{carts.type}</h4>
                        <h3 className='cart-price'>Price : ${carts.price}</h3>
                        <h4 className='cart-review'>{carts.reviews}</h4>
                    </div>
                    <button onClick={()=>removeItem(carts.id)}>Remove</button>
                </div>
            })}
            <CartTotal/>
            <Footer/>
        </div>
    )
}

export default Carts

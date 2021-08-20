import React from 'react'
import CreateContext from '../context/CreateContextTorender'
import { useContext } from 'react'
import './CartTotal.css'
const CartTotal = () => {
    const { cartItem } = useContext(CreateContext)
    return (
        <div className='cart-total-container'>
           <h3>Total :</h3>
           {cartItem.reduce((sum, i) => (
           sum +=i.price
           ), 0)}
        </div>
    )
}

export default CartTotal

import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Nav.css'
import Nike from '../svg/icons8-nike.svg'
import CartIcon from'../svg/shopping-cart.svg'
import 'aos/dist/aos.css';
import { useContext } from 'react'
import CreateContext from './context/CreateContextTorender'
const Nav = () => {
    const {cartItem}=useContext(CreateContext)
    return (
        <div>
            <nav>
                <ul>
                    <li><img className='logo-img' src={Nike} alt="" /></li>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/About'>About Us</Link></li>
                    <li><Link to='/Product'>Product</Link></li>
                    <li><Link to='/RegisterAndLoginPage'>Login</Link></li>
                    <li><Link to='/Cart'><img src={CartIcon} className='carticon'/><span className='cart-span'>{cartItem.length}</span></Link></li>
                </ul>
            </nav>
                 
           
        </div>
    )
}

export default Nav

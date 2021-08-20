import React from 'react'
import './Footer.css'

const Footer = () => {
    return (
        <footer>
            <h1>@copyright by Sinh deptrai in 2021</h1>
            <ul className='icon'>
                <li> <a href="https://github.com/nguyentansinh123"> <i className="fab fa-github fa-2x"></i>  </a></li>
                <li><a href="https://twitter.com/?lang=vi"><i className="fab fa-twitter-square fa-2x"></i> </a></li>
                <li><a href="https://www.instagram.com/"><i className="fab fa-instagram fa-2x"></i> </a></li>
            </ul>
            <ul className='contact'>
                <li>Contact us</li>
                <li>Facebook</li>
                <li>Gmail</li>
            </ul>
        </footer>
    )
}

export default Footer

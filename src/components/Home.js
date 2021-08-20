import React from 'react'
import { useEffect } from 'react'
import Footer from './Footer'
import MyBrackets from '../svg/mybracket.svg'
import AOS from 'aos';
import './Home.css'
const Home = () => {
    useEffect(()=>{
        AOS.init({duration:1600})
    },[])
    return (
        <div>
              <div className="hero" data-aos="fade-up">
                     <img src={MyBrackets} alt="" />
                 </div>

                 <Footer/>
        </div>
    )
}

export default Home

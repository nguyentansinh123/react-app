import React from 'react'
import { useEffect } from 'react'
import './About.css'
import Shoes from '../image/Shoes.jpg'
import AOS from 'aos'
import Member from './Member'
import Footer from './Footer'

const About = () => {
    useEffect(() => {
        AOS.init({ duration: 1600 })
    }, [])
    return (
        <div>
            <div className='about'>
                <div className="about-text" data-aos="fade-left">
                    Lorem ipsum dolor sit amet <br /> consectetur adipisicing elit. Perferendis, quam delectus <br /> id laboriosam deserunt dolorem voluptatibus deleniti pariatur eius magni. <br /> Lorem ipsum dolor sit amet <br /> consectetur adipisicing elit. Perferendis, quam delectus <br /> id laboriosam deserunt dolorem voluptatibus deleniti pariatur eius magni.
                </div>
                <div className='about-img' data-aos="fade-right">
                    <img className='about-us-img' src={Shoes} alt="" />
                </div>
            </div>
            <h1 className='about-h1'>Our Team Members</h1>
            <Member/>
            <Footer/>
        </div>
    )
}

export default About

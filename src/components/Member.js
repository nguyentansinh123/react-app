import './Member.css'
import React, { useState , useEffect } from 'react';
import people from '../AboutData';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';
import AOS from 'aos'

const Member = () => {
    useEffect(() => {
        AOS.init({ duration: 1600 })
    }, [])
    const [index , setIndex]=useState(0)
    const {name,job,image,text}=people[index]
  
    const checknumber=(number)=>{
      if(number>people.length-1){
        return 0
      }
      if(number<0){
        return 3
      }
      return number
    }
  
    const suprisehandler=()=>{
        let suprise = Math.floor(Math.random() * 4) ;
        setIndex(suprise)
    }
  
    const nexthandler=()=>{
      setIndex((e)=>{
        let nextI =  e+1
        return checknumber(nextI)
        })
      }
    const prevhandler=()=>{
      setIndex((e)=>{
      let prevI =  e-1
      return checknumber( prevI)
      })
    }
    return <article data-aos="fade-up" className='review' >
      <div className='img-container'>
        <img src={image} className="person-img"/>
        <span className='quote-icon'> <FaQuoteRight/> </span>
      </div>
      <h4 className='author'>{name}</h4>
      <p>{job}</p>
      <p className='info'>{text}</p>
      <div className='button-container'>
        <button onClick={prevhandler} className='prev-btn'><FaChevronLeft/></button>
        <button onClick={nexthandler} className='next-btn'><FaChevronRight/></button>
      </div>
      <button onClick={suprisehandler} className='next-btn'>Suprise me</button>
    </article>;
  };
  
  export default Member;
  
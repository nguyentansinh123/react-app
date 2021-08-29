import React from 'react'
import './Register.css'
import { useState } from 'react'
import { toast } from 'react-toastify';
import { ToastContainer} from 'react-toastify';
import fire from '../../config/fire'
import { Link } from 'react-router-dom'
const Register = () => {
    const [isLogin , setIsLogin] = useState(false)
    const [email , setEmail]=useState('')
    const [password , setPassword]=useState('')
    const [user , setUser]=useState({})

    const handlesubmit=(e)=>{
        e.preventDefault()
        if(!email || !password){
            return toast.error('Please Filled in all Fields')
        }
        if(password.length<6){
            return toast.error('Password must have more than 6 letters')
        }
        const data={
            email,
            password
        }
        registerUser(data)
        console.log(email)
        console.log(password)

    }
    const registerUser=({email , password})=>{
        fire.auth().createUserWithEmailAndPassword(email,password).then(res=>{
            setIsLogin(true)
          console.log(res)
          setUser(res.user)
          return toast.success('Register Success')
        }).catch(err=>{
          if(err.code==="auth/email-already-in-use"){
            return toast.warning('email has already exist')
          }else{
            return toast.error('something went wrong')
          } 
        })
    }
    return (
        <div className='register-container'>
            <ToastContainer/>
            <h1>Register</h1>

            <form onSubmit={handlesubmit}>
            <div className='form-group'>
              <input type='email' placeholder='Email' name='Email' value={email} className='form-control' onChange={(e)=>setEmail(e.target.value)}/>
            </div>

            <div className='form-group'>
              <input type='password' placeholder='Password' name='password' value={password} className='form-control' onChange={(e)=>setPassword(e.target.value)}/>
            </div>
            <p>Already have a account <Link to='/Login'>Login</Link></p>

            <div className='form-group'>
              <button type='submit' className='btn'>Register</button>
            </div>
            {isLogin?(
                <h1>
                    welcome to our page {email}
                </h1>
            ):(<div></div>)}
            </form>
            
        </div>
    )
}

export default Register

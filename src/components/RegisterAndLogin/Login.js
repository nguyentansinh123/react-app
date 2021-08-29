import React from 'react'
import { useState } from 'react'
import { toast } from 'react-toastify';
import { ToastContainer} from 'react-toastify';
import fire from '../../config/fire'
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router-dom';
const Login = () => {
  const LoginHistory = useHistory()
  const [IsLogin , setIsLogin]=useState(false)
    const [email , setEmail]=useState('')
    const [password , setPassword]=useState('')
    const [user , setUser]=useState({})
    const handleSubmit=(e)=>{
        e.preventDefault()
      
        if(!email || !password){
            return toast.error('Please Filled in all Fields')
        }

        if(password.length<6){
            return toast.error('Password must have more than 6 letters')
        }
        const data ={
            email,password
        }
        SignInUser(data)
        console.log(`login ${JSON.stringify(data)}`)

  }
  const SignInUser=({email , password})=>{
    fire.auth().signInWithEmailAndPassword(email,password).then(res=>{
      setUser(res.user)
      setIsLogin(true)
      return toast.success('Login Success')
    }).catch(err=>{
      if(err.code==="auth/wrong-password"){
        return toast.warning('Wrong email or password')
      }
      else if(err.code === "auth/user-not-found"){
        return toast.warning('Please register')
      }else{
        return toast.error('something went wrong')
      }
    }) 
}
    return (
        <div className='register-container'>
        <ToastContainer/>
        <h1>Login</h1>

        <form onSubmit={handleSubmit}>
        <div className='form-group'>
          <input type='email' placeholder='Email' name='Email' value={email} className='form-control' onChange={(e)=>setEmail(e.target.value)}/>
        </div>

        <div className='form-group'>
          <input type='password' placeholder='Password' name='password' value={password} className='form-control' onChange={(e)=>setPassword(e.target.value)}/>
        </div>
        <p>dont have account <Link to='/RegisterAndLoginPage'>Register</Link></p>

        <div className='form-group'>
          <button type='submit' className='btn'>Log in</button>
        </div>
        </form>
        {IsLogin?(
          LoginHistory.push('/')
        ):<div></div>}
    </div>
    )
}

export default Login

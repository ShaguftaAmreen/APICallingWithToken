import React, { useState } from 'react'
import axios from 'axios'
const Login = () => {
    const [email,setEmail]=useState()
    const [password,setPassword]=useState()
   // const [getData,setGetData]=useState([]);
    const handleSubmit=(e)=>{
        e.preventDefault()
        const  payload={
            email:email,
            password:password
        }
        console.log(payload)




    
    axios.post("https://api.escuelajs.co/api/v1/auth/login",payload)
    .then((res)=>{
        localStorage.setItem("token",JSON.stringify(res.data.access_token))
        console.log(res)
       // setGetData(res.data)
        alert("Success!")
    })
    .catch((err)=>{
        console.log(err)
        alert("Failed")
    })}
  return (
    <>
      <p style={{color:"white"}}>
        Login Page
      </p>
      <div>
        <p style={{color:"white"}}>Email :</p>
        <input type='text' onChange={(e)=>{setEmail(e.target.value)}} value={email}/>
      </div>
      <div>
        <p style={{color:"white"}}>Password :</p>
        <input onChange={(e)=>{setPassword(e.target.value)}} value={password} type='password' />
      </div>
      <button type='submit' onClick={handleSubmit}>Login</button>
      <p className='p' style={{color:"white"}}>Login here!</p>
    </>
  )
}

export default Login;

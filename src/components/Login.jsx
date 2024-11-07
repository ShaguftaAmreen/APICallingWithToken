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
       // console.log(payload)




    
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
        <label style={{color:"white"}}>Email :</label>
        <input type='text' onChange={(e)=>{setEmail(e.target.value)}} value={email} style={{padding:"5px",marginLeft:"30px"}} placeholder='Enter the email'/>
      </div>
      <div>
        <label style={{color:"white"}}>Password : </label>
        <input onChange={(e)=>{setPassword(e.target.value)}} value={password} style={{padding:"5px",marginTop:"10px"}} type='password' placeholder='Enter the password' />
      </div>
      <button type='submit' onClick={handleSubmit} style={{marginTop:"15px"}}>Login</button>
      <p className='p' style={{color:"white"}}>Login here!</p>
    </>
  )
}

export default Login;

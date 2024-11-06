import React from 'react'
import {Link} from 'react-router-dom'
const NavBar = () => {
  return (
    <div>
<nav style={{display :'flex',justifyContent:"space-around",backgroundColor:"blue",color:"white",width:"100%",height:"40px"}}>
<Link to="/" style={{color:"white",fontSize:"25px"}} >Home</Link>
<Link to='/login' style={{color:"white",fontSize:"25px"}}>Login</Link><br />
<Link to="/getData" style={{color:"white",fontSize:"25px"}}>Get Data</Link>

      </nav>
    </div>
  )
}

export default NavBar;

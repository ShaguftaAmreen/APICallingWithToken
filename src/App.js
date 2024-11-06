//import logo from './logo.svg';
import './App.css';
import Allroutes from './components/Allroutes';
//import Login from './components/Login';
import NavBar from './components/NavBar';
//import Profile from './components/Profile';
//import { useEffect, useState } from 'react';
//import useInternet from './useInternet';

// //import {useInternet} from './useInternet';
// //import {useInternet} from './useInternet';
// let p1=new Promise((resolve,reject)=>{/*setTimeout(resolve,100,"Shagufta")*/
//   resolve("Iram")
// })
// let p2=new Promise((resolve)=>{setTimeout(resolve,200,"Amreen")});
// Promise.all([p1,p2]).then((result)=>console.log(result)
// )
// .catch((err)=>{console.log(err)})
function App() {
  
//   const isOnline =useInternet
  return (
    <div className="App">
    {/*{isOnline?"Connected to internet":"You are offline"} 
    <Login />
    <Profile />*/}
    
   <NavBar />
   <h2 style={{color:"white"}}>Simple Login With Token</h2>
   <Allroutes />
    </div>
   );
}

export default App;

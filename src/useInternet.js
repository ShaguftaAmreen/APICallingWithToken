import { useState,useEffect } from "react"

function useInternet(){
    const [isOnline,setIsOnline]=useState(true)
  
    useEffect(()=>{
      //handle online and offline events
  function setOnline(){
    setIsOnline(true)
  }
  
  function setOffline(){
    setIsOnline(false)
  }
  
  window.addEventListener("online",setIsOnline)
  window.addEventListener("offline",setOffline)
  return (()=>{
  window.removeEventListener("online",setOnline)
  window.removeEventListener('offline',setOffline)
  
  }) 
    },[])
    return isOnline;
}

export default useInternet;
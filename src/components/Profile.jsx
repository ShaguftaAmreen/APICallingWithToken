import React from "react";
import axios from "axios";
import { useState } from "react";
const Profile = () => {
  const [getData, setGetData] = useState([]);
  const getProfileData = () => {
    const token = JSON.parse(localStorage.getItem("token"));
    const header = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    axios
      .get("https://api.escuelajs.co/api/v1/auth/profile", header)
      .then((res) => {
        console.log("resssssssssssssss",res.data);
        setGetData((prev)=>[...prev, res.data]);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleLogout = () => {
    localStorage.removeItem("token");
    setGetData([])
   // alert("Log out success");
  };
  console.log("data  ",  getData);
  return (
    <div>
      <h4 style={{color:"white"}}>This is profile page</h4>
      <button onClick={getProfileData}>Get profile data</button>
      <button onClick={handleLogout}>Logout</button>
   {getData.length>0 && getData.map((ele) => (
        <div>
          <h3 style={{color:"white"}}>Email : <h4> {ele.email}</h4></h3>
          <h3 style={{color:"white"}}>Name : <h4>{ele.name}</h4></h3>
          <h3 style={{color:"white"}}>Password :<h4> {ele.password}</h4></h3>
          <img src={`${ele.avatar}`} alt=""/>
        </div>
      ))}
    </div>
  );
};

export default Profile;

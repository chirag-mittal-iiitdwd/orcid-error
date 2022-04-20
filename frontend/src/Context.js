import React, { createContext, useEffect, useState } from 'react'
import axios from 'axios';

export const myContext = createContext();

const Context = (props) => {
    const [userObject,setUserObject]=useState();
    useEffect(()=>{
        const getUser = async () => {
            fetch("http://localhost:5000/getUser", {
              method: "GET",
              credentials: "include",
              headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                "Access-Control-Allow-Credentials": true,
              },
            })
              .then((response) => {
                if (response.status === 200) return response.json();
                throw new Error("authentication hej been feled");
              })
              .then((resObject) => {
                setUserObject(resObject.user);
                console.log(userObject);
              })
              .catch((err) => {
                console.log(err);
              });
          };
          getUser();
    },[])
  return (
    <myContext.Provider value={userObject}>
        {props.children}
    </myContext.Provider>
  )
}

export default Context
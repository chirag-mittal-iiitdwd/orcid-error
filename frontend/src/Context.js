import React, { createContext, useEffect, useState } from 'react'
import axios from 'axios';

export const myContext = createContext();

const Context = (props) => {
    const [userObject,setUserObject]=useState();
    const headers = {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "http://localhost:3000",
            "Access-Control-Allow-Credentials": true
    }

    useEffect(()=>{
        const getUser = async () => {
            axios.get('http://localhost:5000/getUser', {
              headers: headers
            })
              .then((response) => {
                console.log(response);
                if (response.status === 200) return response.json();
                throw new Error("Authentication has been failed");
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
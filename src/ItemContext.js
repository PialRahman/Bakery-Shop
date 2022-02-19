import React, { createContext, useState } from 'react';

export const ItemContext= createContext();
   export  const Itemcontextdetails=(props)=>{
     const [item,setItem]=useState([
        {
            id:1,
            image:"./images/breadbakery.jpg",
            name:"Bread",
            price:300
          },
          {
            id:2,
            image:"./images/birthdaycakchocolate.jpg",
            name:"Birthday Cake (Chocolate)",
            price:1400
          },
          {
            id:3,
            image:"./images/birthdaycakvanila.jpg",
            name:"Birthday Cake(Vanilla)",
            price:1200
          },
          {
            id:4,
            image:"./images/cookiesbakery.jpg",
            name:"Cookies",
            price:400
          }

        ]);
  return (<div><ItemContext.Provider value={[item,setItem]}>
  
    {props.children}
 </ItemContext.Provider>
  </div>
  )  
  
  } 


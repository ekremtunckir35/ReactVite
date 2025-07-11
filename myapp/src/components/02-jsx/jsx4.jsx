

import React from 'react'

export const Jsx4 = () => {

const isAdmin =false;
let title ="Customer";

     if(isAdmin){
        title ="Admin";
     }

  return <h3>{title}</h3>
   
     
  
}



import React from 'react'

export const Jsx7 = () => {

    //MAP in for dongusu gibi kullanimi   
    let liEls = "";
    const arr = [...new Array(100)].map((_, index) => index +1);

    
  return (    
     <ul>
       {arr.map((item)=>(
        <li key ={item}>{item}</li>
       ))}
     </ul>
  )
}

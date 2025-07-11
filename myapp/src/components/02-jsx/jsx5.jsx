

import React from 'react'

export const Jsx5 = () => {

     const isAdmin = true;
     const discount = 10 ;


  return (
    <div>
       {isAdmin  ? <h2>Admin User</h2> : <h2>Customer User</h2>} 

       { discount > 0 && <h3>Discount: {discount}% </h3> }
    </div>
  );
};

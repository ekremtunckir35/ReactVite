//KURAL 5 : JSX icinde javascript kullanmak icin  {} suslu parantezler kullanilir.


import React from 'react'

export const Jsx2 = () => {

      
     const student ={

        firtName: "Jonh",
        lastName : "Doe",
        age : 25,
        adress : {
            street :"123 Main St",
            city : "Anytown",
            state : "CA",
            zip : "12345"
        }
     }


  return (
      <ul>
        <li> <strong>First name</strong> {student.firtName}</li>
        <li><strong>Last name</strong> {student.lastName}</li>

        <li><strong>Address</strong>{student.adress.street} {student.adress.city}</li>
      </ul>
  )
}

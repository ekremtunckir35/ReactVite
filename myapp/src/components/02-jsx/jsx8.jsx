import React from 'react'

export const Jsx8 = () => {

       const cities = [
        {id:1,name:"London", country:"England", population: "9.000.000"},
        {id:2, name:"Paris", country: "France",population:"2.000.000"},
        {id:3, name:"New York", country: "America",population:"8.000.000"},
        {id:4, name:"Amsdertam", country: "Netherlands",population:"1.000.000"},
        {id:5, name:"Koln", country: "Germany",population:"3.000.000"},
        {id:6, name:"Berlin",country:"Germany",population:"3.000.000"},
        {id:7,name:"Munich",country:"Germany",population:"3.000.000"},
        {id:8,name:"Zurich",country:"Switzerland",population:"1.000.000"},
        {id:9,name:"Vienna",country:"Austria",population:"1.000.000"},
        {id:10,name:"Budapest",country:"Hungary",population:"1.000.000"} 
      ]

                   
    return (

         <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Country</th>  
              <th>Population</th>
            </tr>
          </thead>

            <tbody>
              {cities.map((item,index) => (
                <tr key = {item.id}>

                  <td>{index+1}</td>
                  <td>{item.name}</td>
                  <td>{item.country}</td>
                  <td>{item.population}</td>
                  

                </tr>
              ))}
            </tbody>
         </table>
    
  );
};

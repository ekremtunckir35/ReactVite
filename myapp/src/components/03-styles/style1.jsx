import React from 'react'

export const Style1 = () => {

           const padding = "30px";
           const isRadius ="false";

  return (
    

    <>
    <h1>Styles</h1>
    <h2 style={{
         color : "blue",
         backgroundColor: "green",
         padding ,
         border :"1px solid red",
         borderRadius: isRadius ? "10px" : "0px",
         textAlign : "center"

    }}>
        inline Styles
    </h2>

    </>
  )
}

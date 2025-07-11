import React from 'react'

export const Style3 = () => {

           const padding = "30px";
           const isRadius ="false";

  
    

    
     const internalStyle={
         color : "blue",
         backgroundColor: "green",
         padding ,
         border :"1px solid red",
         borderRadius: isRadius ? "10px" : "0px",
         textAlign : "center",
         "text-alingn": "right",

    };
        return (
            <>
            <h1>Styles</h1>
            <h2 style={internalStyle}>Internal Styles 1</h2>
            <h2 style={{...internalStyle, color:"white", fontSize:"30px "}}>internal Styles 3</h2>
             </>
      
  );
};

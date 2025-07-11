import React from 'react'

export const Style2 = () => {

           const padding = "30px";
           const isRadius ="false";

  
    

    
     const style={
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
            <h2 style={style}>Internal Styles 1</h2>
            <h2 style={style}>internal Styles 2</h2>
             </>
      
  );
};

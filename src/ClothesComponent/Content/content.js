import React from "react";
import"./content.css"
import image2 from"../image/image2.jpg"


    function Content(){

    return(
           
     <div>
     <div className="container">
     <img src={image2} className="imageCover" alt="image1"/>
     <div >
         <div className="address">
         <h1>Get Inspired!</h1>
         <p>shop our top trending categories</p>
         </div>
         </div>
         </div>
         
     </div>
        );
}
export default Content
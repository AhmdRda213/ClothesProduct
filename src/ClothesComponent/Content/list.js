import React from "react";
import "./content.css"
import image2 from "../image/shirt2.jpg"
function List(){
    const Info=[{
        id:1,
        theImage:`${image2}`,
        theTitle:"maxi fashoin"
        },
        {
            id:2,
            theImage:`${image2}`,
            theTitle:"blouses"
            },
        {
            id:3,
            theImage:`${image2}`,
            theTitle:"cardigans"
            },
        { id:4,
            theImage:`${image2}`,
            theTitle:"Tops$t-shirt"
            },
    ];
    
    return(
            <div className="container">
            <div className="cardImage">
            {Info.map((item)=>(
            <div key={item.id}>
            <img src={item.theImage} alt={item.theTitle}/>
            <p >{item.theTitle}</p>
            </div>
            )    )}
            </div>
    
    
    </div>);
}
export default List
import React from "react";
import"./product.css"
import image from"../image/blouses4.jpeg"
import image1 from"../image/shirt1.jpg"
import image2 from"../image/image1.jpg"
import image3 from"../image/shirt1.jpg"
import image4 from"../image/blouses5.jpg"
import image5 from"../image/blouses4.jpeg"
import image6 from"../image/blouses5.jpg"
import image7 from"../image/blouses7.jpg"
import image8 from"../image/blouses9.jpg"
import image9 from"../image/blouses8.jpg"
import image10 from"../image/blouses7.jpg"
import image11 from"../image/blouses6.jpg"



function Product(){
   const Info=[{
       id:0,
        theImage:`${image}`,
        thePrize:"500EG",
        theTitle:"long blouses"
   },
   {
       id:1,
    theImage:`${image1}`,
    thePrize:"500EG",
    theTitle:"long blouses"
},
   {
       id:2,
    theImage:`${image2}`,
    thePrize:"500EG",
    theTitle:"long blouses"
},
   {
       id:3,
    theImage:`${image3}`,
    thePrize:"500EG",
    theTitle:"long blouses"
},
   {
       id:4,
    theImage:`${image4}`,
    thePrize:"500EG",
    theTitle:"long blouses"
},
   {
       id:5,
    theImage:`${image5}`,
    thePrize:"500EG",
    theTitle:"long blouses"
},
   {
       id:6,
    theImage:`${image6}`,
    thePrize:"500EG",
    theTitle:"long blouses"
},
   {
       id:7,
    theImage:`${image7}`,
    thePrize:"500EG",
    theTitle:"long blouses"
},
   {
       id:8,
    theImage:`${image8}`,
    thePrize:"500EG",
    theTitle:"long blouses"
},
   {
       id:9,
    theImage:`${image9}`,
    thePrize:"500EG",
    theTitle:"long blouses"
},
   {
       id:10,
    theImage:`${image10}`,
    thePrize:"500EG",
    theTitle:"long blouses"
},
   {
       id:11,
    theImage:`${image11}`,
    thePrize:"500EG",
    theTitle:"short blouses"
},
  
   {
       id:12,
    theImage:`${image11}`,
    thePrize:"500EG",
    theTitle:"long blouses"
},
  
   {
       id:13,
    theImage:`${image9}`,
    thePrize:"500EG",
    theTitle:"long blouses"
},
  
   {
       id:14,
    theImage:`${image8}`,
    thePrize:"500EG",
    theTitle:"long blouses red"
},
  
];
   
   
    return(

        <div className="  container cartPro "> 
        {Info.map((items)=>(
            <div className=" cartProuduct" key={items.id}>
            <img src={items.theImage} alt={items.theTitle} className="imageCart"/>
            <h4>{items.thePrize}</h4>
            <p>{items.theTitle}</p>
            <button className="button">ADD TO BAG</button>
            </div>
        ))}
        <div className="Title">
        <p>Clothes is a creative fashion brand made by and for the social generation. 
        Our clothes are made to always offer cool pieces with prices that won’t break the bank. 
        We ship in Egypt and soon all over the world.</p>
        </div>
        </div>
    )
        };
export default Product;
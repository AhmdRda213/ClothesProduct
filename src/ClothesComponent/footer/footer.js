import React from "react";
import"./footer.css"
import {FaAngleDown} from"react-icons/fa"
import {RiArrowUpSLine}from"react-icons/ri"

const openAbout =()=>{
    const openAbout=document.querySelector(".about");
    openAbout.style.display="block";
    openAbout.style.transition="0.3s";
}
const closeAbout=()=>{
const close= document.querySelector(".about")    
close.style.display="none";
close.style.transition="0.3s";
}
const openCategory=()=>{
    const categoreOpen=document.querySelector(".categore");
    categoreOpen.style.display="block";
}
const closeCategory=()=>{
    const categoreClose=document.querySelector(".categore");
    categoreClose.style.display="none";

}
const openMedia=()=>{
    const mediaOpen=document.querySelector(".socialmedia");
    mediaOpen.style.display="block";
}
const closeMedia=()=>{
    const mediaClose=document.querySelector(".socialmedia");
    mediaClose.style.display="none"
}
const openPay=()=>{
    const payOPen=document.querySelector(".pay");
    payOPen.style.display="block";
}
const closePay=()=>{
    const payClose=document.querySelector(".pay");
    payClose.style.display="none";
}
function Footer(){
    return(
        <div>
        <div className="foot container"> 
       <div>
       <p>About us  <FaAngleDown  className="iconsfa" onClick={openAbout}/>
       <RiArrowUpSLine className="iconsri" onClick={closeAbout}/>
       </p>
        <ul className=" about">
       <li>delivery</li>
       <li>payment</li>
       <li>returns</li>
       <li>contact us</li>
       <li>privacy policy</li>
       <li>coupons</li>
       <li>careers</li>
       
       </ul> 
       </div>
       <div>
       <p>Top categories <FaAngleDown  className="iconsfa " onClick={openCategory}/>
       <RiArrowUpSLine className="iconsri" onClick={closeCategory}/>

       
       </p>
       <ul className="categore"> 
       <li> tops</li>
       <li> pants</li>
       <li> shoes</li>
       <li> dresses</li>
       <li> jackets</li>
       <li> shorts</li>
       <li> skirts</li> 
       </ul>
       </div>
       <div>
       <p>social media<FaAngleDown  className="iconsfa" onClick={openMedia}/> 
       <RiArrowUpSLine className="iconsri" onClick={closeMedia}/>

       </p>
       <ul className="socialmedia">
       <li>instagram</li>
       <li>Facebook</li>
       <li>Linkedin</li>
       <li>Tiktok</li>
       </ul>
       </div>
       <div>
       <p>payments <FaAngleDown  className="iconsfa" onClick={openPay}/>
       <RiArrowUpSLine className="iconsri" onClick={closePay}/>

       </p> 
       <ul className="pay">
       <li> masters card</li>
       <li>visa</li>
       <li>cash on delivery</li>
       </ul>
       </div>
        </div>
        <div className="mainfoot"> &copy;copy right 2022 <span>ahmed reda  </span>all rights reserved </div>
        </div>
    );
}
export default Footer;
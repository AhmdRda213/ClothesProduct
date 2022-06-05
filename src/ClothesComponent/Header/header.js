import React from "react";
import{BiSearch}from"react-icons/bi"
import{AiOutlineUser}from"react-icons/ai"
import{BsHeart}from"react-icons/bs"
import{AiOutlineShopping}from"react-icons/ai"
import{FaBars}from"react-icons/fa"
import{BsArrowLeftCircleFill}from"react-icons/bs"
import "./header.css"
import image from"../image/image1.jpg"
const openNav=()=>{
    const navUl=document.querySelector(".navegationCopy");
    navUl.style.marginLeft="0";
    navUl.style.transition="0.3s";
    navUl.style.display="block" 
}
const closeNav=()=>{
    const navClose=document.querySelector(".navegationCopy");
    navClose.style.marginLeft="-500px";
    navClose.style.transition="0.3s"; 

}


function Header(){
    return(
        <div className="head container">
        <div className=" maincontainer">
        
    <p className="logo logoo">clothes</p>
        <div className="Search" >
        <input type="text" htmlFor="Search" placeholder="Search Categories Or Products" 
        className="search"  ></input>
        <label id="Search" className="searchInfo">
        <BiSearch className="icons"/>
        </label>
        </div>
        
                    <div className="contIcon">
                    <AiOutlineUser className="icon"/>
                    <BsHeart  className="icon" />
                    <AiOutlineShopping  className="icon"/>
                    </div>
                    </div>
                    <FaBars  className="barIcons" onClick={openNav}/>   
                    <div className="navegation">
                 <ul className="navgationUl">
                    <li >      <a href="#3">new in </a></li>
                    <li  >  <a href="#3">bags </a></li>
                    <li  >  <a href="#3">occasions </a></li>
                    <li  >  <a href="#3">pick a mood </a></li>
                    <li  >  <a href="#3">edits </a></li>
                    <li  >  <a href="#3">jewelry </a></li>
                    <li  >  <a href="#3">occasions </a></li>
                    <li  >  <a href="#3">sale </a></li>
                    </ul>
                    </div>
                    <div className="navegationCopy">
                    <ul className="navgationUlcopy">
                   <BsArrowLeftCircleFill className="navback" onClick={closeNav}/>
                    <li >   <a href="#3"> <img src={image} alt=""></img>new in </a></li>
                       <li  >  <a href="#3"> <img src={image} alt=""></img>bags </a></li>
                       <li  >  <a href="#3"> <img src={image} alt=""></img>occasions </a></li>
                       <li  >  <a href="#3"><img src={image} alt=""></img>pick a mood </a></li>
                       <li  >  <a href="#3"><img src={image} alt=""></img>edits </a></li>
                       <li  >  <a href="#3"><img src={image} alt=""></img>jewelry </a></li>
                       <li  >  <a href="#3"><img src={image} alt=""></img>occasions </a></li>
                       <li  >  <a href="#3"><img src={image} alt=""></img>sale </a></li>
                       </ul>
                       </div>
    
    </div>
    )
}
export default Header
import React from "react";
import Header from"../Header/header";
import Content from "../Content/content";
import List from "../Content/list";
import CardImage from"../Content/colImage";
import Cart from"../product/Product";
import Footer from"../footer/footer";
function App(){
    
    return(
      
      
      
      <div>
        
      <Header></Header>
      <Content></Content>
      <List />
      <CardImage></CardImage>
      <Cart></Cart>
      <Footer></Footer>
          </div>
          
      
    );
}
export default App
import { Component } from "react";
import "./App.css"
import elephant from "./images/elephant.jpeg";

export default class AppClass extends Component{
  
  imageData = ()=>{
    let data = [
      {
        id:1,
        img:elephant
      },
      {
        id:2,
        img:elephant
      },
      {
        id:3,
        img:elephant
      },
      {
        id:4,
        img:elephant
      }
    ]
    return data;
  }

  // code here

  images=function (){
    return this.imageData().map((item)=>{
      return <img id={item.id} className="images" src={item.img}></img>
    })
  }

  render(){
    return <>
           <div className="h1Container"><h1>Kalvium gallary</h1></div>
           <div className="imagesContainer">{this.images()}</div>
           </>
  }
}

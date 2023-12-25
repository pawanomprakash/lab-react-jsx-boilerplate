import './App.css';
import elephant from "./images/elephant.jpeg";

const imageData = ()=>{
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

function App() {
  // code here

  const images=imageData().map((item)=>{
    return <img id={item.id} className="images" src={item.img}></img>
  })
 return <>
        <div className="h1Container"><h1>Kalvium gallary</h1></div>
        <div className="imagesContainer">{images}</div>
        </>
 
}

export default App;

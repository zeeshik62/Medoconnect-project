// import Bulb from "./components/bulb";
// import App1 from './components/bulb'
import Login from "./pages/Login";
import Main from "./components/Main";
import Header from "./components/Header";
import { useState } from "react";
import Counter from "./components/Counter";
import Todoform from "./components/Todoform";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import { Link } from "react-router-dom";
import EditTodo from "./components/EditTodo";
import Weather from "./components/Weather";
import Card from "./components/Cards";
import Weatherr from "./components/Weatherr";
const products=[
  {
  title:"Cripy Burger",
  description:"asdfghh",
  price: 200
},
{
  title:"Crunchy Burger",
  description:"zxczxczx",
  price: 200
},
{
  title:"Zinger Burger",
  description:"qweqtr",
  price: 200
},
]


function App() {
  // const [num,setNum]=useState(50);
  // const [marks,setMarks]=useState([25,32,25,36]);

  const [product,setProduct]=useState(products);

  return (
    <div className="container">
     {/* { <Bulb/> }
     {<Header/>
     <Main test={num}/>
        {marks.map((m)=><p>{m}</p>)}
        <Counter/> } */}

        
<Header/>
        <Weather/>
       
     
    </div>
  );
}

export default App;

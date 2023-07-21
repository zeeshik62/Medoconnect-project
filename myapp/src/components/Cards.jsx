import Test from "./Test";
import Header from "./Header";
import { useState } from "react";
import card1 from '../img/kfccard.png';
function Card({prod}){
//    let [a,setA]=useState(90);
//    const counter=()=>{
//     setA(a+1);
//    }
    return(
       
            // {/* <button onClick={counter}>Inc</button> */}
            // {/* <Test data={props.test}/> */}
          
    <div className="col-md-4">
        <div className="card">
  <img className="card-img-top" src={card1} alt="Card image cap"/>
  <div className="card-body">
  <h5 className="card-title">{prod.title}</h5>
    <p className="card-text">{prod.description}</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
    </div>
        </div>
       

        )
}
export default Card;
import Test from "./Test";
import Header from "./Header";
import { useState } from "react";
import card1 from '../img/kfccard.png';
function Main(prod){
//    let [a,setA]=useState(90);
//    const counter=()=>{
//     setA(a+1);
//    }
    return(
        <div className="container">
            {/* <button onClick={counter}>Inc</button> */}
            {/* <Test data={props.test}/> */}


            <div className="row">
                <div className="col-md-4">
                <div class="card">
  <img class="card-img-top" src={card1} alt="Card image cap"/>
  <div class="card-body">
  <h5 class="card-title">{prod.title}</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
</div>






            </div>
            
        </div>
    )
}
export default Main;
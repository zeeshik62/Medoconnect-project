import { useEffect } from "react"
import { useState } from "react";
import axios from 'axios';



const Weatherr=()=>{
    const [weather, setWeather]=useState({})
    useEffect(()=>
    {
      const wea=  axios.get('https://api.weatherapi.com/v1/forecast.json?key=9e9fb56ca6d84badbb1105906232107&q=pakistan&days=7&aqi=no&alerts=no')

    .then((res)=>console.log(res.data))
        
        .catch((error)=>console.log(error))
    },[])
 
    return(
<div>
        {typeof weather.main !="undefined"?(
           <div>
        <div className="container">
            <div className="row">
                    <div className="col-md-4">
                <h3 style={{marginLeft:200}}>{weather.location.country}</h3>
                <img style={{marginLeft:200}} src={weather.current.condition.icon} alt='' />
                <h5> style={{marginLeft:200}} {weather.current.condition.text}</h5>
                
                <hr/>
                <h5>Date: {weather.location.localtime}</h5>
                <h5>Temperature: {weather.current.temp_c}</h5> 
                </div>  
            </div>
        </div>
        </div>):('')
        }
        </div>
        )
   
    }


  //  <div>
    // <div className="container">
    //     <div className="row">
    //             <div className="col-md-4">
    //         <h3 style={{marginLeft:200}}>{weather.location.country}</h3>
    //         <img style={{marginLeft:200}} src={weather.current.condition.icon} alt='' />
    //         <h5> style={{marginLeft:200}} {weather.current.condition.text}</h5>
            
    //         <hr/>
    //         <h5>Date: {weather.location.localtime}</h5>
    //         <h5>Temperature: {weather.current.temp_c}</h5> 
    //         </div>  
    //     </div>
    // </div>
    //</div>):('')
    // )



    
    
    

  
   
  

    
export default Weatherr;
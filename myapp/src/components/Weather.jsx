import { useEffect } from "react"
import { useState } from "react";
import axios from 'axios';


const api={
    key:'da5a37d853c7a9fc294a044768ddff3d',
    base: 'https://api.openweathermap.org/data/2.5/',
}
const Weather=()=>{
 
    const [search,setSearch]=useState('')
    const [weather, setWeather]=useState({})
    const searchPress=()=>{
        fetch(`${api.base}weather?q=${search}&unit=metric&AppID=${api.key}`)
        .then(res=>res.json())
        .then (result=>{
            setWeather(result)
        })
    };
return(
    <div style={{backgroundColor:'green',padding:'50px', color:'white',borderRadius:'40px',margin:'20px'}} >
    <h1 style={{marginBottom:'30px',}}>Weather App</h1>
    <div>
    <input style={{borderRadius:'10px'}} type="text" placeholder="search" 
    onChange={(e)=>setSearch(e.target.value)}
    />
    <button style={{borderRadius:'10px'}} onClick={searchPress}>Search</button>
    </div>


{typeof weather.main !="undefined"?(
<div>
    <img src={weather.flag} alt=""/>
<p>{weather.name}</p>
    <p>{weather.main.temp}°F</p>
    <p>{weather.weather[0].main}</p>
    <p>({weather.weather[0].description})</p>
</div>
):
('')
}


    
    </div>
    )}

    // const [weather, setWeather]=useState({})
    // useEffect(()=>
    // {
    //   const wea=  axios.get('https://api.weatherapi.com/v1/forecast.json?key=9e9fb56ca6d84badbb1105906232107&q=pakistan&days=7&aqi=no&alerts=no')

    // .then((res)=>console.log(res.data))
        
    //     .catch((error)=>console.log(error))
    // },[])
   
    // return(

    //{typeof weather.main !="undefined"?(
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

    
export default Weather;
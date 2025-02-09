import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import './SearchBox.css';
// import "/assets/SearchBox.css"
import { useState } from 'react';

export default function SearchBox({updateInfo}){
    let[city,setCity]=useState("");
    let[error,setError]=useState(false);

    const API_URL= "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY= "e5914320d2eba612e6fbc1837627c2db";

    let getWeatherInfo= async () =>{
        try{
            let response= await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            let jasonResponse=await response.json();
         //    console.log(jasonResponse);
            let result ={
             city:city,
             temp: jasonResponse.main.temp,
             tempMin:jasonResponse.main.temp_min,
             tempMax:jasonResponse.main.temp_max,
             humidity: jasonResponse.main.humidity,
             feelsLike: jasonResponse.main.feels_like,
             weather: jasonResponse.weather[0].descrpition,
            };
            console.log(result);
            return result;
        }catch(err){
           throw err;
        }
    };

  

    let handleChange=(evt)=>{
        setCity(evt.target.value);
    };

    let handleSumbit= async (evt)=>{
        try{
            evt.preventDefault();
            console.log(city);
            setCity("");
           let newInfo=await getWeatherInfo();
           updateInfo(newInfo);
        }catch(err){
            setError(true);
        }
        
    }
    return(
        <div className='SearchBox'>
            <form onSubmit={handleSumbit} action="">
            <TextField id="city" label="City Name" variant="outlined" required value={city} onChange={handleChange}/>
            <br /><br />
            <br /><br />
            <Button variant="contained" type="submit">Search</Button>
            {error && <p style={{color:"red"}}>No such place exists in our API.</p> }
            </form>
        </div>
    );
}
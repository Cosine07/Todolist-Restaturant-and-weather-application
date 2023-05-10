import React,{useState,useEffect} from 'react'
import './style.css' 
import Weathercard from './weathercard'

/* https://api.openweathermap.org/data/2.5/weather?q=Surat&appid=129f4e16788cffa9b8f8ce201c272432 */

const Temp = () => { 
    const [searchValue, setsearchValue] = useState('Mumbai') 
    const [TempInfo, setTempInfo] = useState({}) 

    const getWeatherInfo = async ()=>{
            try {
                let url=`https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=129f4e16788cffa9b8f8ce201c272432`
                const res=await fetch(url)
                const data=await res.json()  
                console.log(data)

                const {temp,humidity,pressure}=data.main
                // const temp=data.main.temp //both are accepted
                console.log(temp)

                const {main:weathermood}=data.weather[0]  
                console.log(weathermood) 

                const {name}=data
                console.log(name) 

                const {speed}=data.wind  
                console.log(speed) 

                const {country,sunset}=data.sys
                console.log(country)  

                const MyNewWeatherInfo={
                    temp,
                    humidity,
                    pressure,
                    weathermood,
                    name,
                    speed,
                    country,
                    sunset 
                }   
                setTempInfo(MyNewWeatherInfo);
 
            } catch (error) {  
                console.log(error)  
            } 

    }

    useEffect(() => { 
      getWeatherInfo() 
    }, [])
    
  return (
    <>  
    <div className="wrap">
        <div className="search">
            <input type="search" autoFocus 
            placeholder="search..." 
            className="searchTerm"  
            id="search"  
            value={searchValue} 
            onChange={(e)=>setsearchValue(e.target.value)}
            />  
            <button className="searchButton" type="button" 
            onClick={getWeatherInfo}> 
            Search
            </button> 
        </div>   
    </div> 
 
    {/* out temp card */}
    <Weathercard TempInfo={TempInfo}/>
    </>
  )
}
 
export default Temp

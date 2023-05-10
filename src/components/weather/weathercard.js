import React,{useState,useEffect} from 'react'

const Weathercard = ({TempInfo}) => { 
    const [weather, setweather] = useState("second")
    const [timet, settimet] = useState(false)
    const {   
        temp,   
        humidity,
        pressure,
        weathermood,
        name,
        speed,
        country,
        sunset 
    } = TempInfo    
    useEffect(() => { 
      if(weathermood){
        switch (weathermood) {
            case 'Clear ': setweather('wi-day-sunny')
                break;
            case 'Clouds': setweather('wi-day-cloudy')
                break;
            case 'Haze': setweather('wi-fog')
                break;
            case 'rain': setweather('wi-day-rainy')
                break;
            case 'Mist': setweather('wi-dust')
                break;
            case 'smoke': setweather('wi-smoke') 
                break;
        
            default: setweather('wi-day-sunny')
                break;
        }
      }
    }, [weathermood])
     
    // convert the seconds in the time
    let sec=sunset
    let date= new Date(sec*1000) 
    let hr=date.getHours();
    if(hr>=0 && hr<12){
        settimet(true)
    } 
    let setTime=(`${date.getHours()}:${date.getMinutes()}`) 
  return (  
    <>  
    <article className="widget">
        <div className="weatherIcon">
            <i className={`wi ${weather}`}></i>
        </div>
        <div className="weatherInfo">
            <div className="temperature">
                <span>{temp}&deg;</span>
            </div>
            <div className="description">
                <div className="weatherConsition">
                    {weathermood}
                </div>
                <div className="place">
                    {name},{country}
                </div> 
            </div>
        </div> 
        <div className="date">{new Date().toLocaleString()}</div>
        {/* our four column section */}
        <div className="extra-temp"> 
            <div className="temp-info-minmax">
                <div className="two-sided-section">
                    <p>
                        <i className={'wi wi-sunset'} style={{color:'#70c1b3'}}></i>
                    </p> 
                    <p className='extra-info-leftside'>
                        {setTime} {timet?'AM':'PM'}
                        <br/>    
                        Sunset   
                    </p> 
                </div>
                <div className="two-sided-section">
                    <p>
                        <i className={'wi wi-humidity'} style={{color:'#70c1b3'}}></i>
                    </p> 
                    <p className='extra-info-leftside'>
                        {humidity}<br/>
                        Humidity
                    </p> 
                </div>
            </div>
            <div className="weather-extra-info">
            <div className="two-sided-section">
                    <p>
                        <i className={'wi wi-rain'} style={{color:'#70c1b3'}}></i>
                    </p> 
                    <p className='extra-info-leftside'>
                    {pressure}<br/>
                     Pressure   
                    </p> 
                </div>
                <div className="two-sided-section">
                    <p>
                        <i className={'wi wi-strong-wind'} style={{color:'#70c1b3'}}></i>
                    </p> 
                    <p className='extra-info-leftside'>
                    {speed} <br/>
                    Speed
                    </p> 
                </div> 
            </div>
        </div>
    </article>
    </>
  )
}

export default Weathercard
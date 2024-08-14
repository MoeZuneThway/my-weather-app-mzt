import React, { useEffect, useState } from 'react'
import Search from '../search'

export default function Weather() {
    const [search,setSearch] = useState('');
    const [loading,setLoading] = useState(false);
    const [error,setError] = useState(null);
    const [weatherData, setWeatherData] = useState(null);
    async function fetchData(param){
      try{
        setLoading(true);
        const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${param}&appid=0d44040620a57cfd131c1e2ee6634378`);
        const data = await res.json();
        if(data){
          setWeatherData(data);
          setLoading(false);
        }
      }catch(e){
        setError(e.message)
      }
    }
    console.log(weatherData);
    function handleClick(){
      fetchData(search);
    }
    function getCurrentDate(){
    return new Date().toLocaleDateString('en-us',{
      weekday:'long',
      month: 'long',
      day: 'numeric',
      year: 'numeric'
    })
    }
    useEffect(()=>{
      setSearch('yangon');
      fetchData('yangon');
    },[])
    if(error){
      <h2>{error}</h2>
    }
  return (
    <div className='container my-5'>
        <div className="row">
          <div className="col-lg-8 mx-auto " style={{backgroundColor:'cyan'}}>
          <Search search={search} setSearch={setSearch} handleClick={handleClick}/>
      {loading?<div> Loading...</div>: (
        <div className='pb-3'> 
          <div className="city-name">
            <h2 className='fs-4 fw-bolder'>{weatherData?.name}, <span>{weatherData?.sys?.country}</span></h2>
          </div>
          <div className="date">
            <h2 className='fs-6'>{getCurrentDate()}</h2>
          </div>
          <div className="temperature">
            <h2 className='fs-3'> Temperature: {weatherData?.main?.temp}</h2>
          </div>
          <div className="description">
            <p className='fs-5 fw-bolder'> {weatherData && weatherData.weather && weatherData.weather[0]?.description}</p>
          </div>
          <div className="weatherdescription d-flex justify-content-around">
            <div className='wind'>
              
              <p className='fs-5 fw-bolder'>Wind Speed - {weatherData?.wind?.speed}</p>
            </div>
            <div className="humidity">
              <p className='fs-5 fw-bolder'>Humidity - {weatherData?.main?.humidity}</p>
            </div>
          </div>
        </div>
      )}
          </div>
        </div>
    </div>
  )
}

import { useState } from 'react'
import React from 'react'
import './todo.css';

function Todo() {

    let [city, setCity] = useState('')

    const handleChange = (e) => {
        setCity(e.target.value);
      };



    const [weatherData, setWeatherData] = useState(null);
    function fet() {
        fetch(`https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=bdc39cc8fd7d17323e55faa398a0afd8`)
            .then(res => res.json())
            .then(data => {
                if (data.cod === 200) { // Проверка на успешный ответ (HTTP код 200)
                    setWeatherData(data);
                    console.log(data)
                } else {
                    console.log('Ошибка получения данных:', data.message);
                    console.log(data)
                }
            })
            .catch(error => {
                console.error('Произошла ошибка при запросе:', error);
            });
    }
    
    return (
      <>
            
            <div className='container'>
            <h1 className='title'>Погода</h1>
            <div className="search">
                <input type="text" value={city} className='title-input' placeholder='Введите город..' onChange={handleChange}/>
                <button className='input-search' onClick={fet}>Поиск</button>
            </div>
                {/* {weatherData && (
                <div className='info-container'>
                    <h2 className='pogoda-in'>Погода в {weatherData.name}, {weatherData.sys.country}</h2>
                    <h2>Температура: {Math.ceil(weatherData.main.temp)} градусов Цельсия</h2>
                    <div className="max-min">
                        <h3>Максимальная Температура: {Math.ceil(weatherData.main.temp_max)} цельсия</h3>
                        <h3>Минимальная Температура: {Math.ceil(weatherData.main.temp_min)} цельсия</h3>
                    </div>

                </div>
                )}  */}
                            {weatherData ? (
                                <div className='info-container'>
                                    <h2 className='pogoda-in'>Погода в {weatherData.name}, {weatherData.sys.country}</h2>
                                    <h2>Температура: {Math.ceil(weatherData.main.temp)} градусов Цельсия</h2>
                                    <div className="max-min">
                                        <h3>Максимальная Температура: {Math.ceil(weatherData.main.temp_max)} цельсия</h3>
                                        <h3>Минимальная Температура: {Math.ceil(weatherData.main.temp_min)} цельсия</h3>
                                    </div>
                                </div>
                            ) : (
                                <div className='no-data-container'>
                                    <p>Нет данных о погоде.</p>
                                </div>
                            )}
            </div>
            
      </>
    )
  }
  
  export default Todo
  
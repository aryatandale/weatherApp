const options = {
    method: 'GET',
    headers: {
        'x-rapidapi-key': 'dd9965f0a6mshc21b38bc24bb96bp14c66fjsn5fd711328d6f',
        'x-rapidapi-host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};

const getWeather = (city) => {

    city_Name.innerHTML = city
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city, options)
        .then(response => response.json())
        .then((response) => {

            console.log(response)
            cloud_pct.innerHTML = response.cloud_pct
            temp.innerHTML = response.temp
            feels_like.innerHTML = response.feels_like
            humidity.innerHTML = response.humidity
            min_temp.innerHTML = response.min_temp
            max_temp.innerHTML = response.max_temp
            wind_speed.innerHTML =response.wind_speed
            wind_degrees.innerHTML =response.wind_degree
        })

        .catch(err => console.error(err));
}

submit.addEventListener("click", (e) => {
    e.preventDefault()
    getWeather(city.value)
})
getWeather("Pune")



//Akola city
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Akola', options)
        .then(response => response.json())
        .then((response) => {

            console.log(response)
            cloud_pct1.innerHTML = response.cloud_pct
            temp1.innerHTML = response.temp
            feels_like1.innerHTML = response.feels_like
            humidity1.innerHTML = response.humidity
            min_temp1.innerHTML = response.min_temp
            max_temp1.innerHTML = response.max_temp
            wind_speed1.innerHTML =response.wind_speed
            wind_degrees1.innerHTML =response.wind_degree
            sunrise1.innerHTML = response.sunrise
            sunset1.innerHTML = response.sunset
           
        })

        .catch(err => console.error(err));


//Nagpur city
    
        fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Nagpur', options)
        .then(response => response.json())
        .then((response) => {

            console.log(response)
            cloud_pct2.innerHTML = response.cloud_pct
            temp2.innerHTML = response.temp
            feels_like2.innerHTML = response.feels_like
            humidity2.innerHTML = response.humidity
            min_temp2.innerHTML = response.min_temp
            max_temp2.innerHTML = response.max_temp
            wind_speed2.innerHTML =response.wind_speed
            wind_degrees2.innerHTML =response.wind_degree
            sunrise2.innerHTML = response.sunrise
            sunset2.innerHTML = response.sunset
           
        })

        .catch(err => console.error(err));

    
//Amravati city
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Amravati', options)
        .then(response => response.json())
        .then((response) => {

            console.log(response)
            cloud_pct3.innerHTML = response.cloud_pct
            temp3.innerHTML = response.temp
            feels_like3.innerHTML = response.feels_like
            humidity3.innerHTML = response.humidity
            min_temp3.innerHTML = response.min_temp
            max_temp3.innerHTML = response.max_temp
            wind_speed3.innerHTML =response.wind_speed
            wind_degrees3.innerHTML =response.wind_degree
            sunrise3.innerHTML = response.sunrise
            sunset3.innerHTML = response.sunset
           
        })

        .catch(err => console.error(err));

//nashik city
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Nashik', options)
        .then(response => response.json())
        .then((response) => {

            console.log(response)
            cloud_pct4.innerHTML = response.cloud_pct
            temp4.innerHTML = response.temp
            feels_like4.innerHTML = response.feels_like
            humidity4.innerHTML = response.humidity
            min_temp4.innerHTML = response.min_temp
            max_temp4.innerHTML = response.max_temp
            wind_speed4.innerHTML =response.wind_speed
            wind_degrees4.innerHTML =response.wind_degree
            sunrise4.innerHTML = response.sunrise
            sunset4.innerHTML = response.sunset
           
        })

        .catch(err => console.error(err));
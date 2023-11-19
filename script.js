let api_key = 'fa76206789639c8dfefccd6780be2ebf'
let diferencia = 273.15


const button = document.querySelector('button').addEventListener('click',()=>{
    let city = document.getElementById('ciudadEntrada').value
    fetchclima(city)
})

function fetchclima(city){
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`)
    .then(data=> data.json())
    .then(data=> showData(data))
}

function showData(data){
    // console.log(data)
    const divDatosClima = document.getElementById('datosClima')
    divDatosClima.innerHTML= ""

    const nameCity = data.name
    const nameCountry = data.sys.country
    const temperature = data.main.temp
    const humedad = data.main.humidity
    const description = data.weather[0].description
    const icon = data.weather[0].icon

    const titleCity =document.createElement('h2')
    titleCity.textContent = `${nameCity}, ${nameCountry}`


    const pTemperature = document.createElement('p')
    pTemperature.textContent = `La temperatura es ${Math.round(temperature-diferencia)} °C`

    const imgIcon = document.createElement('img')
    imgIcon.src =`https://openweathermap.org/img/wn/${icon}@2x.png`

    const pHumedad = document.createElement('p')
    pHumedad.textContent = `La Humedad es ${humedad}%`

    const pDescription = document.createElement('p')
    pDescription.textContent = `La descripcion metereologica es ${description}`

    divDatosClima.appendChild(titleCity)
    divDatosClima.appendChild(pTemperature)
    divDatosClima.appendChild(pHumedad)
    divDatosClima.appendChild(imgIcon)
    divDatosClima.appendChild(pDescription)


}
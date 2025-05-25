const response = await fetch(
`https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&forecast_days=3&daily=temperature_2m_mean`
);
const data = response.json();
const weatherCont = document.getElementById('weather-container')
weatherCont.innerHTML = <div></div>
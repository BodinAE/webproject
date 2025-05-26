

getData()
async function getData() {
    const url = "https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&forecast_days=3&daily=temperature_2m_mean";
    var json
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
  
      json = await response.json();
      console.log(json);
    } catch (error) {
      console.error(error.message);
    }
    const weatherCont = document.getElementById('weather-container')
    const weathers = document.getElementsByClassName('weather')
    weathers[0].innerHTML=`${json.daily.time[0]}: ${json.daily.temperature_2m_mean[0]}C`
    weathers[1].innerHTML=`${json.daily.time[1]}: ${json.daily.temperature_2m_mean[1]}C`
    weathers[2].innerHTML=`${json.daily.time[2]}: ${json.daily.temperature_2m_mean[2]}C`
  }
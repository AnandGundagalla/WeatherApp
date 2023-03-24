const currentWeather = document.querySelector(".rectangle1");


const date = new Date()

let weekday = date.getDay();
let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();

let currentDate = `${day}/${month}/${year}`;

switch (new Date().getDay()) {
  case 0:
    weekday = "Sunday";
    break;
  case 1:
    weekday = "Monday";
    break;
  case 2:
     weekday = "Tuesday";
    break;
  case 3:
    weekday = "Wednesday";
    break;
  case 4:
    weekday = "Thursday";
    break;
  case 5:
    weekday = "Friday";
    break;
  case 6:
    weekday = "Saturday";
}


const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "641eb123b4msh59915efd2d1bbeep1e4091jsn13d10a5b75ae",
    "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
  },
};

fetch("https://weatherapi-com.p.rapidapi.com/current.json?q=Mumbai", options)
  .then((response) => response.json())
  .then((response) => {
    console.log(response);

    // name.innerHTML = response.name;
    // region.innerHTML = response.region;
    // country.innerHTML = response.country;
    // lat.innerHTML = response.lat;
    // lon.innerHTML = response.lon;
    // tz_id.innerHTML = response.tz_id;
    // localtime_epoch.innerHTML = response.localtime_epoch;
    // localtime.innerHTML = response.localtime;
    // current.innerHTML = response.current;
    // last_updated_epoch.innerHTML = response.last_updated_epoch;
    // last_updated.innerHTML = response.last_updated;
    // temp_c.innerHTML = response.temp_c;
    // temp_f.innerHTML = response.temp_f;
    // is_day.innerHTML = response.is_day;
    // condition.innerHTML = response.condition;
    // wind_mph.innerHTML = response.wind_mph;
    //   wind_kph.innerHTML = response.wind_kph;
    // wind_degree.innerHTML = response.wind_degree;
    // wind_dir.innerHTML = response.wind_dir;
    // pressure_mb.innerHTML = response.pressure_mb;
    // pressure_in.innerHTML = response.pressure_in;
    // precip_mm.innerHTML = response.precip_mm;
    // precip_in.innerHTML = response.precip_in;
    // humidity.innerHTML = response.humidity;
    //   cloud.innerHTML = response.cloud;
    // feelslike_c.innerHTML = response.feelslike_c;
    // feelslike_f.innerHTML = response.feelslike_f;
    // vis_km.innerHTML = response.vis_km;
    // vis_miles.innerHTML = response.vis_miles;
    // uv.innerHTML = response.uv;
    // gust_mph.innerHTML = response.gust_mph;
    // gust_kph.innerHTML = response.gust_kph;

    showWeatherData(response);
  })
  .catch((err) => console.error(err));

function showWeatherData(response) {
  let { humidity, wind_kph, cloud, temp_c,} = response.current;
  let {name, localtime} = response.location;

  currentWeather.innerHTML = `<p class="weather">Weather Details</p>
        <p class="cloudy">cloudy</p>
        <p class="cloudy_report">${cloud}%</p>
        <p class="humidity">Humidity</p>
        <p class="humidity_report">${humidity}%</p>
        <p class="wind">Wind</p>
        <p class="wind_report">${wind_kph}km/h</p>
        <p class="current_temp">${Math.trunc(temp_c)}</p>
        <p class="temp_sign">o</p>
        <p class="current_city">${name}</p>
        <p class="weather_icon">
          <img src="./Images/Vector.svg" alt="" />
        </p>

        <p class="current_time">${localtime.slice(10)}</p>
        <p class="current_weekday">${weekday}</p>
        <p class="current_date">${currentDate = currentDate.slice(0,5) + currentDate.slice(7,9)}</p>`;
}


// localtime.replaceAll("-","/").slice(0 ,10)
//https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

//const weatherApi ={
 // key: "9a67ecdf49271c47722d3a7f22b34e46",
 // baseUrl: "https://api.openweathermap.org/data/2.5/weather?q"
//}

const searchInputBox = document.getElementById("input-box");

searchInputBox.addEventListener('Keypress',(event) => {

  if(event.keycode == 13){
  console.log(searchInputBox.value);
  }
});
function getDate(){
  let country = document.getElementById("country").value;


function getWeatherReport(city){
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${country}&appid=9a67ecdf49271c47722d3a7f22b34e46`
  )
    .then((getWeatherReport)) =>  weather.json())

   .then(showWeatherReport) => {
    console.log(data)
  };
    
   

  



function showWeatherReport(weather){
  console.log(weather);
}
let city = document.getElementById("city");
city.innerText =$(weather.name),(weather.sys.country);


let temperature = documents.getElementById("temp");
temperature.innerHTML =$[Math.round(weather.main.temp)] &deg : c;

let minMaxTemp = documents.getElementById("min-max");
temperature.innerHTML = $[Math.round(weather.main.temp_min)] &deg:c (min)/ $ [Math.round(weather.main.temp_max)] &deg:c (max);


function datemanage(dateArg){

  let days={""}
  let months ={""}
  let year = dateArg.getFullYear();
  let month = month[dataArg.getMonth()];
  let date = dateArg.getDate();
  let day = days[dateArg.getDay()];



  return '$(date) $(month) $(day) $(year)';
}









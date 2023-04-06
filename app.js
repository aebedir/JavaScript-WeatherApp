const key ="38108ebd85efb9979a1c3e9bb583339e";
const url ="https://api.openweathermap.org/data/2.5/"
const search =document.querySelector(".search");

search.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      document.querySelector(".buton").click();     
    }
  });

let display ="";
let city = "";
function degeral(){
    city=search.value;
    let query = `${url}weather?q=${city}&appid=${key}&units=metric&lang=tr`
    fetch(query)
    .then(weather =>{
        return weather.json()
    })
    .then(displayResult)
  }

  const displayResult=(result)=>{  
    console.log(result);
    let date = new Date(result.sys.sunrise*result.sys.timezone)  
    document.querySelector(".city").innerHTML=city.toLocaleUpperCase();
    document.querySelector(".max").innerHTML=`En Fazla ${result.main.temp_max.toFixed(1)} C°`
    document.querySelector(".min").innerHTML=`En Düşük ${result.main.temp_min.toFixed(1)} C°`
    document.querySelector(".data").innerHTML=result.weather[0].description.toLocaleUpperCase()    
  }



  var data = null;

  var xhr = new XMLHttpRequest();
  xhr.withCredentials = true;
  
  xhr.addEventListener("readystatechange", function () {
    if (this.readyState === this.DONE) {
      console.log(this.responseText);
    }
  });
  
  xhr.open("GET", "https://api.collectapi.com/health/dutyPharmacy?ilce=%C3%87ankaya&il=Ankara");
  xhr.setRequestHeader("content-type", "application/json");
  xhr.setRequestHeader("authorization", "apikey 4lhBAdcI6juUMIcbmpPWVk:1FOx0Sm5Epkd2uslxsTPN9");
  
  
  
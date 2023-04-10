// src="https://maps.google.com/maps?q=pune&t=&z=13&ie=UTF8&iwloc=&output=embed"

//  api key =  2ca9d715be11f3a612513fa21978e20f 
   // https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid=2ca9d715be11f3a612513fa21978e20f   
//   https://api.openweathermap.org/data/2.5/weather?q={city name}&appid=2ca9d715be11f3a612513fa21978e20f 

function getData(){
    let city=document.getElementById("query").value;
    let url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=2ca9d715be11f3a612513fa21978e20f`;

    fetch(url)
        .then(function(res){
            return res.json();
          
        })
        .then(function(res){
            append(res);
            console.log(res);
        })
        .catch(function(err){
            console.log(err);
        });
    
}


function append(data){
    let url=`https://maps.google.com/maps?q=${data.name}&t=&z=13&ie=UTF8&iwloc=&output=embed`;
    
        let container=document.getElementById("container");
        container.innerHTML=null;

        let h2=document.createElement("h2");
        h2.innerText=data.name;

        let temp=document.createElement("p");
        temp.innerText=`Temp:- ${data.main.temp}`;

        let min_temp=document.createElement("p");
        min_temp.innerText=`min_temp:- ${data.main.temp_min}`;

        let max_temp=document.createElement("p");
        max_temp.innerText=`max_temp:- ${data.main.temp_max}`;

        container.append(h2,temp,min_temp,max_temp);

        let iframe=document.getElementById("gmap_canvas");
        iframe.src=url;
    
}


function getLocation(){
    navigator.geolocation.getCurrentPosition(success);
    function success(pos) {
        const crd = pos.coords;
    
        console.log("Your current position is:");
        console.log(`Latitude : ${crd.latitude}`);
        console.log(`Longitude: ${crd.longitude}`);
        console.log(`More or less ${crd.accuracy} meters.`);
        getWeatherOnLocation(crd.latitude, crd.longitude);
      }
}

function getWeatherOnLocation(lat,lon){
    let url=`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=2ca9d715be11f3a612513fa21978e20f`  ;
    
    fetch(url)
    .then(function(res){
        return res.json();
    }).then(function(res){
        append(res);
        console.log(res);
    }).catch(function(err){
        console.log(err);
    })
    
}


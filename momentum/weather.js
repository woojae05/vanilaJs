const weather = document.querySelector(".js-weather");

const API_KEY = "557e521457081c791e97668cc8c67750"
const COORDS = 'coords'

function handleGeoError(){
    console.log("Can't access geo location");
}

function saveCoords(coordsObj){
    localStorage.setItem(COORDS,JSON.stringify(coordsObj));
}


function handleGeoSucces(position){
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = {
        latitude, //객체의 변수 이름과 키의 이름을 갖게 하려면 키 값은 버리고 ,를 적어준다.
        longitude
    };
    saveCoords(coordsObj); // 가져온 좌표 localStorage에 저장 함수
    getWeather(latitude, longitude); //API를 통해 날씨를 가져옴
}

function askForCoords(){ 
    navigator.geolocation.getCurrentPosition(handleGeoSucces, handleGeoError);
}



function getWeather(lat, lng){
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`).then(function(response){
        return response.json();
    })
    .then(function(json){
        const temperature = Math.round(json.main.temp);
        const place = json.name;
        weather.innerText = `${temperature} °C / @ ${place}`;
    }); //.then이 하는 역할은 데이터가 완전히 들어온 다음 함수를 호출한다.
    }

function loadCoords(){
    const loadedCoords = localStorage.getItem(COORDS); //localStorage에 있는 값을 가져오고
    if(loadedCoords === null){ //값이 없으면 
        askForCoords(); //좌표요청
    } else { //있으면 날씨 표시
        const parsedCoords = JSON.parse(loadedCoords);
        getWeather(parsedCoords.latitude, parsedCoords.longitude);
    }
}
function init(){
    loadCoords();

}


init();
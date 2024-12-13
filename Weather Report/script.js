const dateInput = document.getElementById("dateInput");
const APIkey = "fbdb525ba4befc470ffdf22e78381fca";
const wheaterInfo = document.querySelector("#weatherInfo");
const header = document.querySelector("#weatherInfo h1");
const subHeader = document.querySelector("#weatherInfo h4");
const morning = document.querySelector("#morning ul");
const noon = document.querySelector("#noon ul");
const evening = document.querySelector("#evening ul");
const forecast = document.querySelector("#forecast");
const getButton = document.querySelector("#get");
const modal = document.querySelector("#modal");
const overviewSpan = document.querySelector("#overview");
const errorMessage = document.querySelector("#errorMessage");
const modalBody = modal.querySelector(".modal-body");
const modalLabel = modal.querySelector("#modalLabel");

const timeLine = {
    night: [document.querySelector("#night ul"), 0],
    morning: [document.querySelector("#morning ul"), 6],
    noon: [document.querySelector("#noon ul"), 12],
    evening: [document.querySelector("#evening ul"), 18]
}

const hourlyInfo = {
    temp: "Temperature",
    humidity: "Humidity",
    weather: "Weather"
};

let coords;

let date = new Date;

let year = `${date.getFullYear()}`;
let month = `${date.getMonth() + 1 < 10 ? "0" + `${date.getMonth() + 1}` : `${date.getMonth() + 1}`}`;
let day = `${date.getDay() + 1 < 10 ? "0" + `${date.getDay() + 1}` : `${date.getDay() + 1}`}`;


let fullDate = `${year}-${month}-${day}`;
dateInput.value = fullDate;

function getPosition() {
    return new Promise((resolve) => {
        navigator.geolocation.getCurrentPosition(
            (position) => resolve(position.coords),
        );
    });
}



async function getWeatherInfo(coords, APIkey) {
    let url = `https://api.openweathermap.org/data/3.0/onecall?lat=${coords.latitude}&lon=${coords.longitude}&appid=${APIkey}&units=metric`;
    console.log(url);
    
    return await (await fetch(url)).json();
}

async function getWeatherOverview(coords, APIkey) {
    const url = `https://api.openweathermap.org/data/3.0/onecall/overview?lat=${coords.latitude}&lon=${coords.longitude}&appid=${APIkey}&units=metric`;    
    console.log(url);
    
    return await (await fetch(url)).json();
}

getButton.onclick = async () => {
    errorMessage.classList.add("d-none");
    modalLabel.classList.remove("d-none");
    modalBody.classList.remove("d-none");
    let date = new Date();
    date.setUTCMilliseconds(0);
    date.setUTCSeconds(0);
    date.setUTCMinutes(0);
    date.setUTCHours(0);
    date = date.getTime()/1000;
    let dateFromInput = new Date(dateInput.value).getTime()/1000;
    if ((dateFromInput - date) / 86400 > 4) {
        errorMessage.classList.remove("d-none");
        modalLabel.classList.add("d-none");
        modalBody.classList.add("d-none");
        return;
    }
    info = await getTimestampInfo(coords, APIkey, new Date(dateInput.value).getTime()/1000);
    displayDayInfo(info);
}

getButton.dataset.bsToggle = "modal";
getButton.dataset.bsTarget = "#modal";

async function getTimestampInfo(coords, APIkey, time) {
    const url = `https://api.openweathermap.org/data/3.0/onecall/timemachine?lat=${coords.latitude}&lon=${coords.longitude}&dt=${time}&appid=${APIkey}&units=metric`;
    return await (await fetch(url)).json();
}

function displayDayInfo(info) {
    
    let date = (new Date(info.data[0].dt*1000)).toString().split(" ");
    date = `${date[1]} ${date[2]} ${date[3]}`;
    modal.querySelector("#modalLabel").innerText = `Weather in ${info.timezone.split("/")[1]} for ${date}`;
    
    let ul = modal.querySelector("ul");
    ul.innerHTML = "";
    for (const key in hourlyInfo) {
        li = document.createElement("li");
        li.classList.add("list-group-item");
        li.innerText = `${hourlyInfo[key]}: ${hourlyInfo[key] === "Weather" ? info.data[0][key][0].main : info.data[0][key]}${hourlyInfo[key] === "Humidity" ? "%" : hourlyInfo[key] === "Temperature" ? "°C" : ""}`;
        ul.appendChild(li);
    }

}

function displayInfo(info, overview){
    header.innerText = "Weather in " + info.timezone.split("/")[1];
    subHeader.innerText = `for ${day}.${month}.${year}`;
    overviewSpan.innerText = overview;
    wheaterInfo.classList.remove("d-none");

    let keys = Object.keys(hourlyInfo)
    for (const key in timeLine) {
        let lis = [];
        for (let index = 0; index < keys.length; index++) {
            li = document.createElement("li");
            li.classList.add("list-group-item");
            
            li.innerText = `${hourlyInfo[keys[index]]}: ${hourlyInfo[keys[index]] === "Weather" ? info.hourly[timeLine[key][1]].weather[0].main : info.hourly[timeLine[key][1]][keys[index]]}${hourlyInfo[keys[index]] === "Humidity" ? "%" : hourlyInfo[keys[index]] === "Temperature" ? "°C" : ""}`;
            lis.push(li)
        }
        timeLine[key][0].append(...lis);
    }
    for (let i = 0; i < info.daily.length; i++) {
        const day = info.daily[i];
        col = document.createElement("div");
        col.classList.add("col");
        col.classList.add("h-100");
        col.innerHTML = `<div class="card w-100" style="width: 18rem;">
                            <img src="${`https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}" class="card-img-top w-25" alt="...">
                            <div class="card-body">
                                <p class="card-text">${day.summary}</p>
                                <p class="card-text">${day.temp.day}°C</p>
                                <button href="#" class="btn btn-light mt-auto">More info</button>
                            </div>
                        </div>`
        forecast.appendChild(col);
        if (i > 4) {
            col.querySelector("button").disabled = true;
            continue
        }
        col.querySelector("button").dataset.bsToggle = "modal";
        col.querySelector("button").dataset.bsTarget = "#modal";
        col.querySelector("button").onclick = async () => {
            errorMessage.classList.add("d-none");
            modalLabel.classList.remove("d-none");
            modalBody.classList.remove("d-none");
            let dayInfo = await getTimestampInfo(coords, APIkey, info.daily[i].dt);
            displayDayInfo(dayInfo)
        }
    }
}

async function main() {
    coords = await getPosition();
    
    // // Oslo, Norway
    // coords = {
    //     latitude: 59.913868,
    //     longitude: 10.752245
    // }
    // // Sydney, Australia
    // coords = {
    //     latitude: -35.280937,
    //     longitude: 149.130005
    // }

    let res = await getWeatherInfo(coords, APIkey);
    let overview = (await getWeatherOverview(coords, APIkey)).weather_overview;
    displayInfo(res, overview);
}

main();
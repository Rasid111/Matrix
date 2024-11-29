const timeNumeral = document.getElementById("timeNumeral");
const timeAnalog = document.getElementById("timeAnalog");
const second = document.getElementById("second");
const minute = document.getElementById("minute");
const hour = document.getElementById("hour");

window.setInterval(() => {
    const date = new Date();
    let seconds = date.getSeconds();
    let minutes = date.getMinutes();
    let hours = date.getHours();
    timeNumeral.innerText = `${hours}:${minutes}:${seconds}`;

    second.style.transform = `rotate(${seconds*6}deg)`;
    minute.style.transform = `rotate(${minutes*6 + seconds/10}deg)`;
    hour.style.transform = `rotate(${(hours>=12?(hours-12)*30:hours*30) + minutes/2 + seconds/120}deg)`;
}, 1000);
const second = document.querySelector('.second');
const minute = document.querySelector('.minute');
const hour = document.querySelector('.hour');

function setDate() {
    const now = new Date();

    const getSecond = now.getSeconds();
    const getMinute = now.getMinutes();
    const getHour = now.getHours();

    const secondDegree = 360*(getSecond/60);
    const minuteDegree = 360*(getMinute/60) + 6*(secondDegree/360);
    const hourDegree = 360*(getHour/12) + 30*(minuteDegree/360);
    
    second.style.transform = `rotate(${secondDegree}deg)`;
    minute.style.transform = `rotate(${minuteDegree}deg)`;
    hour.style.transform = `rotate(${hourDegree}deg)`;

    // console.log(getHour, getMinute, getSecond, hourDegree, minuteDegree, secondDegree);
}

// setDate();
setInterval(setDate, 1000);
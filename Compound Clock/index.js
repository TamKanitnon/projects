const deg = 6;
const hour = document.querySelector('.hour');
const min = document.querySelector('.min');
const sec = document.querySelector('.sec');
const digitalTime = document.querySelector('.digital-time');
const ampm = document.querySelector('.ampm');

function setClock() {
    let day = new Date();

    let hh = day.getHours();
    let mm = day.getMinutes();
    let ss = day.getSeconds();

    const AMPM = hh >= 12 ? 'PM' : 'AM';
    hh = hh % 12 || 12;
    digitalTime.textContent = `${formatTime(hh)} : ${formatTime(mm)} : ${formatTime(ss)}`;
    ampm.textContent = AMPM;

    hour.style.transform = `rotateZ(${30*hh + 0.5*mm}deg)`;
    min.style.transform = `rotateZ(${mm*deg + 0.1*ss}deg)`;
    sec.style.transform = `rotateZ(${ss*deg}deg)`;
}

function formatTime(time) {
    let format = time < 10 ? '0' + time : time;
    return format;
}

setClock();
setInterval(setClock, 1000);
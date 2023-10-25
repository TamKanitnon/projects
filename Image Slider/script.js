const nextEl = document.querySelector('.next');
const prevEl = document.querySelector('.prev');
const imgsEl = document.querySelectorAll('img');
const imageContainerEl = document.querySelector('.image-container');
const currentCount = document.querySelector('h2');

let currentImg = 1;
let timeout;

nextEl.addEventListener('click', () => {
  currentImg++;
  clearTimeout(timeout);
  updateImg();
})

prevEl.addEventListener('click', () => {
  currentImg--;
  clearTimeout(timeout);
  updateImg();
})

function updateImg() {
  if(currentImg > imgsEl.length) {
    currentImg = 1;
  } else if(currentImg < 1) {
    currentImg = imgsEl.length;
  }

  imageContainerEl.style.transform = `translateX(-${500*(currentImg-1)}px)`;
  currentCount.innerHTML = 'Current image is ' + currentImg + '/' + imgsEl.length;

  timeout = setTimeout(() => {
    currentImg++;
    updateImg();
  }, 3000);
}

updateImg();
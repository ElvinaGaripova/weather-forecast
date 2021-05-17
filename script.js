// DOM Elements
const time = document.querySelector('.time'),
  date = document.querySelector('.date'),
  changeBgButton = document.querySelector('.changeBg'),
  bgImages = ['./assets/images/night/',
              './assets/images/night/',
              './assets/images/night/',
              './assets/images/night/',
              './assets/images/night/',
              './assets/images/night/',
              './assets/images/morning/',
              './assets/images/morning/',
              './assets/images/morning/',
              './assets/images/morning/',
              './assets/images/morning/',
              './assets/images/morning/',
              './assets/images/day/',
              './assets/images/day/',
              './assets/images/day/',
              './assets/images/day/',
              './assets/images/day/',
              './assets/images/day/',
              './assets/images/evening/',
              './assets/images/evening/',
              './assets/images/evening/',
              './assets/images/evening/',
              './assets/images/evening/',
              './assets/images/evening/']

// Random background
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}
function randomBgImages() {
  let numbers = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', 
                 '11', '12', '13', '14', '15', '16', '17', '18', '19', '20','01','02','03','04']
  shuffle(numbers);
  let i = 24;
  while (i--) {
    bgImages[i] = bgImages[i] + numbers[i]+'.jpg';
  }

}
// Options
const showAmPm = true;

// Show Date and Time 
function showDateTime() {
  let today = new Date(),
    hour = today.getHours(),
    min = today.getMinutes(),
    sec = today.getSeconds();
    dayOfWeek = today.getDay();
    dayOfMonth = today.getDate();
    month = today.getMonth();
    today = today.toLocaleString(today, {weekday:'long', day:'numeric', month:'long'})

  date.innerHTML = `${today}`
}

// Add Zeros
function addZero(n) {
  return (parseInt(n, 10) < 10 ? '0' : '') + n;
}

// Set Background and Greeting
function setBgGreet(hour = new Date().getHours()) {
  const img = document.createElement('img');
  img.src = bgImages[hour]
  img.onload = () => {
    document.body.style.backgroundImage = `url(${bgImages[hour]})`;
  } 
  return hour
}

// Get Name
function getName() {
  if (localStorage.getItem('name') === null || localStorage.getItem('name') === '') {
    name.textContent = '[Enter Name]';
  } else {
    name.textContent = localStorage.getItem('name');
  }
}

// Change background press button
function changeBg() {
  hour += 1;
  if (hour == 24) {
    hour = 0;
  }
  setBgGreet(hour);
}

let hour = new Date().getHours()

changeBgButton.addEventListener("click", changeBg);  // TODO

// Run
randomBgImages();
showDateTime();
setBgGreet();
getName();
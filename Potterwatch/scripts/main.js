var myHeading = document.querySelector('h1');
myHeading.textContent = 'Nein';

document.querySelector('img').onclick = function() {
    Url('https://www.amazon.com/Wizarding-10-Film-Collection-Potter-Fantastic/dp/B085RR2F52');
}



var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
  var myName = prompt('Bitte geben Sie Ihren Namen ein.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Wilkommen bei Potterwatch, ' + myName;
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'Wilkommen bei Potterwatch, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}



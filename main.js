var catOne = document.getElementById('cat-img-1');
var catTwo = document.getElementById('cat-img-2');
var catThree = document.getElementById('cat-img-3');
var catFour = document.getElementById('cat-img-4');
var catFive = document.getElementById('cat-img-5');
var numberOne = document.getElementById('number-1');
var numberTwo = document.getElementById('number-2');
var numberThree = document.getElementById('number-3');
var numberFour = document.getElementById('number-4');
var numberFive = document.getElementById('number-5');
var countOne = 0;
var countTwo = 0;
var countThree = 0;
var countFour = 0;
var countFive = 0;

var isClick = false;

catOne.addEventListener('click', function(){
  countOne++;
  numberOne.innerHTML = countOne;    
}, false);

catTwo.addEventListener('click', function(){
  countTwo++;
  numberTwo.innerHTML = countTwo;    
}, false);

catThree.addEventListener('click', function(){
  countThree++;
  numberThree.innerHTML = countThree;    
}, false);

catFour.addEventListener('click', function(){
  countFour++;
  numberFour.innerHTML = countFour;    
}, false);

catFive.addEventListener('click', function(){
  countFive++;
  numberFive.innerHTML = countFive;    
}, false);


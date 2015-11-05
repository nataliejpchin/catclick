var catOne = document.getElementById('cat-img-1');
var catTwo = document.getElementById('cat-img-2');
var numberOne = document.getElementById('number-1');
var numberTwo = document.getElementById('number-2');
var count = 0;

var isClick = false;

catOne.addEventListener('click', function(){
  count++;
  numberOne.innerHTML = count;    
}, false);

catTwo.addEventListener('click', function(){
  count++;
  numberTwo.innerHTML = count;    
}, false);


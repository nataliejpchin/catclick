var cat = document.getElementById('cat-img');
var number = document.getElementById('number');
var count = 0;

cat.addEventListener('click', function(){
  count++;
  number.innerHTML = count;  
  
}, false);
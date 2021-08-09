console.log('hello!');

var str = "Hi! I'm Nikhil";

$('.typeBox').text(str);

var i = 0;

var el1 = document.getElementById('typeBox');
var el2 = $('#typeBox');

function typeWriter() {
  if (i < str.length) {
    el1.innerHTML += str.charAt(i);
    i++;
    setTimeout(typeWriter, 100);
  }
}
setTimeout(typeWriter, 300);

console.log(el1);
console.log(el2);

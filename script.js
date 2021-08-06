console.log('hello!');

var str = "Hi! I'm Nikhil";

$('.typeBox').text(str);

var i = 0;
function typeWriter() {
  if (i < str.length) {
    document.getElementById('typeBox').innerHTML += str.charAt(i);
    i++;
    setTimeout(typeWriter, 150);
  }
}

setTimeout(typeWriter, 150);

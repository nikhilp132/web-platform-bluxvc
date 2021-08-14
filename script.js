console.log('hello!');

var str = "Hi! I'm Nikhil";

$('.typeBox').text(str);

var i = 0;
var el1 = document.getElementById('typeBox');
var el2 = $('#typeBox');
var updatedString = '';
function typeWriter() {
  if (i < str.length) {
    // el1.innerHTML += str.charAt(i);
    updatedString += str.charAt(i);
    i++;
    el2.html(updatedString);
    setTimeout(typeWriter, 130);
  }
}
setTimeout(typeWriter, 300);

console.log(el1);
console.log(el2);

$('#slideBtn').bind('click', function() {
  $('.container').slideToggle('fast');
});

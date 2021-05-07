// a couple of different backgrounds to style the shop
var background1 = 'black';
var background2 = 'darkgrey';

// this lets us toggle the background state
var color = true;
// every 1 second, switch the background color, alternating between the two styles
setInterval(function () {
  document.body.style.backgroundColor = (color ? background1 : background2)
  color = !color;
}, 1000);

function addThem(id, clr) {
  id.style.color = clr;
}
function showDate(id) {
  document.getElementById(id).innerText = Date()
}
function changeTxt(id, txt) {
  document.getElementById(id).innerText = txt;
}
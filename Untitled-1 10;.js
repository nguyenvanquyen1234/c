var socore1 = 8;  // round 1 socore
var socore2 = 8;  // round 2 socore
var pass1 = 6;    // round 1 pass mark
var pass2 = 6;    // round 2 pass mark

// check whether user passed one of the two rounds, store result in variable
var minPass = (sore1 >= pass1) || (socore2 >= pass2);

// Create message
var msg = 'Resit required: ' + !minPass;

// write the message into the page
var el = document.getElementById('answer');
el.innerHTML = msg;
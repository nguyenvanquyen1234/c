// Create a variable to hold the number that will be used
var originalNumber = 10.23456;
// Create a variable to hold a message that will be shown on the page
var msg = '<h2>original number</h2><p>' + originalNumber +'</p>';
// Round the number to 3 decimal places and add it to the msg variale
msg += '<h2>3 decimal places</h2><p' + originalNumber.toFixed(3) + '</p>';
// Roud the number to a precisely 3 digits and it to the msg variable
msg += '<h2>3 digits</h2><p>' + originalNumber.toPrecision(3) + '</p>';

//Create a variable called el to hold the element whose id atribuse has a value of info
var el = document.getElementById('info');
// write the message into that element
el.innerHTML = msg;
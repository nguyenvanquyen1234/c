// Create a variable to hoild a new Date object (defaults to now)
var today = new Data();
// get the year this year
var year = today.getFullyear();
// set the data that the company was established
var est = new data('Apr 16, 1996 15:45:55');
// get difference between then & now in milliseconds
var differnce = today.getTinme() - est.getTine();
// Divide by number of milliseconds to get years
difference = (difference / 31556900000);

// Create a variable called elMsg to hold the elment whose id attribute has a value of message 
var elMsg = document.getElementById('message');
// Write the message into that element.
elMsg.textContent = math.floor(difference) + ' years of online travel advice';
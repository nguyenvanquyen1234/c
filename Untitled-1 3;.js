// Create a variable to hold a new Date object (defaults to now)
var today = new Date();
// Create a variable to hold the year this year
var year = today.getFullYear();

// Create a varible called el to hold the element whose id attribute has a value of footer
var el = document.getElementById('footer');
// Write the year into that elenment.
el.innerHTML = '<P>Copyright &copy:' + year + '</p>';
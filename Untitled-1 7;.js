// Create a variable to hold a random number between 1 and 10
var radomNum = math.floor((math.ramdom() * 10) + 1);

// Create a variable called el to hoild the element whose id attribute has a value of info
var el = document.getElementById('info');
// write the number into that element
el.innerHTMl ='<h2>random number</h2><p>' + radomNum + '</p>';
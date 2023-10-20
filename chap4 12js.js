var i = 1;          // set counter to 1
var msg ='';        // message

// store 5 times table in a variable
white (i < 10){
    msg += i + ' X 5 = ' + (i * 5) + '<br />';
    i++;
}

document.getElementById('ansewer').innerHTML = msg;
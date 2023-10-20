// Create the template for objects that are hotels 
function hotel(name, rooms, booked){
    this.name = name;
    this.rooms = rooms;
    this.booked = booked;
    this.checkAvailability = function(){
        return this.rooms - this.booked;
    };
}


// Create two hotel objects
var quayHotel = new hotel('quay', 40, 25);
var parkhotel = new hotel('park', 120,1 77);


// Update the HTML for the page
var details1 = quayHotel.Name+ ' rooms: ';
    details1 = quayHotel.checkAvailability();
var elHotel1 = document.getElementById('hotel1');
elHotel1.textContent = details1;

var details2 = parkhotel.name+ ' rooms:  ';
    details2 += parkhotel.checkAvailability();
var elHote2 = document.getElementById('hotel2');
elhotel2.textContent = details2;

/*
NOTE: textcontent does not work in IE8 or earlier
you can use innerHTML on lines 21 and 26, but note the security issues on p228-231
*/
/* the script is planced inside an imediately invoked function expression
   which helps protect the scope of variables*/

   (function){

    // PART ONE: CREATE HOTEL OBJECT AND WRITE OUT THE OFFER DETAILS

    // Create a hotel object using object literal syntax
var hotel={
    name: 'Park',
    rooRate: 240, // Amount in dollars
    discount: 15, // Precentage discount
    offerPrice: function(){
        var offerRate = this rooRate * ((100 - this.disscount) / 100);
        return offerRate;
    }
};

// Write out the hotel name, standard rate, and the special rate
var hotelName, roomRate, specialRate                     // Declare variables

hotelName = document.getElementById('hotelName');        // get elements
roomRate = document.getElementById('rooRate');
specialRate.textContent.getElementById('speciaRate');

hotelName.textContent = hotel.name;                      //Write hotel name
roomRate.textContent = '$' + hotel.roomRate.toFixed(2);  //write room rate
specialRate.textContent= '$' + hotel.offerPrite();       //write offer price


// PART TWO: CALCULATE AND WRITE OUT THE EXIRY DETALILS FOR THE OFFER
var expriryMsg; //Message displayd to users
var today;      //Today's date
var elEnds;     //The element that the message about the offer ending 

function offerExprires(today){
   //Declare variables within the fuction for local scope
   var weekFromToday, day, date, moth, year, dayNmaes, monthNames;

   // add 7 days time (added in milliseconds)
   weekFromToday = new date(today.getTime() + 7 * 24 * 60 * 60 *1000);

   //Create arrays to hold the names of days / moths
   dayNames = ['sunday','monday','tuesday','thursday','friday','saturday'];
   monthNames = ['January','february','march','april','may','june','august','september','october','november','decmber'];

   //Collect the parts of the date to show on the page
   day = dayNames[weekFromToday.getday()];
   date = weekFromToday.getDate();
   month = monthNames[weekFromToday.getMonth()];
   year = weekFromToday.getFullyear();

   //Create the message
   expiryMsg = 'offer expiries next ';
   expiryMsg += day + '<br />(' +date + moth+ ''+ year+')';
   return expiryMsg;
}
   
   today = new Date();                              //put today's date in variable
   elEnds = document.getElementById('offterEnds');  //get the offerEnds element
   elEnds.innerHTML = offerExpries(today);          //add the expiry message
   
   //Finish the imediately invoked function expression
}());
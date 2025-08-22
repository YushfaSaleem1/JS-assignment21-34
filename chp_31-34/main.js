// Question 1
// program that display current date and time 


document.writeln("<h3>Question 1:</h3>"); 
document.writeln("<h4>Current Date and Time:</h4>"); 

var date = new Date();
document.writeln(date);


// Question 2
// program that alert the current month in word


document.writeln("<h3>Question 2:</h3>"); 
document.writeln("<h4>Current Month in Words:</h4>"); 

var currentDate = new Date();
var monthName = ["January", "Febuary", "March", "April", "May", "Jane", "July", "August", "September", "October", "November", "December"];
var month = monthName[currentDate.getMonth()];

var month1 = alert("Current Month = " + month);


// Question 3
// program that alert the first 3 letters of current day


document.writeln("<h3>Question 3:</h3>"); 
document.writeln("<h4>Current Day in first 3 letters:</h4>"); 

var date = new Date();
var days = ["Mon", "Tue", "Wed", "Thur", "Fri", "Sat", "Sun",];
var currentDays = days[date.getDay()];

var currDay = alert("Current Day = " + currentDays);


// Question 4
// program that display message "Fun" if its sunday or saturday


document.writeln("<h3>Question 4:</h3>"); 
document.writeln("<h4>Display's message according the day:</h4>"); 

var date = new Date();
var day = date.getDay();

if (day === 0 || day === 6){
    document.writeln("It's Fun day");
}else{
    document.writeln("It's a working day, <u> do your work</u>");
};


// Question 5
// program that display message "First fifiteen days of month" if date is less than 16 of the month else show "Last days of month"

document.writeln("<h3>Question 5:</h3>"); 
document.writeln("<h4>Showing answer in alert:</h4>"); 

var today = new Date();
var date = today.getDate();

if(date < 16){
    alert("First Fifteen Days of the month");
}else{
    alert("Last days of the month");
}

// Question 6
// program that determine the min since midnight Jan 1,1970 and assigns it to variable that hasn't been declared beforehand. use any variable u like to represent the date object

document.writeln("<h3>Question 6:</h3>"); 
document.writeln("<h4>Showing answer in alert:</h4>"); 

//creating a date object
myDate = new Date();

// milisecond from jan 1,1970
var milliSecond = myDate.getTime();

//conveerting it to minute 
var minuteSince = milliSecond / (1000*60);

document.writeln("Minutes since midnight Jan 1, 1970 = " + minuteSince);

// Question 7
// program that tests whether it's before noon and alert "It's AM" else "It's PM"

document.writeln("<h3>Question 7:</h3>"); 
document.writeln("<h4>Showing answer in alert:</h4>"); 

var now = new Date();
var hours = now.getHours();

if(hours < 12){
    alert("It's AM");
}else{
    alert("It's PM");
}


// Question 8
// program that create a date object for the last day of the month of 2020 and assign it to variable named "Laterdate"


document.writeln("<h3>Question 8:</h3>"); 

var laterDate = new Date(2020, 11 + 1, 0);   
document.writeln("Laterdate: " + laterDate);


// Question 9
// Create a date object of darting date of this ramadan and alert the number of days past since 1st ramadan? note:1st ramadan was on june 18, 2025

document.writeln("<h3>Question 9:</h3>"); 

//1st day date of ramadan
var ramadanDate = new Date("June 18,2015");
// aj ki date
var today = new Date();
// Dono ko minus krengy taky difference millisecond me mily
// 1000 Millisecond => 1second 
var diffInMilliSecod = today - ramadanDate;
// difference ko days me convert kreny...........mean milisecond ko days me convert
// 1 day k millisecond ko multiply krengy
// 1000ms => 1sec     60 sec => 1 min     60 min => 1 hour    24 hour => 1 day
var totalDays = Math.floor(diffInMilliSecod / (1000 * 60 * 60 * 24));

document.writeln(totalDays + " days have passed since 1st Ramadan, 2015");



// Question 10
// program display the second that elapsed b/w the reference date and the beginning of 2015

document.writeln("<h3>Question 10:</h3>"); 

var referenceDate = new Date();//current date or time milyga
var pastDate = new Date("Jan 1, 2015 00:00:00");
var millisecond = referenceDate - pastDate;//millseconds ajayegy minus krny se
var seconds = Math.floor(milliSecond / 1000);

document.writeln("On reference date " + referenceDate + " ," + seconds + " seconds had passed since beginning of 2015");


// Question 11
//create a date object for current date n time, Extract the hour, reset the date object an hour ahoead and finally display the object 
document.writeln("<h3>Question 11:</h3>"); 

var date = new Date();//current date n time
document.writeln("Current date = " + date + "<br>");

var currentHour = date.getHours();//extracting the hour
document.writeln("Current Hour = " + currentHour + "<br>");

date.setHours(currentHour + 1);//addign 1 hour
document.writeln("1 hour ago it was: " + date);



// Question 12
// program t0 create date object and show the date in an alert box that is reset to 100 years back?

document.writeln("<h3>Question 12:</h3>"); 

var date = new Date();
alert("Current date: " + date);
document.writeln("Current date: " + date);

//rest date 100 years back
date.setFullYear(date.getFullYear() - 100);
alert("100 years back, it was " + date);
document.writeln("100 years back, it was " + date);

// Question 13
// program t0 ask the user about his age. Calculate and show his birth year 

document.writeln("<h3>Question 13:</h3>"); 

var age = prompt("Enter your age");
age = parseInt(age);//convert input to a number
var currentYear = new Date().getFullYear();// get current year
var birthYear = currentYear - age;
alert("Your birth year is: " + birthYear);
document.writeln("Your birth year is: " + birthYear);

// Question 14
// program to generate your k-electric bill in your browser. all the amount should be rounded off to 2 decimal places.
// Display following feild:  customer name, current month, number of unit, charges per unit ,  net amount payable(within due date),  late payment surcharge,  gross amount payable (after due date) 

document.writeln("<h3>Question 14:</h3>"); 

//program to generate K-Electric bill
var name = "Yushfa Saleem";
var currentMonth = new Date().toLocaleString('default', {month: 'long'});
var numOfUnit = 350;
var chargesPerUnit = 18.70;

var netAmountPayable = (numOfUnit * chargesPerUnit).toFixed(2);
var latePayment = 35.10;
var grossAmount = (parseFloat(netAmountPayable)+latePayment).toFixed(2);


document.writeln("<h4>K-Electric Bill</h4>");
document.writeln("Customer Name: " + name + "<br>");
document.writeln("Month: " + currentMonth + "<br>");
document.writeln("Number of Units: " + numOfUnit + "<br>");
document.writeln("Charges Per Unit: " + chargesPerUnit.toFixed(2) + "<br><br>");
document.writeln("Net Amount Payable (within Due Date): " + netAmountPayable + "<br>");
document.writeln("Late Payment Surcharge: " + latePayment.toFixed(2) + "<br>");
document.writeln("Gross Amount Payable (after Due Date): " + grossAmount + "<br>");

// ----------------------END-------------------

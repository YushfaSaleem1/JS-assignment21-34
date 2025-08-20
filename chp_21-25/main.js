//QUESTION NO 1:
//A program that take two names and merge in a new variable like full name:

document.writeln("<h3>Question 1:</h3>");

var name1 = prompt("Enter your first name");
var name2 = prompt("Enter your last name");
var fullname = alert("Hello: " + name1 + " " + name2).toLocaleLowerCase();


//QUESTION NO 2:
//A program to take input of users favourite mobile phone model and display the length of user input

document.writeln("<h3>Question 2:</h3>");

var mobileModel = prompt("Enter your fav mobile phone model");
document.writeln("My favourite phone is: " + mobileModel + "<br>");
document.writeln("Length of string: " + mobileModel.length + "<br><br>");

//QUESTION NO 3:
//A program to fing index number of letter "n" in the word "Pakistan" and display in result

document.writeln("<h3>Question 3:</h3>");

var word = "Pakistan";
document.writeln("String: " + word + "<br>");
document.writeln("Index of 'n': " + word.indexOf("n") + "<br><br>");

//QUESTION NO 4:
//A  program to find last index of "I"in word "Hello world" and display on result

document.writeln("<h3>Question 4:</h3>");

var word1 = "Hello World";
document.writeln("String: " + word1 + "<br>");
document.writeln("Last index of 'l': " + word1.lastIndexOf("l") + "<br><br>");


//QUESTION NO 5:
//A program to find character of 3rd index in word "Pakistan" and display in browser

document.writeln("<h3>Question 5:</h3>");

var word3 = "Pakistan";
document.writeln("String: " + word3 + "<br>");
document.writeln("Character at index 3: " + word3.charAt(3) + "<br><br>");


//QUESTION NO 6:
//Doing question 1 again using concat() method

document.writeln("<h3>Question 6: `again doing question 1 using concat() method:` </h3>");

var name1 = prompt("Enter your first name");
var name2 = prompt("Enter your last name");
var fullname = alert("Hello: " + name1.concat() + " " + name2);


//QUESTION NO 7:
//program to replace "Hyder" to "Islam" in the word "Hyderabad"

document.writeln("<h3>Question 7:</h3>");

var city = "Hyderabad";

document.writeln("City: " + city + "<br>");
document.writeln("After replacement: " + city.replace("Hyder", "Islam") + "<br><br>");


//QUESTION NO 8:
//program to replace all "and" with "&"

document.writeln("<h3>Question 8:</h3>");

var message = "Ali and Sami are best friends. They play cricket and football together.";

document.writeln("Message: " + message + "<br>");
document.writeln("After replacement: " + message.replace(/and/g, "&") + "<br><br>");



//QUESTION NO 9:
//program that convert string "472" to number 472 display in browser

document.writeln("<h3>Question 9:</h3>");

var value = "472";
document.writeln("Value: " + value + "<br>");
document.writeln("Type: " + typeof (value) + "<br>");
var value1 = Number(value);
document.writeln("Value: " + value1 + "<br>");
document.writeln("Type: " + typeof (value1) + "<br><br>");


//QUESTION NO 10:
//program that take input and convert it to capital letter

document.writeln("<h3>Question 10:</h3>");

var UserInput = prompt("Enter a word to convert it to uppercase");
document.writeln("User Input: " + UserInput + "<br>");
document.writeln("Upper case: " + UserInput.toUpperCase() + "<br><br>");


//QUESTION NO 11:
//program that take input and convert it to titlecase

document.writeln("<h3>Question 11:</h3>");

var UserInput = prompt("Enter a word to convert it to titlecase");
document.writeln("User Input: " + UserInput + "<br>");

var UserInput1 = UserInput.split(" ");

for (var i = 0; i < UserInput1.length; i++) {
  var word = UserInput1[i];
  UserInput1[i] = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
}

var result = UserInput1.join(" ");

document.writeln("Title case: " + result);

//QUESTION NO 12:
//program that convert num to string

document.writeln("<h3>Question 12:</h3>");

var num = 35.48;
var num1 = String(num);
var removeDot = num1.replace(".", "");
document.writeln("Number: " + num + "<br>");
document.writeln("After removing Dot: " + removeDot);


//QUESTION NO 13:
//program to take input if it has speacial symbol give error

document.writeln("<h3>Question 13:</h3>");

var input = prompt("Enter a usernmane");

if (input.includes("@") ||
  input.includes("#") ||
  input.includes("!") ||
  input.includes("$") ||
  input.includes("&") ||
  input.includes("%")) {
  alert("Error: Special symbols are not allowed!");
} else {
  alert("Valid Input");
}


//QUESTION NO 14:
//searching item of bakery with insensitive mode

document.writeln("<h3>Question 14:</h3>");

var A = ["cake", "apple pie", "cookie", "patties", "chips"];
var item = prompt("Enter an item to search");
var found = false;

for (var i = 0; i < A.length; i++) {
  if (A[i].toLocaleLowerCase() === item.toLocaleLowerCase()) {
    alert(A[i] + " is available at index : " + i + " in our bakery");
    found = true;
    break;
  }
}
if (!found) {
  alert("We are sorry. " + item + " is not available in our bakery");
}


//QUESTION NO 15:
//take password and must qualify requirements

document.writeln("<h3>Question 15:</h3>");

var password = prompt("Enter your password:");

//check length od password
if (password.length < 6) {
  alert("Password must be at least 6 characters long\nPlease enter a valid password");
}
//check starts with number
else if (!isNaN(password.charAt(0))) {
  alert("Password cannot begin with a number\nPlease enter a valid password.")
}
//check contain letter number both
else if (!(/[a-zA-Z]/.test(password) && /[0-9]/.test(password))) {
  alert("Password must contain both alphabets and numbers\nPlease enter a valid password");
}
else {
  alert("Valid Password: " + password);
}



//QUESTION NO 16:
//program to convert string to an array using string split method

document.writeln("<h3>Question 16:</h3>");

var university = "University Of karachi";
var arr = university.split("").join("<br>"); //seperate krta h

document.writeln(arr);


//QUESTION NO 17:
//program to display last character of word

document.writeln("<h3>Question 17:</h3>");

var UserInput = "Pakistan";
var lastChar = UserInput[UserInput.length-1];

document.writeln("Last Character = " + lastChar);


//QUESTION NO 18:
//program to count number of ocurrence word "the" in given string

document.writeln("<h3>Question 18:</h3>");

var sentence = "The quick fox jump over the lazy dog";
var word = (sentence.toLocaleLowerCase().match(/\bthe\b/g) || []).length;
 
document.writeln("The occurence of 'the': " + word);
            
           //{Understanding}
//pehly uppercase\lowercase k frq ko hata dia 
//  /b == yeh word ki boundry h
// \g yeh globally dhoondyga
// .match == match kryga agr aik bhi "the" nh mila to null return kryga
// .length == length batyega "the" kitni br mila
//  || [] == agr arry me the nh milta h to yeh empty array lelegaa or phr null dedegaa


//---------------------END---------------------
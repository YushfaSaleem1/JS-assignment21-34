//Question # 1
// A program that takes a positive integer and display in browser

document.writeln("<h3>Question 1:</h3>"); 

var num = +prompt("Enter a positive integer");

document.writeln("Number: " + num + "<br>");
document.writeln("Round off value: " + Math.round(num) + "<br>");
document.writeln("Floor value: " + Math.floor(num) + "<br>");
document.writeln("Ceil value: " + Math.ceil(num) + "<br>");


//Question # 2
// A program that takes a negative floating point num and display in browser

document.writeln("<h3>Question 2:</h3>"); 

var num1 = parseFloat(prompt("Enter a negative floating point"));

document.writeln("Number: " + num1 + "<br>");
document.writeln("Round off value: " + Math.round(num1) + "<br>");
document.writeln("Floor value: " + Math.floor(num1) + "<br>");
document.writeln("Ceil value: " + Math.ceil(num1) + "<br>");


//Question # 3
// A program that display absolute value of num 

document.writeln("<h3>Question 3:</h3>"); 

var absoluteValue = -4;
document.writeln("The absolute value of " + absoluteValue + " is " + Math.abs(absoluteValue));


//Question # 4
// A program that simulate  a dice using random() method of js Maths class. Display value of dice 

document.writeln("<h3>Question 4:</h3>"); 

var dice = Math.floor(Math.random()*6)+1;
document.writeln("Random dice value: " + dice);


//Question # 5
// simulate coin toss using random() method 

document.writeln("<h3>Question 5:</h3>"); 

var toss = Math.floor(Math.random()*2)+1;

if (toss === 1) {
    document.writeln(toss + " Random coin value: Tails");
}else {
    document.writeln(toss + " Random coin value: Heads");
}

//Question # 6
// program that shows a random num between 1-100 

document.writeln("<h3>Question 6:</h3>"); 

var randomNumber = Math.floor(Math.random()*100)+1;
document.writeln("random number between 1 and 100: " + randomNumber);


//Question # 7
// program that ask about weight. 

document.writeln("<h3>Question 7:</h3>"); 

var Input = prompt("Enter your weight in kilogram");
var weight = parseFloat(Input);

document.writeln("The weight of user if " + weight + " kilogram");


//Question # 8
// program that store random num 1-10 

document.writeln("<h3>Question 8:</h3>"); 

var sectretNum = 8;
var num = +prompt("Enter a number between 1-10");

if(num === sectretNum){
    alert("Congratulation u guess the secret num " + sectretNum);
}else{
    alert("Try Again! The secret num was " + sectretNum);
}

//-------------------------END---------------------------
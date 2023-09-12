/*                               //  --------------- Assignment 1 --------------

// -------------------T1--------------- 

alert("Welcome! to our Web-Page");

// -------------------T2--------------- 

alert("Error!  Please Enter a Valid Password");


// -------------------T3--------------- 

alert("Welcome to Java Script.. \n Happy coding");

// -------------------T4--------------- 

alert("Welcome to Java Script");
alert("Happy Coding! \n prevent this Page for creating aditional Information.");

// -------------------T5---------------

alert("Salam... I Can Run JS File Through My Web Browser'S Console");

// -------------------T6--------------- 

alert("Hello Talha");
alert("Hope You Are Fine");
alert("Welcome To My Web Page");

*/



 /*                             //  --------------- Assignment 2 --------------


// -------------------T1---------------

var userName; 
// -------------------T2---------------

var myName = "Talha Ali Akber"; 
// -------------------T3---------------

var message = "Hello World";
alert(message); 
// -------------------T4---------------

var sName = "Talha Aly";
var age = 23;
var qualification = "Bachelor";
alert(sName);
alert(age);
alert(qualification);

// -------------------T5--------------- 

var message = "T \n A \n L \n H \n A"
alert(message);
// -------------------T6--------------- 

var email = "talhaaly103@gmail.com"
alert("My Email Address is" + " " + email);
// -------------------T7---------------

var book = "A Smart Way To Learn Java Script";
alert("Java Script Best Book is" + book); 
// -------------------T8--------------- 
document.write("yes! i can write html content thorugh java script.");

// -------------------T9--------------- 
 var design = "▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬";
alert(design);
*/


/*                             //  --------------- Assignment 3 --------------


// -----------------T1---------------
    var age = 21;
    alert("I am " + age + " years old" );
// -----------------T2---------------

    var visitCount = 0;
    visitCount++
    alert('You have visited this site ' + visitCount + ' times.');
// ----------------T3---------------

    var birthYear = 2000;
    document.write("My birth year is " + birthYear + "<br>" + "Data type of my declared variable is " + typeof(birthYear));
// -----------------T4---------------

    var visitorName = "Talha Aly";
    var productName = "Phones";
    var quantity = 7;

    document.write("<b>" + visitorName + "</b> ordered <b>" + quantity + " " + productName + "</b>(s) on XYZ Clothing Store");

*/



/*                             //  --------------- Assignment 4 --------------

// ------------------------T1------------------------

    var var1, var2, var3;
// ------------------------T2------------------------

    // ILLEGAL VARIABLE NAMES
  
    var 123, 1var, var@, alert, .var;

    // LEGAL VARIABLE NAMES
  
    var var1, var_1, _var1, VAR1, n$12;
// ------------------------T3------------------------

    document.write("<h2>Rules for naming JS variables</h2><br><br>");
    document.write("Variable names can only contain numbers, alphabets, $ and _ For example $my_1stVariable.<br>");
    document.write("Variables must begin with a letter, $ _. For example $name, _name or name <br>");
    document.write("Variable names are case sensitive <br>");
    document.write("Variable names should not be JS Keywords <br>")

*/


 /*                            //  --------------- Assignment 5 --------------

// ------------------- T1 ---------------------------

    var num1 = 10;
    var num2 = 6;
    var result = num1 + num2;

    document.write("Sum Of " + num1 + "  and " + num2 + " is " + result);
// ------------------- T2 ---------------------------

    var num1 = 10;
    var num2 = 6;
    var result;

    document.write("Subtracion Of " + num1 + "  and " + num2 + " is " + (num1-num2));
    document.write("<br>Multiplication Of " + num1 + "  and " + num2 + " is " + (num1*num2));
    document.write("<br>Division Of " + num1 + "  and " + num2 + " is " + (num1/num2));
    document.write("<br>Modulus Of " + num1 + "  and " + num2 + " is " + (num1%num2));

// ------------------- T3 ---------------------------
    var num;
    document.write("Value after variable declaration is: ", num);
    num = 5;
    document.write("<br>Initial value: ", num);
    num++
    document.write("<br>Value after increment is: ", num);
    num = num+7
    document.write("<br>Value after addition of 7 is: ", num);
    num--
    document.write("<br>Value after decrement is: ", num);
    num = num%3
    document.write("<br>The remainder is : ", num);
// ------------------- T4 ---------------------------

    var ticketPrice = 600;
    document.write('Total cost to buy 5 tickets is ', ticketPrice*5 ,"PKR");
// ------------------- T5 ---------------------------

    var tableNum = 3;
    document.write('Table of ', tableNum);
    for(let i = 1; i <=10; i++){
        document.write('<br>', tableNum , ' × ', i, ' = ', tableNum*i);
    }
// ------------------- T6 ---------------------------

    var celciusTemp = 25;
    document.write(celciusTemp, '°C is ', (celciusTemp*(9/5))+32, '°F <br>' );
    var fahrenheitTemp = 70;
    document.write(fahrenheitTemp, '°F is ', (fahrenheitTemp-32)*(5/9), '°C' );
// ------------------- T7 ---------------------------

    var priceItem1 = 499;
    var quantityItem1 = 3;
    var priceItem2 = 569;
    var quantityItem2 = 9;
    var shippingCharges = 99;

    document.write("<h1>Shopping Cart</h1>");
    document.write('<br>Price of item 1 is ', priceItem1);
    document.write('<br>Quantity of item 1 is ',quantityItem1);
    document.write('<br>Price of item 2 is ', priceItem2);
    document.write('<br>Quantity of item 2 is ',quantityItem2);
    document.write('<br><br>Total cost of your order is ', (priceItem1*quantityItem1)+(priceItem2*quantityItem2)+shippingCharges );

// ------------------- T8 ---------------------------

    var totalMarks = 520;
    var obtainedMarks = 498;

    document.write("<h1>Marks Sheet</h1>");
    document.write('<br>Total Marks: ', totalMarks);
    document.write('<br>Obtained Marks: ', obtainedMarks);
    document.write('<br>Percentage ', (obtainedMarks/totalMarks)*100, '%');

// ------------------- T9 ---------------------------

    document.write("<h1>Currency to PKR</h1>");
    document.write('Total Currency in PKR is ', (10*306.03)+(25*81.59));
// ------------------- T10 ---------------------------

    var num = 5;
    document.write(((num+5)*10)/2);
// ------------------- T11 ---------------------------

    var currYear = 2023;
    var birthYear = 2001;
    document.write("<h1>Age Calculator</h1>");
    document.write('<br>Curent Year: ', currYear);
    document.write('<br>Birth Year: ', birthYear);
    document.write('<br>Your Age is: ', currYear-birthYear);

// ------------------- T12 ---------------------------
    var radius = 20;

    document.write("<h1>The Geometrizer</h1>");
    document.write('<br>Radius of Circle: ', radius);
    document.write('<br>Circumference of Circle: ', 2*3.142*radius);
    document.write('<br>Area of Circle: ', 3.142*(radius*radius));

// ------------------- T13 ---------------------------
    var favSnack = 'Chocolate Chip'
    var currAge = 15
    var maxAge = 65
    var snackPerDay = 3

    document.write("<h1>The Lifetime Supply Calculator</h1>");
    document.write('<br>Favorite Snack: ', favSnack);
    document.write('<br>Current Age: ', currAge);
    document.write('<br>Estimated Maximun Age: ', maxAge);
    document.write('<br>Amount of snacks per day: ', snackPerDay);
    document.write("<br>You will need ", snackPerDay*((maxAge-currAge)*365) ," ", favSnack, " to last you until the ripe old age of ", maxAge);

  */  


/*                           //  --------------- Assignment 6 to 9 --------------

// ------------------- T1 ---------------------------

    var a = 10;

    document.write('Result:');
    document.write('<br>The Value of a is: ' ,a);

    document.write('<br>-----------------------------------------');

    document.write('<br><br>The value of ++a is: ', ++a);
    document.write('<br>Now the value of a is:', a)

    
    document.write('<br><br>The value of a++ is: ', a++);
    document.write('<br>Now the value of a is:', a)

    
    document.write('<br><br>The value of --a is: ', --a);
    document.write('<br>Now the value of a is:', a)

    
    document.write('<br><br>The value of a-- is: ', a--);
    document.write('<br>Now the value of a is:', a)

// ------------------- T2 ---------------------------

    var a = 2, b = 1;
    var result = --a - --b + ++b + b--;

    document.write('a is ', a);
    document.write('<br>b is ', b);
    document.write('<br>result is ', result);

// ------------------- T3 ---------------------------

    var userName = prompt('Enter Your Name');
    alert('Welcome '+ userName + ' to Our Website');
// ------------------- T4 --------------------------- 

    var tableNum = prompt('Enter Table number');
    if(tableNum == ''){
        tableNum = 5;
    }
    document.write('Table of ', tableNum);
    for(let i = 1; i <=10; i++){
        document.write('<br>', tableNum , ' × ', i, ' = ', tableNum*i);
    }

// ------------------- T5 ---------------------------

var subject1 = prompt("Enter the name of the first subject:");
var subject2 = prompt("Enter the name of the second subject:");
var subject3 = prompt("Enter the name of the third subject:");

var totalMarks = 100;

var obtainedMarks1 = prompt("Enter obtained marks for " + subject1 + ":");
var obtainedMarks2 = prompt("Enter obtained marks for " + subject2 + ":");
var obtainedMarks3 = prompt("Enter obtained marks for " + subject3 + ":");

document.write("<table border='1'>");
document.write("<tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th><th>Percentage</th></tr>");
document.write("<tr><td>" + subject1 + "</td><td>" + totalMarks + "</td><td>" + obtainedMarks1 + "</td><td>" + (obtainedMarks1/totalMarks)*100 + "%</td></tr>");
document.write("<tr><td>" + subject2 + "</td><td>" + totalMarks + "</td><td>" + obtainedMarks2 + "</td><td>" + (obtainedMarks2/totalMarks)*100 + "%</td></tr>");
document.write("<tr><td>" + subject3 + "</td><td>" + totalMarks + "</td><td>" + obtainedMarks3 + "</td><td>" + (obtainedMarks3/totalMarks)*100 + "%</td></tr>");
document.write("</table>");

*/


 /*                         //  --------------- Assignment 9 to 11 ------------

//---------------------- T1 ------------------- 

    // var cityName = prompt("Enter Your City Name");
    // if(cityName=="Karachi" || cityName=="karachi"){
    //     alert("Welcome to the City of lights");
    // }
//---------------------- T2 -------------------

    // var gender = prompt("Enter Your Genter");
    // if(gender=="male" || gender=="Male"){
    //     alert("Good Morning Sir");
    // }
    // else if(gender=="female" || gender=="Female"){
    //     alert("Good Morning Mam");
    // }
//---------------------- T3 ------------------- 

    // var trafficLightColor= prompt("Enter Traffic Light Color (e.g. Red, Green, Yellow))");
    // if(trafficLightColor=="red" || trafficLightColor=="Red"){
    //     alert("Must Stop");
    // }
    // else if(trafficLightColor=="yellow" || trafficLightColor=="Yellow"){
    //     alert("Ready to Move");
    // }
    // else if(trafficLightColor=="green" || trafficLightColor=="Green"){
    //     alert("Move Now");
    // }
//---------------------- T4 ------------------- 

    // var fuel = +prompt("Enter Remaining Fuel in your Car in liters");
    // if(fuel < 0.25){
    //     alert("Please refill the fuel in your car");
    // }
//---------------------- T5 ------------------- 
    
//     var a = 4;
//     if (++a === 5){
//     alert("given condition for variable a is true");
//     }

//     var b = 82;
//     if (b++ === 83){
//     alert("given condition for variable b is true");
//     }

//     var c = 12;
//     if (c++ === 13){
//     alert("condition 1 is true");
//     }
//     if (c === 13){
//     alert("condition 2 is true");
//     }
//     if (++c < 14){
//     alert("condition 3 is true");
//     }
//     if(c === 14){
//     alert("condition 4 is true");
//     }
    
//     var materialCost = 20000;
//     var laborCost = 2000;
//     var totalCost = materialCost + laborCost;
//     if (totalCost === laborCost + materialCost){
//     alert("The cost equals");
//     }

//     if (true){
//     alert("True");
//     }
//     if (false){
//     alert("False");
//     }

//    if("car" < "cat"){
//     alert("car is smaller than cat");
//     }
            
//---------------------- T6 ------------------- 

    // var totalMarks  = +prompt("Enter Total Marks Of 3 subjects");;
    // var sub1 = +prompt("Enter obtained marks of 1st subject");
    // var sub2 = +prompt("Enter obtained marks of 2nd subject");
    // var sub3 = +prompt("Enter obtained marks of 3rd subject");
    // var percentage = ((sub1+sub2+sub3)/totalMarks)*100;
    // var grade, remarks;

    // if(percentage>=80){
    //     grade = "A-one";
    //     remarks = "Excellent";
    // }
    // else if(percentage>=70 && percentage<80){
    //     grade = "A";
    //     remarks = "Good";
    // }
    // else if(percentage>=60 && percentage<70){
    //     grade = "B";
    //     remarks = "You need to improve";
    // }
    // else if(percentage<60){
    //     grade = "Fail";
    //     remarks = "Sorry";
    // }

    // document.write("<h1>Marks Sheet</h1><br><br>");
    // document.write("Total Marks: " + totalMarks);
    // document.write("<br><br>Obtained Marks: " + (sub1+sub2+sub3));
    // document.write("<br><br>Percentage: " + percentage);
    // document.write("<br><br>Grade: " + grade);
    // document.write("<br><br>Remarks: " + remarks);

//---------------------- T7 ------------------- 

    // var seceretNumber = 8;
    // var userInput = +prompt("Guess the number between 1-10");
    // if(userInput==seceretNumber){
    //     alert("Bingo! Correct answer");
    // }
    // else if((userInput+1)==seceretNumber){
    //     alert("Close enough to the correct answer");
    // }
    // else{
    //     alert("Alas! Wrong guess");
    // }
//---------------------- T8 ------------------- 

    // var number = +prompt("Enter a number");
    // if(number%3==0){
    //     alert("The given number is divisible by 3");
    // }
//---------------------- T9 ------------------- 

    // var inputNumber = +prompt("Enter a number");
    // if(inputNumber%2==0){
    //     alert("The givn number is even");
    // }
    // else {
    //     alert("The givn number is odd");
    // }
//---------------------- T10 -------------------

    // var temperature = +prompt("Enter today's temperature");
    // if(temperature>40){
    //     alert("It is too hot outside");
    // }
    // else if(temperature>30){
    //     alert("The Weather today is Normal");
    // }
    // else if(temperature>20){
    //     alert("Today's Weather is cool");
    // }
    // else if(temperature>10){
    //     alert("OMG! Today’s weather is so Cool");
    // }
//---------------------- T11 ------------------- 

    // var num1 = +prompt("Enter first number");
    // var num2 = +prompt("Enter second number");
    // var operator = prompt("Choose Operator i.e. +,-,*,/,%");

    // if(operator=="+"){
    //     alert("Addition: " + (num1+num2));
    // }
    // else if(operator=="-"){
    //     alert("Subtraction: " + (num1-num2));
    // }
    // else if(operator=="*"){
    //     alert("Multiplication: " + (num1*num2));
    // }
    // else if(operator=="/"){
    //     alert("Division: " + (num1/num2));
    // }
    // else if(operator=="%"){
    //     alert("Modulus: " + (num1%num2));
    // }
    // else{
    //     alert("Error: Invalid Operator!");
    // }                        

    */



 /*                           //  --------------- Assignment 12 to 16 ----------

// ----------------------- T1 -----------------

    const char = prompt("Enter any letter");
    const asciiCode = char.charCodeAt(0);

    if(asciiCode>=65 && asciiCode<=90){
        alert("You entered an uppercase letter");
    }
    else if(asciiCode>=97 && asciiCode<=122){
        alert("You entered a lowercase letter");
    }
// ----------------------- T2 -----------------

    var int1 = +prompt("Enter a number");
    var int2 = +prompt("Enter second number");

    if(int1>int2){
        alert("The larger number is: " + int1);
    }
    else if(int1<int2){
        alert("The larger number is: " + int2);
    }
    else if(int1==int2){
        alert("The two integers are equal");
    }
// ----------------------- T3 -----------------

    var number = +prompt("Enter an integer");

    if(number<0){
        alert("Number is negative");
    }
    else if(number>0){
        alert("Number is positive");
    }
    else if(number==0){
        alert("Number is zero");
    }
// ----------------------- T4 -----------------

    var vowel = prompt("Enter a single letter");
    if(vowel=="a" || vowel=="e" || vowel=="i" || vowel=="o" || vowel=="u"){
        alert("true");
    }
    else{
        alert("false");
    }
// ----------------------- T5 -----------------

    var password = "mypassword";
    var userPassword = prompt("Enter Password");
    if(userPassword==""){
        alert(" Please enter your password");
    }
    else if(userPassword==password){
        alert("Correct!");
    }
    else{
        alert("Incorrect password");
    }
// ----------------------- T6 -----------------

    var greeting;
    var hour = 13;
    if (hour < 18) {
    greeting = "Good day";
    }
    else{
    greeting = "Good evening";
    }
// ----------------------- T7 -----------------

    var time = +prompt("Enter time in 24 hour format i.e. 1900");

    if(time>=0000 && time<1200){
        alert("Good Morning!");
    }
    else if(time>=1200 && time<1700){
        alert("Good Afternoon!");
    }
    else if(time>=1700 && time<2100){
        alert("Good Evening!");
    }
    else if(time>=2100 && time<2349){
        alert("Good Night!");
    }

    // --------------------T_8-----------------------

    var studentNames = [];
// --------------------T9-----------------------

    var studentNames = [];
// --------------------T10-----------------------

    var fruits = ["apple", "banana", "orange"];
// --------------------T11-----------------------

    var numbers = [1, 2, 3, 4, 5];
// --------------------T12-----------------------

    var booleanArray = [true, false, true];
// --------------------T13-----------------------

    var mixedArray = [1, "apple", true];
// --------------------T14-----------------------

    var qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];
    
    document.write("Qualifications:<br>");
    document.write('1)' + qualifications[0] + "<br>");
    document.write('2)' + qualifications[1] + "<br>");
    document.write('3)' + qualifications[2] + "<br>");
    document.write('4)' + qualifications[3] + "<br>");
    document.write('5)' + qualifications[4] + "<br>");
    document.write('6)' + qualifications[5] + "<br>");
    document.write('7)' + qualifications[6] + "<br>");
    document.write('8)' + qualifications[7] + "<br>");
// --------------------T15-----------------------

    const studentNames = ['Michael', 'John', 'Tony'];
    const scores = [320, 450, 390];
    const totalMarks = 500;

    document.write('Score of ' + studentNames[0] + ' is ' + scores[0] + '. Percentage: ' + (scores[0] / totalMarks * 100) + '%<br>');
    document.write('Score of ' + studentNames[1] + ' is ' + scores[1] + '. Percentage: ' + (scores[1] / totalMarks * 100) + '%<br>');
    document.write('Score of ' + studentNames[2] + ' is ' + scores[2] + '. Percentage: ' + (scores[2] / totalMarks * 100) + '%<br>');
// --------------------T16-----------------------

const colors = ['Red', 'Green', 'Blue'];

document.write('<b>Original Array:</b><br>');
document.write(colors[0] + '<br>');
document.write(colors[1] + '<br>');
document.write(colors[2] + '<br>');

const colorToAddBeginning = prompt('Enter a color to add to the beginning:');
colors.unshift(colorToAddBeginning);
document.write('<br><b>Updated Array (Added to the beginning):</b><br>');
document.write(colors[0] + '<br>');
document.write(colors[1] + '<br>');
document.write(colors[2] + '<br>');
document.write(colors[3] + '<br>');

const colorToAddEnd = prompt('Enter a color to add to the end:');
colors.push(colorToAddEnd);
document.write('<br><b>Updated Array (Added to the end):</b><br>');
document.write(colors[0] + '<br>');
document.write(colors[1] + '<br>');
document.write(colors[2] + '<br>');
document.write(colors[3] + '<br>');

colors.unshift('Yellow', 'Purple');
document.write('<br><b>Updated Array (Added two colors to the beginning):</b><br>');
document.write(colors[0] + '<br>');
document.write(colors[1] + '<br>');
document.write(colors[2] + '<br>');
document.write(colors[3] + '<br>');
document.write(colors[4] + '<br>');
document.write(colors[5] + '<br>');

colors.shift();
document.write('<br><b>Updated Array (Deleted the first color):</b><br>');
document.write(colors[0] + '<br>');
document.write(colors[1] + '<br>');

colors.pop();
document.write('<br><b>Updated Array (Deleted the last color):</b><br>');
document.write(colors[0] + '<br>');
document.write(colors[1] + '<br>');

const indexToAdd = parseInt(prompt('Enter the index to add a color:'));
const colorToAdd = prompt('Enter the color to add:');
colors.splice(indexToAdd, 0, colorToAdd);
document.write('<br><b>Updated Array (Added at a specific index):</b><br>');
document.write(colors[0] + '<br>');
document.write(colors[1] + '<br>');
document.write(colors[2] + '<br>');
document.write(colors[3] + '<br>');

// --------------------T17-----------------------

    var scores = [320, 230, 480, 120];
    scores.sort();
    console.log("Ordered score of students: " + scores);
// --------------------T18-----------------------

    var cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"]
    var selectedCities =  cities.slice(0, 3);
    console.log(selectedCities);
// --------------------T19-----------------------

    var arr = ["This", "is", "my", "car"];
    console.log("Array: " + arr);
    console.log("String: " + arr.join(" "));
// --------------------T20-----------------------

    var fifoArray = [];

    fifoArray.push("Value 1");
    fifoArray.push("Value 2");
    fifoArray.push("Value 3");

    document.write('Array: ', fifoArray);

    var firstValue = fifoArray.shift();
    var secondValue = fifoArray.shift();
    var thirdValue = fifoArray.shift();

    document.write("<br><br>First value:", firstValue);
    document.write("<br>Second value:", secondValue);
    document.write("<br>Third value:", thirdValue);

// --------------------T21-----------------------

    var lifoArray = [];

    lifoArray.push("Value 1");
    lifoArray.push("Value 2");
    lifoArray.push("Value 3");

    var lastValue = lifoArray.pop();
    var secondLastValue = lifoArray.pop();
    var thirdLastValue = lifoArray.pop();

    console.log("Last value:", lastValue);
    console.log("Second last value:", secondLastValue);
    console.log("Third last value:", thirdLastValue);

// --------------------T22-----------------------

var phoneManufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];

var dropdownMenu = "<select>" + "<option>" + phoneManufacturers.join("</option><option>") + "</option>" + "</select>";

document.write(dropdownMenu);

*/




/*                          //  --------------- Assignment 17 to 20 ----------


// ---------------------T1------------------

    var array = [[],[]];

// ---------------------T2------------------

    var matrixArray = [[0, 1, 2, 3], [1, 0 ,1, 2], [2, 1, 0, 1]];

    var matrix = matrixArray.map(function(row) {
    return row.join(' ');
    }).join('\n');
    console.log(matrix);

// ---------------------T3------------------

    for(var i=0; i<=10; i++){
        console.log(i + "\n");
    }
// ---------------------T4------------------

    var tableNum = +prompt("Enter a number to show its multiplication");
    var tableLength = +prompt("Enter length of multiplication");
    for(var i = 1; i<=tableLength; i++){
        console.log(tableNum + "×" + i + " = " + (tableNum*i));
    }
// ---------------------T5------------------

    var fruits = ["apple", "banana", "mango", "orange","strawberry"];

    for(var i=0; i<fruits.length; i++){
        console.log('Element at index ', i ,' is ', fruits[i])
    }
// ---------------------T6------------------

    var counting = ""
    var reverseCounting = "";
    var even = "";
    var odd = "";
    var series = "";
    for(var i=1; i<=15; i++){
        counting += i + ", ";
    }
    for(var i=10; i>0; i--){
        reverseCounting += i + ", ";
    }
    for(var i=0; i<=20; i+=2){
        even += i + ", "
    }
    for(var i=1; i<=20; i+=2){
        odd += i + ", "
    }
    for(var i=2; i<=20; i+=2){
        series += i + "k, "
    }
    console.log("Counting:\n" + counting);
    console.log("Reverse Counting:\n" + reverseCounting);
    console.log("Even:\n" + even);
    console.log("Odd:\n" + odd);
    console.log("Series:\n" + series);

// ---------------------T7------------------

    var bakeryItems  = ["cake", "apple pie", "cookie", "chips", "patties"]
    var userSearch = prompt("Welcome to my Bakery, What do you want to order?");
    var searchCheck = false;
    var itemIndex;
    for(var i=0; i<=(bakeryItems.length-1); i++){
        if(userSearch==bakeryItems[i]){
            searchCheck = true;
            itemIndex = i;
        }
    }
    if(searchCheck){
        alert(userSearch + " is available at index " + itemIndex + " in our bakery");
    }
    else{
        alert("We are sorry. " + userSearch + " is not available in our bakery");
    }

// ---------------------T8------------------

    var array = [24, 53, 78, 91, 12];
    var largestNum=array[0];   
    for(var i=0; i<array.length; i++){
        if(array[i]>largestNum){
            largestNum=array[i];
        }
    }
    console.log("Array Item: " + array + "\nThe largest number is " + largestNum);

// ---------------------T9------------------

    var array = [24, 53, 78, 91, 12];
    var largestNum=array[0];   
    for(var i=0; i<array.length; i++){
        if(array[i]<largestNum){
            largestNum=array[i];
        }
    }
    console.log("Array Item: " + array + "\nThe smallest number is " + largestNum);

// ---------------------T10------------------

    var mulOfFive = "";
    for (var i=0; i<=100; i+=5){
        mulOfFive += i + ", ";
    }
    console.log(mulOfFive);

*/
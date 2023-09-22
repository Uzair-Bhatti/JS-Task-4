// chapter 17 to 20 //

// Q1
// var arr = [
//       [],
//       [],
//       [],
// ];

// Q2
// var arr = [
// [0,1,2,3],
// [1,0,1,2],
// [2,1,0,1],
// ];

// Q3
// for(var i=1; i<=10 ; i++){
//     console.log(i)
// }

// Q4
// var tablenumber = prompt("Enter number")
// var tablelength = prompt("Enter table length")

// for(var i=1; i<=tablelength; i++){
//     console.log(`${tablenumber} * ${i} = ${tablenumber * i}`);
// }

// Q5
// var fruits = ["apple", "banana", "mango", "orange", "strawberry"];

// for(var i=0; i < fruits.length; i++){
//     console.log(fruits[i])
// }

// Q6
// a
// console.log("counting: " + <br> + Array.from({ length: 10 }, (_, i) => i+1).join(', '));

// // b
// console.log("Reverse counting: " + <br> + Array.from({ length: 10 }, (_, i) => 10 - i).join(', '));

// // c
// console.log("Even: " + <br> + Array.from({ length: 10 }, (_, i) => i*2).join(', '));

// // d
// console.log("Odd: " + <br> + Array.from({ length: 10 }, (_, i) => i*2+1).join(', '));

// // e
// console.log("Series: " + <br> + Array.from({ length: 10 }, (_, i) => (i + 1) * 2 + "k").join(', '));

// Q7
// var A = ["cake", "apple pie", "cookie", "chips", "patties"];
// var Input = prompt("Enter your item")

// var userInputLower = Input.toLowerCase();
// var found = A.userInputlower
// if (found) {
//     console.log(`"${Input}" is available at index in our bakery`);
//   } else {
//     console.log(`We are sorry "${Input}"is not availabe in our bakery`);
//   }

// Q8
// var A = [24, 53, 78, 91, 12];
// var largest= A[0]

// for (var i = 1; i < A.length; i++) {
//     if (A[i] > largest) {
//       largest = A[i]; 
//     }
//   }

// console.log("The largest number is: "+ largest)  

// Q9
// var A = [24, 53, 78, 91, 12]
// var smallest = A[0]

// for(var i = 1; i < A.length; i++){
//     if(A[i]<smallest){
//         smallest = A[i]
//     }
// }
// console.log("The smallest number is: " + smallest)

// Q10
// for (var i = 1; i <= 100; i++){
//     if (i % 5 === 0) {
//       console.log(i);
//     }
//   }

// chapter 21 - 25

// Q1
// var firstName = prompt("Enter your first name:");
// var lastName = prompt("Enter your last name:");
// var fullname = firstName + lastName

// alert ("Hello, " + fullname + "! Welcome.");

// Q2
// var userInput = prompt("What is your favorite mobile phone model?");
// var inputlength = userInput.length

// console.log("My favourite phone is: " + userInput +"<br>" + "Length of string is " + inputlength)

// Q3
// var word = "Pakistani";
// var index = word.indexOf("n");

// document.write("The index of 'n' in the word 'Pakistani' is: " + index);

// Q4
// var word = "Hello World"
// var index = word.indexOf("l")

// document.write("The index of 'l' in the word 'Hello World' is: " + index);

// Q5
// var word = "Pakistani";
// var index = word.charAt(2);
// document.write("The character at the 3rd index in the word 'Pakistani' is: " + index);

// Q6
// var firstName = prompt("Enter your first name:");
// var lastName = prompt("Enter your last name:");
// var fullName = firstName.concat(" ", lastName);

// alert("Hello, " + fullName + "! Welcome.");

// Q7
// var city = "Hyderabad"
// var replace = city.replace("Hyder", "Islam");

// document.write("City:" + city + "<br>")
// document.write("Replacement:" + replace)

// Q8
// var message = "Ali and Sami are best friends. They play cricket and football together.";
// var replace = message.replace(/and/g, "&")

// document.write("Original message: " + message + "<br>");
// document.write("Modified message: " + replace);




// Q10
// var input = prompt("Enter input")
// var userInputupper = input.toUpperCase();

// document.write("input: " + input + "<br>")
// document.write("Upper case: "+ userInputupper)

// Q11
// var input = "javascript";
// var userInputupper = input.charAt();

// document.write("input: " + input + "<br>")
// document.write("Upper case: "+ userInputupper) 

// Q16 
// var university = "University of Karachi";
// var universityArray = university.split(" ");

// document.write("Original String: " + university + "<br>");
// document.write("Array Elements: " + universityArray.join(", ") + "<br>"); not work

// Q17
// var country = "Pakistan"
// var last = country.slice(7,8);

// document.write("User input : " + country + "<br>")
// document.write("Last character of input: " + last)

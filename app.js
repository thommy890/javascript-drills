var fullName = "Thomson Knoles";

console.log(fullName);

const numberOfStates = 50;

// Declare two constant variables to hold the numbers to be added.
const num1 = 5; // The first number to be added, in this case, it's 5.
const num2 = 4; // The second number to be added, in this case, it's 4.

// Perform the addition operation and store the result in a variable.
const sum = num1 + num2; // The sum variable will hold the result of adding num1 and num2.

// Now, the variable 'sum' contains the result of adding 5 and 4, which is 9.

// Function that displays an alert saying "Hello World!"
function sayHello() {
    alert("Hello World!");
}

// Call the sayHello function
sayHello();

function checkAge(name, age) {
    if (age < 21) {
        alert("Sorry " + name + ", you aren't old enough to view this page!");
    }
}

checkAge("Charles", 21); // This will not display any alert since 21 is 21 or older.
checkAge("Abby", 27);    // This will not display any alert since 27 is 21 or older.
checkAge("James", 18);   // This will display the alert since 18 is less than 21.
checkAge("John", 17);    // This will display the alert since 17 is less than 21.

const vegetables = ["carrot", "broccoli", "tomato", "cabbage", "spinach"];

// Using a for loop to display each vegetable
for (let i = 0; i < vegetables.length; i++) {
    console.log(vegetables[i]);
}

const pet = {
    name: "Chaga",
    breed: "Python"
};

console.log("Pet's name:", pet.name);
console.log("Pet's breed:", pet.breed);

const people = [
    { name: "John", age: 25 },
    { name: "Emily", age: 18 },
    { name: "Michael", age: 30 },
    { name: "Sophia", age: 20 },
    { name: "Daniel", age: 16 }
];

// Loop through each person in the array and call the checkAge function
for (let i = 0; i < people.length; i++) {
    checkAge(people[i].name, people[i].age);
}

// Function to get the length of a word
function getLength(word) {
    return word.length;
}

// Call the getLength function with 'Hello World' as the argument and store the result
const word = 'Hello World';
const wordLength = getLength(word);

// Check if the word length is even or odd and display the appropriate message
if (wordLength % 2 === 0) {
    console.log('The world is nice and even!');
} else {
    console.log('The world is an odd place!');
}

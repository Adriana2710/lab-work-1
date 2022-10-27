//Activity 1: - NodeJS - Slide 116

const animals = ["dog", "cat", "elephant", "lion", "donkey"];

animals[1] = "turtle";
animals[4] = "zebra";

console.log(animals);


//Activity 2: - NodeJS and JSON - Slide121

const book = {
    "title" : "First JSON Exercise",
    "description" : "This is my first JSON exercise during my Software Engineering Course at IOD",
    "author" : "Adriana Silva Almeida",
    "number_of_pages" : "12"
}

console.log(book)

//Activity 3: - NodeJS - Slide 143

//function
function sum(a,b){
    return a+b;
}

//testing
if(sum(2,4)!=6){
    console.log("sum -> Test 1: Failed");
} else {
    console.log("sum -> Test 1: Passed")
}

if (sum(10,20) == 30){
    console.log('sum -> Test 2 : Passed');
}else {
    console.log('sum -> Test 2 : Failed')
}

if (sum(20) == 20){
    console.log('sum -> Test 3 : Passed');
}else{
    console.log('sum -> Test 3 : Failed')
}

if (sum(20, 0) == 20){
    console.log('sum -> Test 4 : Passed');
}else{
    console.log('sum -> Test 4 : Failed')
}

if (sum(20, 'ABC') == 20){
    console.log('sum -> Test 5 : Passed');
}else{
    console.log('sum -> Test 5 : Failed')
}

if (sum(20, 0/10) == 20){
    console.log('sum -> Test 6 : Passed');
}else{
    console.log('sum -> Test 6 : Failed')
}

if (sum(20, 1/0) == 20){
    console.log('sum -> Test 7 : Passed');
}else{
    console.log('sum -> Test 7 : Failed')
}


//Activity 7 Part 1: - NodeJS

function greet(fName) {
    console.log("Hello " + fName + " :)");
}

const fName = "Adriana";
greet(fName);

//Activity 7 Part 2: - NodeJS - Slide 84

var prompt = require('prompt-sync')()
var name = prompt('Enter your name: ')
console.log("Hello " + name + " :)");

//Activity 8: - NodeJS and JSON

//Super Cars Dealerships
// {objects} [arrays]
const SuperCars = {
    "dealerships" : [
        {
            "name": "GoCar",
            "employees" : [
                {"name" : "Gerald", "job_title" : "Manager", "salary" : 2000},
                {"name" : "Larissa", "job_title" : "Retail Assistant", "salary" : 800}
            ],
            "cars" : [
                {"model" : "Taurus", "manufacture": "Ford", "year": 2020, "price":10000},
                {"model" : "Fit", "manufacture": "Honda", "year": 2022, "price":30000}
            ]
        },

        {
            "name": "WowCar",
            "employees" : [
                {"name" : "Cris", "job_title" : "Manager", "salary" : 2100},
                {"name" : "Leo", "job_title" : "Retail Assistant", "salary" : 1000}
            ],
            "cars" : [
                {"model" : "Taurus", "manufacture": "Ford", "year": 2020, "price": 10000},
                {"model" : "Fit", "manufacture": "Honda", "year": 2022, "price":30000}
            ]
        }
    ]

}
console.log(SuperCars.dealerships[0].employees[1])
console.log(SuperCars.dealerships[1].cars[1])
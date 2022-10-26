//Nodejs Exercise
const animals = ["dog", "cat", "elephant", "lion", "donkey"];

animals[1] = "turtle";
animals[4] = "zebra";

console.log(animals);


//NodeJS and JSON Exercise

const book = {
    "title" : "First JSON Exercise",
    "description" : "This is my first JSON exercise during my Software Engineering Course at IOD",
    "author" : "Adriana Silva Almeida",
    "number_of_pages" : "12"
}

console.log(book)

//NodeJS Testing Exercise

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
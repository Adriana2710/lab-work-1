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

//Testing
if(sum(2,4)!=6){
    console.log("The test failed");
} else {
    console.log("The test passed");
}

//function
function sum(a,b){
    return a+b
    }

console.log(sum(2,2))

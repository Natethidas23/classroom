// function decloration 
function message(firstName){
    console.log("hello " + firstName);
}

function getMeow() {
console.log("meow");
}

function getSumTotal(firstNumber, secondNumber){
    const result = firstNumber + secondNumber;
    console.log(result);
}

function makePie(quantity){
    const pie = "PIE".repeat(quantity);
    console.log(pie);
}
//function to say hi
function hi(firstName){
    console.log("hi veronie")
}
 

function LoudSpeaker(message){
    const newText ='Speaker'+ message.toUpperCase();
    return newText;
}

//invoke a function 
const computer= LoudSpeaker("sad")
//invoke a function 
message("carl");
message("cat who are you");
getMeow();
getSumTotal(5,9)
makePie(100)
console.log(computer);
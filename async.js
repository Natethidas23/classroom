//the keyword "async" can be added to any function. This function will now 
//automatically return a Promise.

async function multiplyTwoNumbers(a, b){
    return a * b;
}
//In other words, async turns a regular (synchronous) function into an 
// asynchronous one. 


//const answer= multiplyTwoNumbers(10,30)//300
//consol.log(answer)

//multiplyTwoNumbers(10,30)
// .then(answer => console.log(answer))
//.catch()
//.finally();

// IN A Function... We HAVE to be in an async function in order to use 
// await. 


const answer = await multiplyTwoNumbers(10, 30)
console.log(answer)

db.collection('products').get()
.then(collection =>

function testStuffOut(){
    const answer = 
}
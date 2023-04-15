//Create a function that can converts fahrenheit to celcius.
//"Today is 80F (26.7C)." 

function changeTemp(fahrenheit){
    let celcius = (fahrenheit - 32) * (5/9)
return celcius.toFixed(2)
}

fahrenheit = 80 

//invoke the function (conlsole.log)

console.log(`Today is ${}ºF (${})ºC`)
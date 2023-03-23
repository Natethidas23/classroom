// Write a function that takes a number of adults, a number odf children,
// the number of beds in a vaction home and returns true if there are enough 
// beds for everyone and false if not. Assume that adults will sleep @ to a bed. 


function enoughBeds(numAdults, numKids, numBeds){
    //divide number of adults by 2
    const adultBeds = numAdults / 2
    //add that to the number of kiddos 
    const totalBedsNeeded= adultBeds+ numKids
    // Is that result <= number of beds
    if(totalBedsNeeded <= numBeds){
        return true 
    } else {
    return false
} 
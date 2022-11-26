
function carSpeed(speed){
    

    if (speed<70) {
        return `Ok`
        
    } else {
        //for speed above 70 return one demerit point in every 5kms exceeded 
        if( ((speed-70)/5)<12 ){
            return `Points:` + ((speed-70)/5 )
        } else{
        // for speed above 70 and more than 12 demerit points 
            return `License suspended`
        }
        
      } 
}
console.log(carSpeed(60))
console.log(carSpeed(80))
console.log(carSpeed(129))
console.log(carSpeed(130))


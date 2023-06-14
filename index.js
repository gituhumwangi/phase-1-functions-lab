// Code your solution in this file!
let distanceFromHqInBlocks = function(destinationBlock) {
    const hqBlock = 42 ;
    return Math.abs(hqBlock-destinationBlock)
}

function distanceFromHqInFeet (Home) {
    //Distance converted from Blocks to feet
    const feet = 264 ;
    let contain = distanceFromHqInBlocks(Home)
    return   contain * feet


}
// Calculates the number of feet travelled trom the start point to the end point
function distanceTravelledInFeet (startpoint, endpoint){
    const feet = 264;
    return  Math.abs(endpoint-startpoint) * feet
}
// Calculates the fare travelled by the Scuber
function calculatesFarePrice (start, end){
    const freeTrips = 400 
    let Fare = distanceTravelledInFeet (start, end)
    if (Fare <= freeTrips){
         return 0
    }

    const cannotGoThatFar = 2500;
    if ( Fare > cannotGoThatFar){
        return "cannot travel that far"
    }
//Calculate the fare for the distance travelled for 2000 feet
    const point = 2000;
    if (Fare >= point) {
        return 25
    }
    const charge = 0.02;
    return (Fare - freeTrips) * charge

    
}


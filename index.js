function distanceFromHqInBlocks(distance) {    
        return Math.abs(distance - 42)
    }


  function distanceFromHqInFeet(someValue) {
    return distanceFromHqInBlocks(someValue)*264;
     // call the distanceFromHqInBlocks function from inside the distanceFromHqInFeet function,
    // passing the argument from distanceFromHqInFeet into distanceFromHqInBlocks
  
    // the return value of distanceFromHqInBlocks can then be used to calculate feet
  }

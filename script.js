let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

const generateTarget = () =>{
    let random = Math.floor(Math.random() * 10);
    return random;
}
const compareGuesses = (humanNum, machinNum, secretNum) => {
    //secretNum = generateTarget();
    //machinNum = Math.floor(Math.random() * 10);
    console.log(secretNum);

    distanceComputer = Math.abs(machinNum - secretNum);
    console.log("machin num " + machinNum)
    
    distanceHuman = Math.abs(secretNum - humanNum);
    console.log("human num " + humanNum)
    
    if(distanceHuman <= distanceComputer){
        return true;
    }
    else {
        return false;
    }
};
const updateScore = winner => {
    if(winner === 'human'){
        humanScore ++;
    }
    else if(winner === 'computer'){
        computerScore ++;
    }
}

const advanceRound = () =>{
    currentRoundNumber ++;
}


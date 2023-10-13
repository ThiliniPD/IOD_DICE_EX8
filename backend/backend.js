function rollTheDice() {
    let faceNum = document.getElementById("NumberOfFaces");
    let numberDisplay = randomDiceNum(faceNum.value);

    let display = document.getElementById("outputDisplay");
    display.innerHTML = ("" + numberDisplay);
    // NumberOfFaces: a dropbox giving output of D6/D8/D10
    // outputDisplay: a label that shows the random number
    // This function output: display the random number
}


function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
    // The maximum is inclusive and the minimum is inclusive
  }


function randomDiceNum(faces) {
    if (faces == "D6") {
        console.log("D6");
        return (getRandomIntInclusive(1, 6));
    }
    else if (faces == "D8") {
        console.log("D8");
        return (getRandomIntInclusive(1, 8));
    }  
    else if (faces == "D10") {
        console.log("D10");
        return (getRandomIntInclusive(1, 10));
    }

    return 0;
    //Input: number of faces(D6/ D8/ D9)
    // Output: random number for the particular dice.
}

if (randomDiceNum("D6") >= 7) throw Error("randomDiceNum test failed")
if (randomDiceNum("D8") >= 9) throw Error("randomDiceNum test failed")
if (randomDiceNum("D10") >= 11) throw Error("randomDiceNum test failed")
if (randomDiceNum("D6") == 0) throw Error("randomDiceNum test failed")

console.log("randomDiceNum: All tests passed")



//declaramos e inicializamos las constantes que usaremos

const lettersArray = ['S O L',
'U N O',
'N U T'];

const words = ["SOL", "SUN", "ONU", "LOT", "RAY"];


//Separa el array en subarrays de strings con cada iteración
function makeBoard(lettersArray){
    let board = []
    for (let index = 0; index < lettersArray.length; index++) {
        board.push(lettersArray[index].split(" "));
    }
    return board;
}

function check(word, subarray, direction = "horizontal", lettersArray = lettersArray, subindex = 0){
    switch (direction) {
        case "horizontal":
            return subarray.join("").includes(word);
        case "vertical":
            return ((lettersArray.map(row => row[subindex])).join("")).includes(word)
        default:
            return false;
    }
}

function getPositions(word, index, type){
    let answer = [];
    [...word].forEach((char, subindex) => {
        answer.push(`${type} / ${char} - [${index}, ${subindex}]`)
    });
    return answer;
}

function wordFind(lettersArray, word){
    const arrayBoard = makeBoard(lettersArray);
    let results = [];
    for (let index = 0; index < arrayBoard.length; index++) {
      if(check(word, arrayBoard[index], "horizontal", lettersArray, 0)){
        results.push(getPositions(word, index, "horizontal"));
      }
      for (let subindex = 0; subindex < arrayBoard[index].length; subindex++) {
        if(word.startsWith(arrayBoard[index][subindex])){
            if(check(word, arrayBoard[index][subindex], "vertical", lettersArray, subindex)){
                console.log("compute")
                results.push(getPositions(word, subindex, "vertical"));
            }
        }
        
      }
    }
    return results;
}

words.forEach(word => {
    console.log(wordFind(lettersArray, word));
});

console.log(wordFind(lettersArray, words[0]));
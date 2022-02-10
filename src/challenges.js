// Desafio 1
function compareTrue(val1, val2) {
  return val1 && val2;
}

// Desafio 2
function calcArea(base, height) {
  return ((base * height) / 2);
}

// Desafio 3
function splitSentence(text) {
  let splitText = text.split(' ');
  return splitText;
}

// Desafio 4
function concatName(NamesArray) {
  let final = NamesArray.length - 1;
  return `${NamesArray[final]}, ${NamesArray[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  let resultWins = wins * 3;
  return resultWins + ties;
}

// Desafio 6
function highestCount(highNum) {
  let resultHigh = 0;
  let countHigh = 0;
  for (let i in highNum) {
    if (i > resultHigh) {
      resultHigh = highNum[i];
    }
  }
  for (let i in highNum) {
    if (highNum[i] === resultHigh) {
      countHigh += 1;
    }
  }
  return countHigh;
}

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

// Desafio 10
function techList() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};

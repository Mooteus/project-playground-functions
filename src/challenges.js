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
function countHigh(highNum, resultHigh) {
  let count = 0;

  for (let i in highNum) {
    if (highNum[i] === resultHigh) {
      count += 1;
    }
  }

  return count;
}

function highestCount(highNum) {
  let resultHigh = 0;

  for (let i in highNum) {
    if (i > resultHigh) {
      resultHigh = highNum[i];
    }
  }

  return countHigh(highNum, resultHigh);
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let resultMouse = '';

  if (Math.abs(cat1 - mouse) < Math.abs(cat2 - mouse)) {
    resultMouse = 'cat1';
  } else if (Math.abs(cat2 - mouse) < Math.abs(cat1 - mouse)) {
    resultMouse = 'cat2';
  } else if (Math.abs(cat2 - mouse) === Math.abs(cat1 - mouse)) {
    resultMouse = 'os gatos trombam e o rato foge';
  } else {
    resultMouse = null;
  }

  return resultMouse;
}

// Desafio 8
function fizzBuzzverify(num) {
  let result = '';

  if (num % 3 === 0 && num % 5 === 0) {
    result = 'fizzBuzz';
  } else if (num % 3 === 0) {
    result = 'fizz';
  } else if (num % 5 === 0) {
    result = 'buzz';
  } else {
    result = 'bug!';
  }

  return result;
}

function fizzBuzz(arrayNum) {
  let arrayResult = [];

  for (let num of arrayNum) {
    arrayResult.push(fizzBuzzverify(num));
  }

  return arrayResult;
}

// Desafio 9
function encode(text) {
  text = text.replace(/a/g, '1');
  text = text.replace(/e/g, '2');
  text = text.replace(/i/g, '3');
  text = text.replace(/o/g, '4');
  text = text.replace(/u/g, '5');
  return text;
}

function decode(text) {
  text = text.replace(/1/g, 'a');
  text = text.replace(/2/g, 'e');
  text = text.replace(/3/g, 'i');
  text = text.replace(/4/g, 'o');
  text = text.replace(/5/g, 'u');
  return text;
}

// Desafio 10
function techList(arrayTech, nameText) {
  if (arrayTech.length === 0) {
    return 'Vazio!';
  }

  arrayTech = arrayTech.sort();
  let techObj = [];

  for (let i of arrayTech) {
    techObj.push({ tech: i, name: nameText });
  }

  return techObj;
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

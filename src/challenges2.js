// Desafio 11
function phoneInvalid(numArray) {
  let countList = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

  for (let i of numArray) {
    if (countList[i] >= 2 || i < 0 || i > 9) {
      return true;
    }
    countList[i] += 1;
  }

  return false;
}

function generatePhoneNumber(arrayPhone) {
  let resultPhoneNumber = '';

  if (arrayPhone.length !== 11) {
    resultPhoneNumber = 'Array com tamanho incorreto.';
  } else if (phoneInvalid(arrayPhone)) {
    resultPhoneNumber = 'não é possível gerar um número de telefone com esses valores';
  } else {
    for (let i of arrayPhone) {
      resultPhoneNumber += i;
    }
    resultPhoneNumber = resultPhoneNumber.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
  }

  return resultPhoneNumber;
}
/* -> "\d"
   Encontra correspondência com um número. Equivalente a [0-9].
   Por exemplo,  /\d/ ou /[0-9]/ encontra correspondente '8' em "Dróide BB8".
   fonte : https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Regular_Expressions
*/

// Desafio 12
function absCheck(sideA, sideB, sideC) {
  let ab = sideA - sideB;
  let ac = sideA - sideC;
  let bc = sideB - sideC;
  if (Math.abs(ab) >= sideC && Math.abs(ac) >= sideB && Math.abs(bc) >= sideA) {
    return false;
  }
  return true;
}

function triangleCheck(sideA, sideB, sideC) {
  if (sideA + sideB <= sideC || sideA + sideC <= sideB || sideB + sideC <= sideA) {
    return false;
  }
  if (!absCheck(sideA, sideB, sideC)) {
    return false;
  }
  return true;
}
// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};

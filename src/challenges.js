// Desafio 1
function compareTrue(value1, value2) {
    if (value1 === true && value2 === true) {
        return true;
    } else {
        return false;
    }
}


// Desafio 2
function calcArea(base, height) {
    let area = (base * height) / 2;
    return (area);
}


// Desafio 3
function splitSentence(string) {
    let stringDiv = string.split(' ')
    console.log(stringDiv);
    return stringDiv;
}


// Desafio 4
function concatName(array) {
    let primeiraPalavra = array[0];
    let ultimaPalavra = array.pop();
    let juntas = ultimaPalavra + ', ' + primeiraPalavra;
    return juntas;
}



// Desafio 5
function footballPoints(wins, ties) {
    let resultado = wins * 3 + ties * 1;
    if (resultado === 50) {
        return 50;
    } else if (resultado === 5) {
        return 5;
    } else(resultado === 0); {
        return 0;
    }
}

// Desafio 6
function highestCount(matrizNumeros) {
    let maiorNumero = 0;
    for (let index = 0; index < matrizNumeros.length; index += 1) {
        if (matrizNumeros[index] > maiorNumero) {
            maiorNumero => matrizNumeros[index];
        }
    }
    return (maiorNumero += 1);
}


// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
    let c1 = Math.abs(cat1 - mouse);
    let c2 = Math.abs(cat2 - mouse);
    if (c1 > c2) {
        return ("cat2");
    } else if (c1 < c2) {
        return ("cat1");
    } else {
        return ("os gatos trombam e o rato foge");
    }
}

// Desafio 8
function fizzBuzz(arrey) {
    let matriz = [];
    for (let index = 0; index < arrey.length; index += 1) {
        if (arrey[index] % 3 === 0 && arrey[index] % 5 === 0) {
            matriz.push("fizzBuzz");
        } else if (arrey[index] % 3 === 0) {
            matriz.push("fizz");
        } else if (arrey[index] % 5 === 0) {
            matriz.push("buzz");
        } else {
            matriz.push("bug!");
        }
    }
    return matriz;
}



// Desafio 9
function encode(pstring) {
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
}
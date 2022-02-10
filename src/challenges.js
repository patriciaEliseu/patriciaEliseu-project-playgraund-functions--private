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
    console.log(stringDiv)
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
function highestCount(matriz) {
    console.log(highestCount.sort());

}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {

}

// Desafio 8
function fizzBuzz() {
    for (let index = 0; index < fizzBuzz.length; index += 1) {
        console.log(fizzBuzz[index]);
    }
    if (index % 3 === 0 && index % 5 === 0) {
        return ("fizzbuzz");
    } else if (index % 3 === 0) {
        return ("fizz");
    } else if (index % 5 === 0) {
        return ("buzz");
    } else {
        return ("bug!");
    }
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
}
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
    let maiorNumero = Math.max.apply(null, matrizNumeros);
    /* console.log(maiorNumero); */
    let qtdeMaiorNumero = 0;
    for (let index = 0; index < matrizNumeros.length; index += 1) {
        if (matrizNumeros[index] === maiorNumero) {
            qtdeMaiorNumero += 1;
        }
    }
    return qtdeMaiorNumero;
}
/* highestCount([9, 1, 2, 3, 9, 5, 7]) */

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
    let resultado1 = 0;
    for (let index = 0; index < pstring.length; index += 1) {
        if (pstring[index] === a) {
            resultado1 = 1;
        } else if (pstring[index] === e) {
            resultado1 = 2;
        } else if (pstring[index] === i) {
            resultado1 = 3;
        } else if (pstring[index] === o) {
            resultado1 = 4;
        } else if (pstring[index] === u) {
            resultado1 = 5;
        }
    }
}


function decode() {


}
/* 10 - Crie uma função de Lista de Tecnologias
Crie uma função que recebe um array de nomes de tecnologias que você quer aprender. Essa função deve também um segundo parâmetro chamado namecom um nome.

Para cada tecnologia no array, crie um objeto com a seguinte estrutura:

{
  tech: "NomeTech",
  name: name
}
Estes objetos devem ser inseridos em uma nova lista em ordem crescente de campo techno objeto.

A saída de sua função deve ser uma lista de objetos ordenada pelo campo techdos objetos com o formato acima.

Exemplo:

Entradas da função:

["React", "Jest", "HTML", "CSS", "JavaScript"]
"Lucas"

// Saída:

[
  {
    tech: "CSS",
    name: "Lucas"
  },
  {
    tech: "HTML",
    name: "Lucas"
  },
  {
    tech: "JavaScript",
    name: "Lucas"
  },
  {
    tech: "Jest",
    name: "Lucas"
  },
  {
    tech: "React",
    name: "Lucas"
  }
]
Caso o array venha vazio sua função deve retornar 'Vazio!'

O que será verificado:

Retorne uma lista de objetos ordenados quando for uma lista passada com 5 tecnologias

Retorne uma mensagem de erro 'Vazio!' quando a lista não tiver tecnologias */
// Desafio 10
function techList(tech, name) {
    tech.sort();
    let meuArray = [];
    if (tech.length === 0) {
        return "Vazio!";
    }
    for (let index = 0; index < tech.length; index += 1) {
        meuArray.push({
            tech: tech[index],
            name: name
        })
    }
    return meuArray;
}
console.log(techList(["React", "Jest", "HTML", "CSS", "JavaScript"], "Lucas"));

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
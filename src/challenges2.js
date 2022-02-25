// Desafio 11
function generatePhoneNumber(telephone) {
    for (let index = 0; index < telephone.length; index += 1) {
        if (telephone !== 11) {
            return "Array com tamanho incorreto.";
        } else if (telephone[index] < 0) {
            return "não é possível gerar um número de telefone com esses valores.";
        } else if (telephone[index] > 9 && telephone[index] < 11) {
            return "não é possível gerar um número de telefone com esses valores."
        } else if (telephone[index] ** 3 || telephone[index] ** )
    }
}


// Desafio 12
function triangleCheck() {
    // seu código aqui
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
// TIPAGEM STÁTICA



// O TS só aceita atribuições de valores do mesmo tipo

let age: number = 20
let Fullname: string = 'Bia Biato'

age = 28
// age = 'bia'
Fullname = 'Adão Negro'
// Fullname = 40




// Inferência de tipos

// Se o valor da minha variável for um número
// por exmplo o TS já consegue indentificar que aquela
// variável e do tipo number

let animal = 'dog'
let year = 2024

// let animal = 2024




// Parâmetros e retorno de Funções

const multi = (a: number, b: number): number => {
  return a * b
}

console.log(multi(3,5))




// Função com retorno Opcional

const greeting = (Fullname: string): string | void => {
  if (Fullname) {
    return `Olá ${Fullname}!`
  }
}

console.log(greeting('Manoel Gomes'))



// Função com parâmetros opcionais

const stringOrNumber = (value: number | string): number => {
  if(typeof value === 'string') {
    return value.length
  }
  return value
}

console.log(stringOrNumber(1))
console.log(stringOrNumber('shape'))
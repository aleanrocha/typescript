// ENUMS

// Objeto normal

const GENDER = {
  male: 'male',
  fenale: 'fenale',
  other: 'other'
}

// PascalCase & CAMELCASE

enum Gender {
  MALE = 'Male',
  FENALE = 'Fenale',
  OTHER = 'Other'
}

type Person = {
  name: string
  age: number
  gender: Gender
}

const person: Person = {
  name: 'Abreu',
  age: 55,
  gender: Gender.OTHER
}

const displayPersonInfo = (person: Person): void => {
  console.log(`My name is ${person.name} and i am ${person.age} years old`)
}

displayPersonInfo(person)
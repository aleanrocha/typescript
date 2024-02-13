// Interfaces e tipos personalizados


// TYPE

type Coordinate = {
  x: number
  y: number
}

// const coordinate: Coordinate = {
//   x: 10,
//   y: 5
// }

// console.log(coordinate)

const calculateDistance = (pointA: Coordinate, pointB: Coordinate): number => {
  const dx = pointB.x - pointA.x
  const dy = pointB.y - pointA.y
  const result = Math.sqrt((dx * dx) + (dy * dy))
  return result
}

const coordinateA: Coordinate = {
  x: 10,
  y: 5
}

const coordinateB: Coordinate = {
  x: 20,
  y: 24
}

console.log(calculateDistance(coordinateA, coordinateB))



// INTERFACE

interface Car {
  brand: string
  model: string
  year: number
  startEngine: () => void
}

const myCar: Car = {
  brand: 'Audi',
  model: 'R8',
  year: 2007,
  startEngine: () => {
    console.log('Engine Started')
  }
}

const drive = (car: Car): void => {
  console.log(`Driving ${car.brand} - ${car.model}`)
}

drive(myCar)
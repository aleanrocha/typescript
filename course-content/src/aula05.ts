// Generics

// const getFirstElement = (data: string[]): string | null => {
//   if(!data.length) {
//     return null
//   }
//   const [ fisrtElement ] = data
//   return fisrtElement
// }

const getFirstElement = <T> (data: T[]): T | null => {
  if(!data.length) {
    return null
  }
  const [ fisrtElement ] = data
  return fisrtElement
}

const fruits: string[] = ['Banana', 'Lime', 'Orange', 'Pear']
const numbers: number[] = [1,2,3,4,5,6,7,8]

console.log(getFirstElement<string>(fruits))
console.log(getFirstElement<number>(numbers))
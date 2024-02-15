// Utillity Types

type User = {
  id: number
  userName: string
  password: string
  createdAt: Date
  updatedAt: Date
}

const user: User = {
  id: 1,
  userName: 'ZeDaManga',
  password: 'ze1234',
  createdAt: new Date,
  updatedAt: new Date
}

// PARTIAL

// Não precisa passar todas as propiedades
// Todas as propiedades agora são opcionais
type partialUser = Partial<User>

const user2: partialUser = {
  userName: 'oiawfcnhaoincia',
  password: 'jdkcsk'
}

// OMIT

// Omite uma propiedade específica
type newUser = Omit<User, 'id' | 'password' | 'createdAt' | 'updatedAt'>

const user3: newUser = {
  userName: 'La ele',
}

// PICK

// Pega uma propiedade específica
type specificUser = Pick<User, 'userName'>

const searchUser: specificUser = {
  userName: 'vicente'
}
'use strict'
import { makeExecutableSchema } from 'graphql-tools'
const typeDefs = `
scalar Date
#This is the type user
enum Genero {
  MASCULINO
  FEMENINO
}
type User {
  id: ID!
  name: String!
  lastName: String!
  email: String!
  lastDate: Date!
  country: String!
  adress: String!
  #This is array of solicitudes
  solicitudes: [Solicitude]
  genero: Genero
}
#This is the type Solicitude
type Solicitude {
  id: ID!
  description: String!
  delivery: User
}
type Query {
  solicitudes: [Solicitude]
  users: [User]
  user(id: Int): User
  solicitude(id: Int): Solicitude
}
`
// datos quemados de base de datos
const usersBd = [{
  id: 1,
  name: 'JK',
  lastName: 'H',
  email: 'jch@linke.net',
  country: 'quito',
  adress: 'quito'
}, {
  id: 2,
  name: 'pol',
  lastName: 'c',
  email: 'pol@linke.net',
  country: 'quito',
  adress: 'quito'
}]
const solicitudesBd = [
  {
    id: 1,
    description: 'pedido1'
  },
  {
    id: 2,
    description: 'Pedidos2'
  }
]
const deliveryBd = {
  id: 3,
  name: 'xxx',
  lastName: 'xx',
  email: 'xxx@linke.net',
  country: 'xxx',
  adress: 'quito'
}
// resolvers
const resolvers = {
  Query: {
    users: () => {
      return usersBd
    }
  },
  User: {
    solicitudes: () => {
      return solicitudesBd
    }
  },
  Solicitude: {
    delivery: () => {
      return deliveryBd
    }
  }
}
const schema = makeExecutableSchema({
  typeDefs,
  resolvers: resolvers
})
module.exports = schema

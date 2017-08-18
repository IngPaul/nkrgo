'use strict'
import { makeExecutableSchema } from 'graphql-tools'
const typeDefs = `
type User {
  id: ID!
  name: String!
  lastName: String!
  email: String!
  country: String!
  adress: String!
  solicitudes: [Solicitude]
}
type Solicitude {
  id: ID!
  name: String!
  lastName: String!
  email: String!
  country: String!
  adress: String!
  delivery: User!
}
type Query {
  solicitudes: [Solicitude]
  users: [User]
  user(id: Int): User
  solicitude(id: Int): Solicitude
}
`
const schema = makeExecutableSchema({
  typeDefs
})
module.exports = schema

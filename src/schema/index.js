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
}
type Query {
  users: [User]
}
type Solicitude {
  id: ID!
  name: String!
  lastName: String!
  email: String!
  country: String!
  adress: String!
}
type Query {
  users: [User]
}

`
const schema = makeExecutableSchema({
  typeDefs
})
module.exports = schema

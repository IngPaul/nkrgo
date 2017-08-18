'use strict'
import { makeExecutableSchema } from 'graphql-tools'
const typeDefs = `
type Curso {
  id: ID!
  titulo: String!
}
type Query {
  cursos: [Curso]
}
`
const schema = makeExecutableSchema({
  typeDefs
})
module.exports = schema

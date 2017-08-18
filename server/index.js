'use strict'
import express from 'express'
import bodyParser from 'body-parser'
import { graphqlExpress, graphiqlExpress } from 'graphql-server-express'
import mySchema from './../src/schema/index'
const app = express()
const PORT = 3000
app.use(
  '/graphql',
  bodyParser.json(),
  graphqlExpress({
    schema: mySchema,
    graphiql: true
  })
)
app.use(
  '/graphiql',
  graphiqlExpress({
    endpointURL: '/graphql'
  })
)
app.get('/', (req, res) => {
  res.send('Url base para test!')
})
app.listen(PORT, () => {
  console.log('Servidor Activo\n')
})

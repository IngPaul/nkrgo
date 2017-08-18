'use strict'
import express from 'express'
import bodyParser from 'body-parser' // eslint-disable-line 
import { graphqlExpress , graphiqlExpress} from 'graphql-server-express' // eslint-disable-line 
const myShema = require('./../src/shema') // eslint-disable-line 
console.log('***************************/\n')
console.log(myShema)
console.log('\nß***************************/\n')
const app = express()
const PORT = 5678
app.use(
  '/graphql',
  bodyParser.json(),
  graphqlExpress({ 
    shema: myShema,
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
  res.send('Url Base!')
})
app.listen(PORT, () => {
  console.log('Servidor Activo\n')
})

import 'babel-polyfill'
import http from 'http'
import assert from 'assert'
import '../server/index.js'
describe('Example Node Server', () => {// eslint-disable-line 
  it('should return 200', done => {// eslint-disable-line 
    http.get('http://127.0.0.1:5678', res => {
      assert.equal(200, res.statusCode)
      done()
    })
  })
})

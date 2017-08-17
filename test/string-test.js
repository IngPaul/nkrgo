import 'babel-polyfill'
const assert = require('assert')
const utils = require('./../src/libs/utils')
describe('function string', () => {
  describe('Extracting hashtags from text', () => {
    it('hastag exist', () => {
      let tag = utils.extractTags('a ##picture with tags #Awesome #AVA')
      assert.deepEqual(tag, ['picture', 'awesome', 'ava'])
    })
  })
})

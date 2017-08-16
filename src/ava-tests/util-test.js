'use strict'
const test = require('ava')
const utils = require('../src/libs/utils')
test('Extracting hashtags from text', t => {
  let tags = utils.extractTags('a ##picture with tags #Awesome #AVA')
  t.deepEqual(tags, [
    'picture',
    'awesome',
    'ava'
  ])
  tags = utils.extractTags('a picture with no tags')
  t.deepEqual(tags, [])
  tags = utils.extractTags()
  t.deepEqual(tags, [])
  tags = utils.extractTags()
  t.deepEqual(tags, [])
})

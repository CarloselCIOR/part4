const { test, describe } = require('node:test')
const assert = require('node:assert')
const listHelper = require('../utils/list_helper')

const blogs = require('./blogs')

describe('favorite blog', () => {

  test('of a bigger list is found correctly', () => {
    const result = listHelper.favoriteBlog(blogs)
    assert.strictEqual(result, blogs[2])
    console.log('Favorite blog:', result.title, 'by', result.author, 'with', result.likes, 'likes')
  })
})
const { test, describe } = require('node:test')
const assert = require('node:assert')
const listHelper = require('../utils/list_helper')

const blogs = require('./blogs')

describe('author with most blogs', () => {

  test('of a bigger list is found correctly', () => {
    const result = listHelper.authorMostBlogs(blogs)
    assert.deepStrictEqual(result.author, 'Robert C. Martin')
    assert.deepStrictEqual(result.blogs, 3)
    console.log('Author with most blogs:', result.author, 'with', result.blogs, 'blogs')
  })
})
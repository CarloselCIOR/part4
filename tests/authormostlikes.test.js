const { test, describe } = require('node:test')
const assert = require('node:assert')
const listHelper = require('../utils/list_helper')

const blogs = require('./blogs')

describe('author with most likes', () => {
  const listWithOneBlog = [
    {
      _id: '5a422aa71b54a676234d17f8',
      title: 'Go To Statement Considered Harmful',
      author: 'Edsger W. Dijkstra',
      url: 'http://www.cs.utexas.edu/~EWD/ewd08xx/EWD831.PDF',
      likes: 5
    }
  ]

  test('of a list with one blog is the likes of that blog', () => {
    const result = listHelper.authorMostLikes(listWithOneBlog)
    assert.deepStrictEqual(result.author, 'Edsger W. Dijkstra')
    assert.deepStrictEqual(result.likes, 5)
  })

  test('of a bigger list is calculated correctly', () => {
    const result = listHelper.authorMostLikes(blogs)
    assert.deepStrictEqual(result.author, 'Edsger W. Dijkstra')
    assert.deepStrictEqual(result.likes, 17)
    console.log('Author with most likes:', result.author, 'with', result.likes, 'likes')
  })
})
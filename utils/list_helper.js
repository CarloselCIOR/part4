const dummy = (blogs) => {
  return 1
}

const totalLikes = (blogs) => { 
  return blogs.reduce((sum, blog) => sum + blog.likes, 0)
}

const favoriteBlog = (blogs) => {
  if (blogs.length === 0) return null
  const maxLikes = Math.max(...blogs.map(blog => blog.likes))
  return blogs.find(blog => blog.likes === maxLikes)
}

const mostBlogs = (blogs) => {
  const authorCount = blogs.reduce((count, blog) => {
    count[blog.author] = (count[blog.author] || 0) + 1
    return count
  }, {})
  
  const maxBlogs = Math.max(...Object.values(authorCount))
  const authorWithMostBlogs = Object.keys(authorCount).find(author => authorCount[author] === maxBlogs)
  
  return { author: authorWithMostBlogs, blogs: maxBlogs }
}

module.exports = {
    dummy,
    totalLikes,
    favoriteBlog,
    mostBlogs
}
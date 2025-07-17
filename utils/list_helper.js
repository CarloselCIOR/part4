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

const authorMostBlogs = (blogs) => {
  const authorCount = blogs.reduce((count, blog) => {
    count[blog.author] = (count[blog.author] || 0) + 1
    return count
  }, {})
  
  const maxBlogs = Math.max(...Object.values(authorCount))
  const authorWithMostBlogs = Object.keys(authorCount).find(author => authorCount[author] === maxBlogs)
  
  return { author: authorWithMostBlogs, blogs: maxBlogs }
}

const authorMostLikes = (blogs) => {
  const authorLikes = blogs.reduce((likes, blog) => {
    likes[blog.author] = (likes[blog.author] || 0) + blog.likes
    return likes
  }, {})
  
  const maxLikes = Math.max(...Object.values(authorLikes))
  const authorWithMostLikes = Object.keys(authorLikes).find(author => authorLikes[author] === maxLikes)
  
  return { author: authorWithMostLikes, likes: maxLikes }
}

module.exports = {
    dummy,
    totalLikes,
    favoriteBlog,
    authorMostBlogs,
    authorMostLikes 
}
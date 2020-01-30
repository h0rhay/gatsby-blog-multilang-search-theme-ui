import React from 'react'
import usePosts from '../hooks/usePosts'
import { Link } from 'gatsby'

const PostList = () => {
  const posts = usePosts()
  return (
    <ul>
      {posts.map(post => (
        <li key={post.id}>
          <Link to={post.slug}>
            {post.title}
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default PostList
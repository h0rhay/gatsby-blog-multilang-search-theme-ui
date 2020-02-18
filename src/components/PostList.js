import React, { useState } from 'react'
import usePosts from '../hooks/usePosts'
import { Link } from 'gatsby'

const PostList = () => {
  const allPosts = usePosts()

  const emptyQuery = ''

  const [search, setSearch] = useState({
    filteredData: [],
    query: emptyQuery
  })

  const handleInputChange = (event, allPosts) => {
    const query = event.target.value

    const posts = allPosts || []
    const filteredData = posts.filter(post => {
      const { title, excerpt, tags } = post
      return (
        title.toLowerCase().includes(query.toLowerCase()) ||
        excerpt.toLowerCase().includes(query.toLowerCase()) ||
        tags.join("").toLowerCase().includes(query.toLowerCase())
      )
    })

    setSearch({
      filteredData,
      query
    })
  }

  const { filteredData, query } = search
  const hasSearchResults = filteredData && query !== emptyQuery
  const posts = hasSearchResults ? filteredData : allPosts

  return (
    <>
      <div className="searchBox">
        <input
          className="searchInput"
          type="text"
          id="filter"
          placeholder="Type to filter posts..."
          onChange={(e) => handleInputChange(e, allPosts)}
        />
      </div>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <Link to={post.slug}>
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </>
  )
}

export default PostList
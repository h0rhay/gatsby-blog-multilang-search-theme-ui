import React, { useState } from 'react'
import usePosts from '../hooks/usePosts'
import { Link } from 'gatsby'

// (
//   description.toLowerCase().includes(query.toLowerCase()) ||
//   title.toLowerCase().includes(query.toLowerCase()) ||
//   tags
//     .join("")
//     .toLowerCase()
//     .includes(query.toLowerCase())
// )

const PostList = () => {
  const allPosts = usePosts()

  const emptyQuery = ''
  const [search, setSearch] = useState({
    filteredData: [],
    query: emptyQuery
  })

  const handleInputChange = (event, allPosts) => {
    console.log(event.target.value)
    const query = event.target.value

    const posts = allPosts || []
    console.log('all posts in handleChange', allPosts)
    const filteredData = posts.filter(post => {
      console.log('💥', post);
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
      {console.log('hasSearchResults', hasSearchResults)}
      {console.log('filteredData', filteredData)}
      {console.log('allPosts', allPosts)}
      {console.log('search', search)}
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
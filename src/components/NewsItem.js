import React from 'react'


const NewsItem = ({story}) => (
  <div>
    <a href = {story.url}><h3>{story.title}</h3></a>
    <p>By: {story.by}</p>
    <p>Score: {story.score}</p>
  </div>
)

export default NewsItem

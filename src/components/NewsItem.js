import React from 'react'


const NewsItem = ({story}) => (
  <div className ='news-item'>
    <a href = {story.url} className = 'news-item__title'><h3>{story.title}</h3></a>
    <p>By: {story.by}</p>
    <p>Score: {story.score}</p>
  </div>
)

export default NewsItem

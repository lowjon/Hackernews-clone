import React, { Component } from 'react'

const NewsItem = (props) => {
  return (
    <div>
      <p>Here is a story, yo. {props.story}</p>
    </div>
  )
}

export default NewsItem

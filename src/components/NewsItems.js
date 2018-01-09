import React, { Component } from 'react'
import NewsItem from './NewsItem'

export default class NewsItems extends Component {
  constructor(props){
    super(props)
    this.state = {
      topStories: [],
      newStories: [],
      storyList: []
    }
    NewsItems.getInitialProps = this.handleGetTopStories()
  }

  async handleGetTopStories () {
    const res = await fetch('https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty')
    const data = await res.json()
    let stories = []
    for (let i = 0; i < 30; i++){
      let otherRes = await fetch(`https://hacker-news.firebaseio.com/v0/item/${data[i]}.json?print=pretty`)
      let otherData = await otherRes.json()
      stories.push(otherData)
    }
    this.setState({topStories: stories})

  }

  async handleGetStory (storyId) {
    const res = await fetch(`https://hacker-news.firebaseio.com/v0/item/${storyId}.json?print=pretty`)
    const story = await res.json()
    return story
  }


  componentDidMount(){
    this.handleGetTopStories()

  }

  render(){
    const stories = this.state.topStories
    return (
      <div>
        <h1>Welcome to Reactor News!</h1>
        <ul>
          {stories.map(( story ) => (
            <NewsItem
              key = {story.id}
              story = {story}
            />
          ))}

        </ul>
      </div>
    )
  }
}

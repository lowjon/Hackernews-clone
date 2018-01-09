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
  }


  handleGetTopStories() {
      let topThirty = []
    fetch('https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty')
    .then(res => {
      console.log(res)
      return res.json()
    }).then(data => {
      console.log('data', data)
      let list = []
      for (let i = 0; i < 30; i++){
        list.push(data[i])
      }
      list.map((li) => {
        fetch(`https://hacker-news.firebaseio.com/v0/item/${li}.json?print=pretty`)
        .then(res => {
          return res.json()
        }).then(data => {
          topThirty.push(data)
        })
      })
      console.log('top', topThirty)
      this.setState({ topStories: topThirty })
      // this.handleGetStoryList(list)
    })
    return topThirty
  }

  handleGetStoryList() {
    let storiesData = list.map((storyCode) => {
      fetch(`https://hacker-news.firebaseio.com/v0/item/${storyCode}.json?print=pretty`)
      .then(res => {
        return res.json()
      }).then(data => {
        // console.log('story data', data)
        return data
      })
      console.log("storiesData", storiesData)
    })
  }


  componentDidMount(){
    this.handleGetTopStories()

  }

  render(props){
    console.log('why?', this.state.topStories)
    const stories = this.state.topStories
    console.log('sturrries', stories)
    return (
      <div>
        <h1>Welcome to Reactor News!</h1>
        <ul>
          {stories.map(( story ) => (
            <NewsItem key={story.id} story={story} />
          ))}
        </ul>
      </div>
    )
  }
}

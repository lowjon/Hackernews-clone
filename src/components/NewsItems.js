import React, { Component } from 'react'
import NewsItem from './NewsItem'

export default class NewsItems extends Component {
  constructor(props){
    super(props)
    this.state = {
      topStories: [],
      newStories: []
    }
    this.handleGetStories = this.handleGetStories.bind(this)
  }

  handleGetStories(list) {
    let storiesData = list.map((storyCode) => {
      fetch(`https://hacker-news.firebaseio.com/v0/item/${storyCode}.json?print=pretty`)
      .then(res => {
        console.log('success', res)
        return res.json()
      }).then(data => {
        console.log('story data', data)
      })
    })
  }

  componentDidMount(){
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
      console.log('list', list)
      this.handleGetStories(list)
    })
  }
  render(){
    return (
      <div>
        Hello from NewsItems.  Check console for fetch results from Hackernews API
        <NewsItem story = 'test'/>
      </div>
    )
  }
}

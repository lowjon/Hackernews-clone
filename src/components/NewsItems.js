import React, { Component } from 'react'
import NewsItem from './NewsItem'
import dummy from '../dummyData.js'
//currently running with dummy data compiled by faker.js to improve performance while developing

export default class NewsItems extends Component {
  constructor(props){
    super(props)
    this.state = {
      // make sure to change topStories back to an empty array when implementing fetch instead of dummy data
      topStories: dummy,
      newStories: [],
      storyList: []
    }
    NewsItems.getInitialProps = this.handleGetTopStories()
  }

  async handleGetTopStories () {

    // ------- this works but is really slow and slows down development ------ FIX
    // const res = await fetch('https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty')
    // const data = await res.json()
    //
    // let stories = []
    // for (let i = 0; i < 5; i++){
    //   let otherRes = await fetch(`https://hacker-news.firebaseio.com/v0/item/${data[i]}.json?print=pretty`)
    //   let otherData = await otherRes.json()
    //   stories.push(otherData)
    // }
    // console.log(stories)
    // this.setState({topStories: stories})

  }

  async handleGetStory (storyId) {
    const res = await fetch(`https://hacker-news.firebaseio.com/v0/item/${storyId}.json?print=pretty`)
    const story = await res.json()
    return story
  }


  componentDidMount(){
    // **** this.handleGetTopStories()

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
              className = "news-item"
            />
          ))}

        </ul>
      </div>
    )
  }
}

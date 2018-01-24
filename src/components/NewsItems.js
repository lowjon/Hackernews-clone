import React, { Component } from 'react'
import {
  Route
} from 'react-router-dom'
import NewsItem from './NewsItem'
import Navbar from './Navbar'
import dummy from '../dummyData'

//currently running with dummy data compiled by faker.js to improve performance while developing

export default class NewsItems extends Component {
  constructor(props){
    super(props)
    this.state = {
      // make sure to change topStories back to an empty array when implementing fetch instead of dummy data
      hnPage: 'beststories',
      pageNumber: 0,
      stories: [],
    }
    NewsItems.getInitialProps = this.handleGetStories()
  }

  async handleGetStories () {

    // ------- this works but is really slow and slows down development ------ FIX
    const res = await fetch(`https://hacker-news.firebaseio.com/v0/${this.state.hnPage}.json?print=pretty`)
    const data = await res.json()
    let stories = data.slice((0 + (30 * this.state.pageNumber)), (30 + (30 * this.state.pageNumber)))
    // for (let i = 0; i < 5; i++){
    //   let otherRes = await fetch(`https://hacker-news.firebaseio.com/v0/item/${data[i]}.json?print=pretty`)
    //   let otherData = await otherRes.json()
    //   stories.push(otherData)
    // }
    // console.log(stories)
    this.setState({ stories })

  }

  componentDidMount(){

  }

  render(){
    const stories = this.state.stories
    return (
      <div>

        <Route component={ Navbar }/>
        <h1>Welcome to Reactor News!</h1>
        <ul>
          {stories.map(( story ) => (
            <NewsItem
              key={story}
              story={story}
            />
          ))}

        </ul>
      </div>
    )
  }
}

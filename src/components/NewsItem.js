import React, { Component } from 'react'

export default class NewsItem extends Component {
  constructor (props) {
    super(props)
    this.state = { theStory: {} }
    NewsItem.getInitialProps = this.handleGetStory()
  }

  async handleGetStory () {
    let res = await fetch(`https://hacker-news.firebaseio.com/v0/item/${this.props.story}.json?print=pretty`)
    let theStory = await res.json()
    this.setState({ theStory })
  }

  componentDidMount () {
    // let theStory = this.handleGetStory(this.props.story)
    // console.log(theStory)
  }

  render () {
    const newsStory = this.state.theStory
    return (
      <div className='news-item'>
        <div className='news-item__top'>
          <a className='news-item__title' href={newsStory.url}><p>{newsStory.title}</p></a>
        </div>
        <div className='news-item__bottom'>
          <p>{newsStory.score} points by {newsStory.by} x time ago | hide | comments</p>
        </div>
      </div>
    )
  }
}

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
    const newsStroy = this.state.theStory
    return (
      <div className='news-item'>
        <a className='news-item__title' href={newsStroy.url}><p>{newsStroy.title}</p></a>
        <p>{newsStroy.by}</p>
        <p>score: {newsStroy.score}</p>
      </div>
    )
  }
}

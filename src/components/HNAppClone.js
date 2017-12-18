import React, { Component } from 'react'
import NewsItems from './NewsItems'

export default class HNAppClone extends Component {
  constructor(props){
    super(props)
    this.state = {}
  }
  mixins: [reactFireMixin]

  render () {
    return (
      <div>
        <h1>Here is the app!</h1>
        <p>Yo Tayt whats up?</p>
        <NewsItems />
      </div>
    )
  }
}

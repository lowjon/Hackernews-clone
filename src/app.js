import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import Navbar from './components/Navbar'
import NewsItems from './components/NewsItems'
import 'normalize.css/normalize.css'
import './styles/styles.scss'

ReactDOM.render(
  <Router>
    <div>
      <Route component={Navbar} />
      <Route path='/' component={NewsItems} />
    </div>
  </Router>,
  document.getElementById('app')
)

import React from 'react'
import ReactDOM from 'react-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import NewsItems from './components/NewsItems'
import 'normalize.css/normalize.css'
import './styles/styles.scss'

const App = () => (
  <MuiThemeProvider>
    <NewsItems className='news-items'/>
  </MuiThemeProvider>
)

ReactDOM.render(
  <App />,
  document.getElementById('app')
)

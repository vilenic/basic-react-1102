import React, { Component } from 'react'
import ArticleList from './components/article-list'
import articles from './fixtures'
import Filters from './components/filters'
import Chart from './components/chart'

class App extends Component {
  render() {
    return (
      <div>
        <h1>Article App</h1>
        <Chart articles={articles} />
        <Filters articles={articles} />
        <ArticleList articles={articles} />
      </div>
    )
  }
}

export default App

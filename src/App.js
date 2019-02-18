import React, { Component } from 'react'
import ArticleList from './components/article-list'
import articles from './fixtures'
import Filters from './components/filters'

class App extends Component {
  render() {
    return (
      <div>
        <h1>Article App</h1>
        <Filters articles={articles} />
        <ArticleList articles={articles} />
      </div>
    )
  }
}

export default App

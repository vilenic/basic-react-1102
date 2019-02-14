import React, { Component } from 'react'
import Article from './article'
//import AccodrionComponent from './accordion-component'
import accordion from '../decorators/accordion'

class ArticleList extends Component {
  render() {
    return <ul>{this.getArticles()}</ul>
  }

  getArticles() {
    const { articles, toggleOpenArticle, openArticleId } = this.props
    return articles.map((article) => (
      <li key={article.id}>
        <Article
          article={article}
          onBtnClick={toggleOpenArticle(article.id)}
          isOpen={article.id === openArticleId}
        />
      </li>
    ))
  }
}

export default accordion(ArticleList)

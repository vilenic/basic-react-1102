import React, { Component } from 'react'
import { findDOMNode } from 'react-dom'
import CommentList from './comment-list'

class Article extends Component {
  render() {
    const { article, isOpen, onBtnClick } = this.props
    return (
      <div className="test--article__container">
        <h3>{article.title}</h3>
        <button onClick={onBtnClick} className="test--article__btn">
          {isOpen ? 'close' : 'open'}
        </button>
        {this.getBody()}
      </div>
    )
  }

  getBody() {
    const { isOpen, article } = this.props
    if (!isOpen) return null

    return (
      <section className="test--article__body">
        {article.text}
        <CommentList comments={article.comments} />
      </section>
    )
  }
}

export default Article

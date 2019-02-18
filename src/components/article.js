import React, { Component } from 'react'
import CommentList from './comment-list'

class Article extends Component {
  /*
    componentDidCatch(error) {
        console.log('---', error)
    }

*/
  render() {
    const { article, isOpen, onBtnClick } = this.props
    return (
      <div>
        <h3>{article.title}</h3>
        <button onClick={onBtnClick}>{isOpen ? 'close' : 'open'}</button>
        {this.getBody()}
      </div>
    )
  }

  getBody() {
    const { isOpen, article } = this.props
    if (!isOpen) return null

    return (
      <section>
        {article.text}
        <CommentList comments={article.comments} />
      </section>
    )
  }
}

export default Article

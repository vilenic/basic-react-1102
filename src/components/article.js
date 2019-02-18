import React from 'react'
import CommentList from './comment-list-hooks'

function Article(props) {
  const { article, isOpen, onBtnClick } = props
  return (
    <div>
      <h3>{article.title}</h3>
      <button onClick={onBtnClick}>{isOpen ? 'close' : 'open'}</button>
      {getBody(props)}
    </div>
  )
}

function getBody({ isOpen, article }) {
  if (!isOpen) return null

  return (
    <section>
      {article.text}
      <CommentList comments={article.comments} />
    </section>
  )
}

export default Article

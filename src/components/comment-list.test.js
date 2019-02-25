import React from 'react'
import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import CommentList from './comment-list'
import articles from '../fixtures'

Enzyme.configure({ adapter: new Adapter() })

describe('CommentList', () => {
  it('should render CommentList', () => {
    const container = mount(<CommentList comments={[]} />)
    expect(container.find('.test--comment-list__container').length).toBe(1)
  })

  it('should render all comments closed by default', () => {
    const container = mount(<CommentList comments={articles[0].comments} />)
    expect(container.find('.test--comment-body__container').length).toBe(0)
  })

  it('should render CommentList on comments open', () => {
    const container = mount(<CommentList comments={articles[0].comments} />)
    container
      .find('.test--comment__btn')
      .at(0)
      .simulate('click')
    expect(container.find('.test--comment-list__container_shown').length).toBe(1)
  })
})

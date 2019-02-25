import React from 'react'
import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Article from './article'
import articles from '../fixtures'

Enzyme.configure({ adapter: new Adapter() })

describe('Article', () => {
  it('should render Article container', () => {
    const container = mount(<Article article={articles[0]} />)
    expect(container.find('.test--article__container').length).toBe(1)
  })

  it('should render article text on button click', () => {
    const container = mount(<Article article={articles[0]} isOpen />)
    expect(container.find('.test--article__body').length).toBe(1)
  })
})

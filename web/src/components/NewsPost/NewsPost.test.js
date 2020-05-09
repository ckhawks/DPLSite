import { render, cleanup } from '@testing-library/react'

import NewsPost from './NewsPost'

describe('NewsPost', () => {
  afterEach(() => {
    cleanup()
  })
  it('renders successfully', () => {
    expect(() => {
      render(<NewsPost />)
    }).not.toThrow()
  })
})

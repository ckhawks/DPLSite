import { render, cleanup } from '@testing-library/react'

import NewsPostPage from './NewsPostPage'

describe('NewsPostPage', () => {
  afterEach(() => {
    cleanup()
  })
  it('renders successfully', () => {
    expect(() => {
      render(<NewsPostPage />)
    }).not.toThrow()
  })
})

import { render, cleanup } from '@testing-library/react'

import PlayersPage from './PlayersPage'

describe('PlayersPage', () => {
  afterEach(() => {
    cleanup()
  })
  it('renders successfully', () => {
    expect(() => {
      render(<PlayersPage />)
    }).not.toThrow()
  })
})

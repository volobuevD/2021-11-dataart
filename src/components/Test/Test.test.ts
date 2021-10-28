import { render, screen } from '@testing-library/react'

import Test from './Test'

const onChange = jest.fn() //фейковая функция

describe('Organization component', () => {
  xit('renders', () => {
    render(<Test />)
    expect(screen.getByText(/HYU/i)).toBeInTheDocument()
  })
})

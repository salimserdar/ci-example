import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react'
import Title from './Title'

 
describe('Home', () => {
  it('renders a heading', () => {
    render(<Title title="Test title" />)
    const element = screen.getByTestId('title')
    expect(element.textContent).toEqual("Test title")
  })
})
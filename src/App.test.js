import { render, screen } from '@testing-library/react'
import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Home from './pages/Home/Home'

describe('Homepage', () => {
  it('Should have a title', () => {
    render(
        <BrowserRouter>
            <Home />
        </BrowserRouter>
    )
    const homeTitle = screen.getByTestId('homeTitle')
    expect(homeTitle).toBeInTheDocument()
  })
  it('Should have a description', () => {
    render(
        <BrowserRouter>
            <Home />
        </BrowserRouter>
    )
    const homeDescription = screen.getByTestId('homeDescription')
    expect(homeDescription).toBeInTheDocument()
  })
})

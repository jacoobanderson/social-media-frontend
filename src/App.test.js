import { render, screen } from '@testing-library/react'
import React from 'react'
import { BrowserRouter, Link, MemoryRouter } from 'react-router-dom'
import FriendsList from './components/FriendsList/FriendsList'
import Home from './pages/Home/Home'
import { createMemoryHistory } from 'history'
import FriendCard from './components/Cards/FriendCard'

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

// describe('Friends list', () => {
//     it('Should render friends', async () => {
//         // const history = createMemoryHistory()
//         // const route = '/test/6265546e1d39b656ff93505e'
//         // history.push(route)

//       render(
//         <MemoryRouter initialEntries={['/test/6265546e1d39b656ff93505e']}>
//             <FriendsList />
//         </MemoryRouter>
//       )

//       const homeTitle = screen.getByTestId('friendsListTest')
//       expect(homeTitle).toContain('test')
//     })
//   })

describe('Friend card', () => {
  const mockFriend = {
    firstName: 'test',
    lastName: 'test',
    id: '123456'
  }
  const mockRef = { current: '123456' }

  it('Should render full name', () => {
    render(<FriendCard friend={mockFriend} currentCardRef={mockRef} />)

    const friendCard = screen.getByTestId('friendCard')
    expect(friendCard).toHaveTextContent('test test')
  })

  it('Should render an image', () => {
    render(<FriendCard friend={mockFriend} currentCardRef={mockRef} />)
    const friendCard = screen.getByTestId('friendCard')
    const friendImage = screen.getByTestId('friendImage')
    expect(friendCard).toContainElement(friendImage)
  })

  it('Should have the class name "friendCard currentCardHighlight" if ref is same as id', () => {
    render(<FriendCard friend={mockFriend} currentCardRef={mockRef} />)
    const friendCard = screen.getByTestId('friendCard')
    expect(friendCard).toHaveClass('friendCard currentCardHighlight')
  })

  it('Should have the class name "friendCard" if ref is not same as id', () => {
    const mockRef2 = { current: '12345' }
    render(<FriendCard friend={mockFriend} currentCardRef={mockRef2} />)
    const friendCard = screen.getByTestId('friendCard')
    expect(friendCard).toHaveClass('friendCard')
  })
})

describe('Friends List', () => {
  const mockFriends = [{ id: 123, firstName: 'test', lastName: 'testsson' }]
  it('Should render the amount of friends', () => {
    render(
        <FriendsList friends={mockFriends} />
    )
    const friendsList = screen.getByTestId('friendsListTest')
    expect()
  })
})

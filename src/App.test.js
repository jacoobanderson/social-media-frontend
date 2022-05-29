import {
  fireEvent,
  render,
  screen
} from '@testing-library/react'
import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Home from './pages/Home/Home'
import FriendCard from './components/Cards/FriendCard'
import DiscussionThread from './components/Discussions/DiscussionThread'

describe('Home page', () => {
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

describe('Discussion thread', () => {
  const mockDiscussion = {
    title: 'test title',
    owner: 'tester',
    content: 'test content',
    _id: '123',
    replies: [{ owner: 'test', content: 'test content' }]
  }
  const mockCommentCountTwo = {
    title: 'test title',
    owner: 'tester',
    content: 'test content',
    _id: '123',
    replies: [{}, {}]
  }
  const mockCommentCountTen = {
    title: 'test title',
    owner: 'tester',
    content: 'test content',
    _id: '123',
    replies: [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}]
  }

  it('Should toggle comments', () => {
    const { rerender } = render(
      <DiscussionThread discussion={mockDiscussion} />
    )

    const discussionButton = screen.getByTestId('discussionTestButton')
    fireEvent.click(discussionButton)

    rerender(<DiscussionThread discussion={mockDiscussion} />)

    const discussionTestForm = screen.getByTestId('discussionTestForm')
    const discussionTestComments = screen.getByTestId('discussionTestComments')

    expect(discussionTestComments).toContainElement(discussionTestForm)

    fireEvent.click(discussionButton)

    rerender(<DiscussionThread discussion={mockDiscussion} />)

    expect(discussionTestComments).not.toBeInTheDocument()
  })

  it('Should render count of comments', () => {
    const { rerender } = render(
      <DiscussionThread discussion={mockDiscussion} />
    )

    const discussionCommentCount = screen.getByTestId('discussionTestCount')
    expect(discussionCommentCount).toHaveTextContent('(1)')

    rerender(<DiscussionThread discussion={mockCommentCountTwo} />)

    const discussionCommentCountTwo = screen.getByTestId('discussionTestCount')
    expect(discussionCommentCountTwo).toHaveTextContent('(2)')

    rerender(<DiscussionThread discussion={mockCommentCountTen} />)

    const discussionCommentCountTen = screen.getByTestId('discussionTestCount')
    expect(discussionCommentCountTen).toHaveTextContent('(10)')
  })

  it('Should render title, owner and content', () => {
    render(
      <DiscussionThread discussion={mockDiscussion} />
    )

    const discussionContainer = screen.getByTestId('discussionContainer')
    expect(discussionContainer).toHaveTextContent(mockDiscussion.title)
    expect(discussionContainer).toHaveTextContent(mockDiscussion.owner)
    expect(discussionContainer).toHaveTextContent(mockDiscussion.content)
  })
})

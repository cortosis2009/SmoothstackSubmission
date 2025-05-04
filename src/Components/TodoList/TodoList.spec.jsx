import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, vi, expect } from 'vitest'
import { TodoList } from './TodoList'

describe('TodoList', () => {
  const sampleTodos = [
    {
      id: 1,
      title: 'Test High',
      completed: false,
      priority: 'High',
      createdAt: new Date().toISOString()
    },
    {
      id: 2,
      title: 'Test Medium',
      completed: true,
      priority: 'Medium',
      createdAt: new Date().toISOString()
    }
  ]

  it('renders todo items with correct title and priority', () => {

    render(<TodoList todos={sampleTodos} deleteTodo={() => {}} toggleTodo={() => {}} />)

    expect(screen.getByText('Test High')).toBeInTheDocument()
    expect(screen.getByText('Test Medium')).toBeInTheDocument()
    expect(screen.getByText('High')).toBeInTheDocument()
    expect(screen.getByText('Medium')).toBeInTheDocument()
  })

  it('shows correct status icons', () => {
    render(<TodoList todos={sampleTodos} deleteTodo={() => {}} toggleTodo={() => {}} />)

    const checkIcons = screen.getAllByTestId('check-icon')
    const timesIcons = screen.getAllByTestId('times-icon')

    expect(checkIcons.length).toBe(1)
    expect(timesIcons.length).toBe(1)
  })

  it('calls toggleTodo when status cell is clicked', () => {
    const toggleMock = vi.fn()
    render(<TodoList todos={sampleTodos} deleteTodo={() => {}} toggleTodo={toggleMock} />)

    const statusCells = screen.getAllByText((_, el) => el?.tagName === 'svg')
    fireEvent.click(statusCells[0])
    expect(toggleMock).toHaveBeenCalledWith(1)
  })
})

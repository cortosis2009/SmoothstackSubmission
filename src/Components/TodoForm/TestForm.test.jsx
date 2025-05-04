import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import { TodoForm } from './TodoForm' 

describe('TodoForm', () => {
  it('should render inputs and submit with correct data', () => {
    const mockAddTodoList = vi.fn()

    render(<TodoForm addTodoList={mockAddTodoList} />)

    const titleInput = screen.getByLabelText(/title/i)
    const prioritySelect = screen.getByLabelText(/priority/i)
    const submitButton = screen.getByRole('button', { name: /submit/i })

    // Fill out and submit form
    fireEvent.change(titleInput, { target: { value: 'Unit Test Testing' } })
    fireEvent.change(prioritySelect, { target: { value: 'High' } })
    fireEvent.click(submitButton)

    expect(mockAddTodoList).toHaveBeenCalledTimes(1)

    const submittedItem = mockAddTodoList.mock.calls[0][0]
    
    expect(submittedItem.title).toBe('Unit Test Testing')
    expect(submittedItem.priority).toBe('High')
    expect(submittedItem.completed).toBe(false)
    expect(typeof submittedItem.id).toBe('number')
    expect(typeof submittedItem.createdAt).toBe('string')
  })
})
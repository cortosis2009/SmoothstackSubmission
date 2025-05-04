import  { useState } from "react"

export const TodoForm = ({ addTodoList }) => {
    const [title, setTitle] = useState("")
    const [priority, setPriority] = useState("Low")

    const handleSubmit = (e) => {
        e.preventDefault()
        const todoItem = {
            id: Math.floor(10000 + Math.random() * 90000),
            title: title,
            completed: false,
            priority: priority,
            createdAt: new Date().toISOString()
        }
        addTodoList(todoItem)
    }

    return (
        <form
        onSubmit={(e) => handleSubmit(e)}
        className="max-w-md mx-auto mb-6 rounded-2xl bg-white p-6 shadow-lg space-y-4"
        >
            <div>
                <label htmlFor="todo-title" className="block mb-1 text-sm font-medium text-gray-700"> Title: </label>
                <input
                    type="text"
                    id="todo-title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                    className="w-full rounded-lg border border-gray-300 px-4 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
            </div>
            <div>
                <label htmlFor="todo-priority" className="block mb-1 text-sm font-medium text-gray-700"> Priority: </label>
                <select
                    value={priority}
                    id="todo-priority"
                    onChange={(e) => setPriority(e.target.value)}
                    className="w-full rounded-lg border border-gray-300 px-4 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                >
                    <option value="Low">Low</option>
                    <option value="Medium">Medium</option>
                    <option value="High">High</option>
                </select>
            </div>
            <div className="text-right">
                <button
                type="submit"
                className="rounded-lg bg-blue-600 px-4 py-2 text-white text-sm hover:bg-blue-700 transition-colors"
                >
                    Submit
                </button>
            </div>
        </form>
    )
}
import { FaTrash, FaCheck, FaTimes } from 'react-icons/fa';

export const TodoList = ({ todos, deleteTodo, toggleTodo }) => {

    const getStatus = (completion) => {
        return completion
          ? <FaCheck data-testid="check-icon" className="text-green-500"/>
          : <FaTimes data-testid="times-icon" className="text-red-500"/>
    }

    const getPriority = (priority) => {
        switch(priority) {
            case 'High':
                return 'red-500'
            case 'Medium':
                return 'orange-300'
            case 'Low':
                return 'yellow-300'
            default: return ''
        }
    }

    return (
        <div className="overflow-x-auto rounded-2xl shadow-lg">
            <h1 className="ml-2">Todo List</h1>
            <table className="min-w-full lg:w-1/2 mx-auto table-auto border-collapse rounded-2xl bg-white text-left text-sm text-gray-700">
                <thead className="bg-gray-100 text-xs uppercase text-gray-500">
                    <tr>
                        <th className="px-4 py-2 sm:px-6 sm:py-4">Title</th>
                        <th className="px-4 py-2 sm:px-6 sm:py-4">Status</th>
                        <th className="px-4 py-2 sm:px-6 sm:py-4">Priority</th>
                        <th/>
                    </tr>
                </thead>
                <tbody>
                    {todos.map((item, idx) => (
                        <tr
                            key={item.id}
                            className={idx % 2 === 0 ? 'bg-white' : 'bg-gray-50 hover:bg-gray-100 transition-colors'}
                        >
                            <td className="px-1 py-2 sm:px-6 sm:py-4">{item.title}</td>
                            <td className="px-2 py-2 sm:px-6 sm:py-4" onClick={() => toggleTodo(item.id)}>{getStatus(item.completed)}</td>
                            <td className={`px-4 py-2 sm:px-6 sm:py-4 text-${getPriority(item.priority)}`}>{item.priority}</td>
                            <td className="px-4 py-2 sm:px-6 sm:py-4" onClick={() => deleteTodo(item.id)}> 
                                <FaTrash /> 
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
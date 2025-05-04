import { FaTrash, FaCheck, FaTimes } from 'react-icons/fa';

export const TodoStats = ({ todos }) => {

    const getStatus = (completion) => {
        return completion
          ? <FaCheck data-testid="check-icon" className="text-green-500"/>
          : <FaTimes data-testid="times-icon" className="text-red-500"/>
    }

    const getPriorityCount = (priority) => {
        return todos.filter(todo => todo.priority === priority).length
    }

    const highestPriority = todos.filter(item => item.priority === "High")
        .reduce((oldest, item) => {
            return !oldest || new Date(item.createdAt) < new Date(oldest.createdAt)
                ? item
                : oldest
        }, null)
    
    return (
        <div className="max-w-3xl mx-auto mt-8 p-6 bg-white rounded-2xl shadow-lg space-y-6">
            <h1 className="text-xl font-semibold text-gray-800">Todo Stats</h1>

            <div >
                <table className="min-w-full table-auto border-collapse text-left text-sm text-gray-700">
                    <thead className="bg-gray-100 text-xs uppercase text-gray-500">
                        <tr>
                        <th className="px-6 py-4">Title</th>
                        <th className="px-6 py-4">Status</th>
                        <th className="px-6 py-4">Priority</th>
                        <th className="px-6 py-4"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {highestPriority ? (
                        <tr className="bg-white hover:bg-gray-50 transition-colors">
                            <td className="px-6 py-4">{highestPriority.title}</td>
                            <td className="px-6 py-4">{getStatus(highestPriority.completed)}</td>
                            <td className="px-6 py-4">{highestPriority.priority}</td>
                        </tr>
                        ) : (
                        <tr>
                            <td className="px-6 py-4 text-gray-500 italic" colSpan="4">
                            No high priority tasks found.
                            </td>
                        </tr>
                        )}
                    </tbody>
                </table>
            </div>

            <div className="bg-gray-50 p-4 w-1/2 rounded-lg mx-auto">
                <h2 className="text-md font-medium text-gray-700 mb-2 font-bold">Priority Counts</h2>
                <ul className="space-y-1 text-gray-600">
                    <li className="text-red-500">High: {getPriorityCount("High")}</li>
                    <li className="text-orange-300">Medium: {getPriorityCount("Medium")}</li>
                    <li className="text-yellow-300">Low: {getPriorityCount("Low")}</li>
                </ul>
            </div>
        </div>
    )
}
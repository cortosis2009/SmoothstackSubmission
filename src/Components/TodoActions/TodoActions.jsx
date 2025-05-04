export const TodoActions = ({filter, setFilter, priorityFilter, setPriorityFilter, sortBy, setSortBy}) => {
    
    return (
        <div className="w-1/2 flex mx-auto flex-wrap justify-center gap-4 mb-0 bg-gray-900 shadow-md p-4 rounded-xl">
            <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="rounded-md border border-gray-300 bg-white px-4 py-2 text-sm focus:ring-blue-500 focus:border-blue-500"
            >
                <option value="all">All</option>
                <option value="active">Active</option>
                <option value="completed">Completed</option>
            </select>
            <select
            value={priorityFilter}
            onChange={(e) => setPriorityFilter(e.target.value)}
            className="rounded-md border bg-white border-gray-300 px-4 py-2 text-sm focus:ring-blue-500 focus:border-blue-500"
            >
                <option value="all">All Priorities</option>
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
            </select>
            <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="rounded-md border bg-white border-gray-300 px-4 py-2 text-sm focus:ring-blue-500 focus:border-blue-500"
            >
                <option value="createdAt">Sort by Date</option>
                <option value="priority">Sort by Priority</option>
            </select>
        </div>
    )
}
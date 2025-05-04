import { useState } from 'react';
import { TodoForm } from './Components/TodoForm/TodoForm';
import { TodoList } from './Components/TodoList/TodoList';
import { TodoStats } from './Components/TodoStats/TodoStats';
import { TodoActions } from './Components/TodoActions/TodoActions';


const App = () => {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState('all');
  const [priorityFilter, setPriorityFilter] = useState('all');
  const [sortBy, setSortBy] = useState('createdAt');

  // Add todo handler
  const addTodo = (todo) => {
    setTodos([...todos, {
      ...todo,
      id: Date.now(),
      completed: false,
      createdAt: new Date().toISOString()
    }]);
  };

  // // Toggle todo completion status
  const toggleTodo = (id) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  // // Delete todo
  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  // // Get filtered and sorted todos
  const getFilteredTodos = () => {
    return todos
      .filter(todo => {
        // Status filter
        if (filter === 'active') return !todo.completed;
        if (filter === 'completed') return todo.completed;
        return true;
      })
      .filter(todo => {
        // Priority filter
        if (priorityFilter !== 'all') return todo.priority === priorityFilter;
        return true;
      })
      .sort((a, b) => {
        // Sorting
        if (sortBy === 'priority') {
          const priorityValues = { 'Low': 1, 'Medium': 2, 'High': 3 };
          return priorityValues[b.priority] - priorityValues[a.priority];
        }
        return new Date(b.createdAt) - new Date(a.createdAt);
      });
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-8 bg-gray-300 space-y-8">
      <h1 className="text-3xl font-bold text-center text-gray-800">Todo App</h1>
        <TodoForm addTodoList={addTodo} />

        <TodoActions  
          filter={filter} 
          setFilter={setFilter} 
          priorityFilter={priorityFilter}
          setPriorityFilter={setPriorityFilter} 
          sortBy={sortBy}
          setSortBy={setSortBy} 
        />
        <div className="overflow-y-auto w-3/4 mx-auto h-[18rem]">
          <TodoList todos={getFilteredTodos()} deleteTodo={deleteTodo} toggleTodo={toggleTodo} />
        </div>
      
        <TodoStats todos={todos} />
    </div>
  );
}

export default App;

import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { TodoProvider } from './context/TodoContext';
import { TodoInput } from './components/TodoInput';
import { TodoItem } from './components/TodoItem';
import { useTodo } from './context/TodoContext';

function TodoList() {
  const { todos } = useTodo();
  
  return (
    <div className="space-y-3">
      {todos.length === 0 ? (
        <div className="text-center text-gray-500 py-8">
          <p>No tasks yet. Add one to get started!</p>
        </div>
      ) : (
        todos.map((todo) => <TodoItem key={todo.id} todo={todo} />)
      )}
    </div>
  );
}

function App() {
  return (
    <TodoProvider>
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-2xl mx-auto px-4">
          <div className="mb-8 text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <CheckCircle2 size={32} className="text-blue-500" />
              <h1 className="text-3xl font-bold text-gray-900">Task Master</h1>
            </div>
            <p className="text-gray-600">Stay organized, get more done.</p>
          </div>
          
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <TodoInput />
            <div className="mt-6">
              <TodoList />
            </div>
          </div>
        </div>
      </div>
    </TodoProvider>
  );
}

export default App;
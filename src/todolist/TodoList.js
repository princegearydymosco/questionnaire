import React, { useReducer } from 'react';

const todosReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, { id: Date.now(), text: action.text }];
    case 'REMOVE_TODO':
      return state.filter((todo) => todo.id !== action.id);
    default:
      return state;
  }
};

const TodoList = () => {
  const [todos, dispatch] = useReducer(todosReducer, []);

  const handleAddTodo = () => {
    const text = prompt('Enter a todo item:');
    if (text) {
      dispatch({ type: 'ADD_TODO', text });
    }
  };

  const handleRemoveTodo = (id) => {
    dispatch({ type: 'REMOVE_TODO', id });
  };

  return (
    <div>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.text}
            <button onClick={() => handleRemoveTodo(todo.id)}>Remove todo</button>
          </li>
        ))}
      </ul>
      <button onClick={handleAddTodo}>Add todo</button>
    </div>
  );
};

export default TodoList;
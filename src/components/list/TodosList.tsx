import React from 'react';
import {Todo} from '../../model';
import './TodosList.css';

type Props = {
  todos: Todo[],
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

const TodosList = ({todos, setTodos}: Props) => {
  return (
    <div className='list'>
      {todos.map(todo => (
        <div key={todo.id}> {todo.todo} </div>
      ))}
    </div>
  )
}

export default TodosList
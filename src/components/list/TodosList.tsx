import React from 'react';
import {Todo} from '../../model';
import './TodosList.css';
import ListCard from '../listCard/ListCard';

type Props = {
  todos: Todo[],
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

const TodosList = ({todos, setTodos}: Props) => {
  return (
    <div className='list'>
      {todos.map(todo => (
        <ListCard key={todo.id} todo={todo} todos={todos} setTodos={setTodos}/>
      ))}
    </div>
  )
}

export default TodosList
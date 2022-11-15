import React from 'react';
import {Todo} from '../../model';
import './TodosList.css';
import ListCard from '../listCard/ListCard';

type Props = {
  todos: Todo[],
  completed: Todo[],
  setCompleted:React.Dispatch<React.SetStateAction<Todo[]>>
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

const TodosList = ({todos, setTodos, completed, setCompleted}: Props) => {
  return (
    <section className='todos'>
      <div className='list'>
        <h2 className='title'>Pending tasks</h2>
        {todos.map(todo => (
          <ListCard  completed={completed} setCompleted={setCompleted} key={todo.id} todo={todo} todos={todos} setTodos={setTodos}/>
        ))}
      </div>
      <div className='list completed'>
        <h2 className='title'>Completed Tasks</h2>
        {completed.map(todo => (
          <ListCard completed={completed} setCompleted={setCompleted} key={todo.id} todo={todo} todos={todos} setTodos={setTodos}/>
        ))}
      </div>
    </section>
    
  )
}

export default TodosList
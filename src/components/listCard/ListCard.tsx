import React, {useState} from 'react';
import {AiFillEdit, AiFillDelete} from 'react-icons/ai';
import {Todo} from '../../model';
import {MdDone} from 'react-icons/md';
import './ListCard.css';

type Props = {
    todo: Todo,
    todos: Todo[],
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>,
}

const ListCard = ({todo, todos, setTodos}: Props) => {
    const [edit, setEdit] = useState<boolean>(false);
    const [input, setInput] = useState<string>(todo.todo);

    const handleDone = (id: number) => {
        setTodos(todos.map(todo => todo.id === id ? {...todo, isDone: !todo.isDone} : todo))
    }

    const handleDelete = (id: number) => {
        setTodos(todos.filter(todo => todo.id !== id));
    }

    const handleEdit = () => {
        setEdit(!edit);
    }

    return(
    <div className='card'>
        {todo.isDone 
        ?
        <s className='card_text'>{todo.todo}</s>
        :
        !todo.isDone && edit ?
        <input/>
        :
        <span className='card_text'>{todo.todo}</span>
        }
        <div className='card_buttons_wrapper'>
            <span className='card_button' onClick={()=>{
                handleEdit();
            }}>
                <AiFillEdit/>
            </span>
            <span className='card_button' onClick={()=>{
                handleDelete(todo.id)
            }}>
                <AiFillDelete/>
            </span>
            <span className='card_button' onClick={()=>{
                handleDone(todo.id)}}>
                <MdDone/>
            </span>
        </div>
    </div>
  )
}

export default ListCard
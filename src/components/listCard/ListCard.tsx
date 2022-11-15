import React, {useState, useEffect, useRef} from 'react';
import {AiFillEdit, AiFillDelete} from 'react-icons/ai';
import {Todo} from '../../model';
import {MdDone} from 'react-icons/md';
import './ListCard.css';

type Props = {
    todo: Todo,
    todos: Todo[],
    completed: Todo[],
    setCompleted:React.Dispatch<React.SetStateAction<Todo[]>>,
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>,
}

const ListCard = ({todo, todos, completed, setCompleted, setTodos}: Props) => {
    const inputFocus = useRef<HTMLInputElement>(null);
    const [edit, setEdit] = useState<boolean>(false);
    const [input, setInput] = useState<string>(todo.todo);

    const handleDone = (id: number) => {
        setTodos(todos.filter(todo => todo.id !== id));
        setCompleted([...completed, {...todo, isDone: true}]);
    }

    const handleDelete = (id: number) => {
        setTodos(todos.filter(todo => todo.id !== id));
    }

    const handleEdit = () => {
        setEdit(!edit);
    }

    const changeValue = (value: string) => {
        setInput(value);
    }

    const handleSubmit = (e: React.FormEvent, id: number) => {
        e.preventDefault();
        setTodos(todos.map(todo => todo.id === id ? {...todo, todo: input} : todo))
        setEdit(false);
    };

    useEffect(()=>{
        inputFocus.current?.focus();
    },[edit])

    return(
    <form className='card' onSubmit={(e)=>{
        handleSubmit(e, todo.id)
    }}>
        {
        !todo.isDone && edit ?
        <input ref={inputFocus} className={'card_input'} onChange={(e)=>{
            changeValue(e.target.value);
        }}
        value={input}/>
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
    </form>
  )
}

export default ListCard
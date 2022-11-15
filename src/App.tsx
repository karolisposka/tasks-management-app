import React, {useState} from 'react';
import './styles.css';
import {Todo} from './model';
import InputField from './components/inputField/InputField';
import TodosList from './components/list/TodosList';

const App: React.FC = () =>  {
  const [query, setQuery] = useState<string>('');
  const [todos, setTodos] = useState<Todo[]>([]);
  const [completed, setCompleted] = useState<Todo[]>([]);  


  const handleAdd = (e:React.FormEvent) => {
    e.preventDefault();
    if(query){
      setTodos([...todos,{
        id: Math.floor(Math.random()*100000),
        todo: query,
        isDone: false,
      }]);
      setQuery('');
    }
  }

  return (
    <div className='app'>
      <h1 className='heading'>tasks manager</h1>
      <InputField query={query} setQuery={setQuery} handleSubmit={handleAdd}/>
        <TodosList todos={todos} completed={completed} setCompleted={setCompleted} setTodos={setTodos}/>
    </div>
  );
}

export default App;

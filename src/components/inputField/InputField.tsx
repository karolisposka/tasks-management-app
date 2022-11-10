import React from 'react';
import './inputField.css';


type Props = {
    query: string,
    setQuery: React.Dispatch<React.SetStateAction<string>>,
    handleSubmit: (e:React.FormEvent)=> void,
}

const InputField = ({query, setQuery, handleSubmit}: Props) => {
  return (
    <form className='input' onSubmit={handleSubmit}>
        <input type='text' placeholder='enter a task' className='input_box' onChange={(e)=>{setQuery(e.target.value)}} value={query}/>
        <button type='submit' className='input_button'>Go</button>
    </form>
  )
}

export default InputField
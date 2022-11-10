import React from 'react';
import './ListCard.css';

type Props = {
    todo: string,
    // handleEdit: ,
    // handleDelete: ,
    // handleSetCompleted: ,
}

const ListCard = ({todo}: Props) => {
  return (
    <div className='card'>ListCard</div>
  )
}

export default ListCard
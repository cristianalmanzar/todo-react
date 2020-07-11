import React from 'react';
import PropTypes from 'prop-types';

export const Task = ({data, dispatch}) => {

    const handleDelete = (todoId) => {

        const action = {
            type: 'delete',
            payload: todoId
        }

        dispatch(action);

    }

    return (
        <>
            <div className="item-container">
                <div className="grid">
                    <ul>
                    {
                        data.map( (todo, i) =>  (
                            <li key={todo.id} className="item">
                                {i + 1 }) { todo.desc}
                                <span className="delete" onClick={ () => handleDelete(todo.id)}  >X</span>
                            </li>
                        ))
                        
                    }
                    </ul>
                    <hr/>
                </div>
            </div>  
        </>
    )
}


Task.propTypes = {
    data: PropTypes.array.isRequired
}

import React, {useReducer, useState} from 'react';
import {todoReducer} from '../../reducers/todoReducer' 
import { SearchBar } from './SearchBar';
import { Task } from './Task';
import './todo.css';


const initialState = [
    {
        id: 0,
        desc: 'Learn React ',
        done: 'False'

    },
    {
        id: 1,
        desc: 'Learn CSS  ',
        done: 'False'

    },
    {
        id: 2,
        desc: 'Learn Node  ',
        done: 'False'

    }
];

export const TodoApp = () => {

    const [ todos, dispatch ] = useReducer(todoReducer, initialState);

    return (
        <div>
            <div className="header-container">
                <h1 className="title"> Todo App ( {todos.length} ) </h1>
                <SearchBar className={'add-input'} placeholder={'Insert a new task'} dispatch={dispatch}/>
            </div>

            <div className="center">
                <Task data={todos} dispatch={dispatch} />
            </div>
        </div>
    )
}

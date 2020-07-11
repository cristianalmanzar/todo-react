import React, {useState} from 'react'
import PropTypes from 'prop-types';


export const SearchBar = ({ className, placeholder, dispatch}) => {
    const [input, setInput] = useState('');

    const handleChange = (e) => {
        setInput(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const todo = {
            id: new Date().getTime(),
            desc: input,
            done: false
        }

        const action = {
            type: 'add',
            payload: todo
        }

        dispatch(action);

    }

    return (
        <>
            <form onSubmit={handleSubmit} className="center">
                <input
                    type="text"
                    className={className}
                    value={input}
                    onChange={ handleChange}
                    placeholder={placeholder}
                />
            </form>
        </>
    )
}

SearchBar.propTypes = {
    className: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired
}

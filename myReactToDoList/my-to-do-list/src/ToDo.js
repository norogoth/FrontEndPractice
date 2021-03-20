import React from 'react'

export default function ToDo(props) {
    
    return (
        <label>
            <input type = "checkbox" checked={props.todo.checked} onChange={props.handleToDoClick}/>
            {props.todo.name}
        </label>
    )
}
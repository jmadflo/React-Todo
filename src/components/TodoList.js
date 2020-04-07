// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react'
import Todo from './Todo'

const TodoList = props => {
    return (
        props.todoData.map(todoItem => {
            return <Todo key={todoItem.id} todoItem={todoItem} toggleCompleted={props.toggleCompleted}/>
        })
    )
}

export default TodoList
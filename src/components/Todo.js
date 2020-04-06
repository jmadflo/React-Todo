import React from 'react'

const Todo = props => {
    return (
        <div className={`todo${props.todoItem.completed ? ' completed' : ''}`} 
        onClick={() => {
            console.log(props.todoItem)
            props.toggleCompleted(props.todoItem.id)
        }}>
            <p>{props.todoItem.task}</p>  
        </div>        
    )
    
}
    

export default Todo
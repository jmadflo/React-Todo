import React from 'react'

const TodoForm = props => {

    return (
        <form>
            <input type="text" name="newTodo"placeholder="new item" value={props.todoVal} onChange={props.updateForm}/>
            <button onClick={props.submitTodo}>Add Todo</button>
            <button onClick={props.clearComplete}>Clear Completed</button>
        </form>
    )
}

export default TodoForm
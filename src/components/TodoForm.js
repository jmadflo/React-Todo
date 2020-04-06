import React from 'react'

const TodoForm = () => {
    return (
        <form>
            <input placeholder="new item" value={this.state.inputVal} />
            <button>Add Todo</button>
            <button>Clear Completed</button>
        </form>
    )
}
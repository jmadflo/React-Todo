import React from 'react';
import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm'
import './components/Todo.css'

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super()
    this.state = {
      todoList: [{
        task: 'Destroy Alderaan',
        id: 1528817077286,
        completed: false
      },
      {
        task: 'Practice Lightsaber Skills',
        id: 1528817084358,
        completed: false
      },
      {
        task: 'Update Emperor on Death Star Construction',
        id: 1528817088878,
        completed: false
      }
    ],
      todoVal: ''
    }
  }

  addTodo = (event, inputTodo) => {
    event.preventDefault()
    const newItem = {
      task: inputTodo,
      id: Date.now(),
      completed: false,
    }
    this.setState({
      todoList: [...this.state.todoList, newItem]
    })
  }
  
  toggleCompleted = todoId => {
    this.setState({
      todoList: this.state.todoList.map(todo =>{
        if (todo.id === todoId){
          return {...todo, completed: !todo.completed}
        }
        return todo
      })
    })
  }

  clearComplete = event => {
    event.preventDefault()
    this.setState({todoList: this.state.todoList.filter(todo => !todo.completed)})
  }

  updateForm = event => {
    event.keyCode == 13 ? this.submitTodo(event) : this.setState({todoVal: event.target.value})
  }

  submitTodo = event => {
    event.preventDefault()
    this.setState({todoVal: ''})
    this.addTodo(event, this.state.todoVal)
  }

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList todoData={this.state.todoList} toggleCompleted={this.toggleCompleted}/>
        <TodoForm clearComplete={this.clearComplete} updateForm={this.updateForm} addTodo={this.addTodo} submitTodo={this.submitTodo} todoVal={this.state.todoVal}/>
      </div>
    );
  }
}

export default App;

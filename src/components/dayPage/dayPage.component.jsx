import { find, pick } from 'lodash';
import React, { Component } from 'react'
import Todo from '../../models/todo.model';
import { todoService } from '../../services/todo.service';
import './dayPage.component.css'
export default class DayPageComponent extends Component {
    state = {
      currentTodo: null,
      isFormVisible: false,
    }
    handleTitleChange = (event) => {
      this.setState({
        currentTodo: {
        ...this.state.currentTodo,
        title: event.target.value
        }
      });
    }
    handleDescriptionChange = (event) => {
      this.setState({
        currentTodo: {
        ...this.state.currentTodo,
        description: event.target.value
        }
      });
    }
    handleSubmit = (event) => {
      event.preventDefault();
      todoService.upsertTodo(pick(this.props, ['year', 'month', 'day']), this.state.currentTodo);
      this.setState({
        currentTodo: null,
        isFormVisible: false,
      })
    }
    handleTodoClick = (event) => {
      const id = event.currentTarget.dataset.id;
      const currentTodo = find(this.props.todos, { id });
      this.setState({
        currentTodo,
        isFormVisible: true,
      });
    }
    handleAddButtonClick = () => {
      const currentTodo = new Todo();
      this.setState({
        currentTodo,
        isFormVisible: true,
      });
    }
    handleDelete = (event) => {
      event.preventDefault();
      todoService.deleteTodo(pick(this.props, ['year', 'month', 'day']), this.state.currentTodo);
      this.setState({
        currentTodo: null,
        isFormVisible: false,
      })
      
    }
    render() {
      const { year, month, day } = this.props;
      const today = new Date( year, month - 1, day);
      const title = today.toLocaleString('default', { weekday: 'long', day: 'numeric', month: 'long' });
        return (
          <div className='day-page'>
              <h2 className='day-page-style'>
                {title}{' notes'}
              </h2>
              {this.props.todos.map(todo => (
                <div 
                  key={todo.id} 
                  className="todo-item" 
                  onClick={this.handleTodoClick}
                  data-id={todo.id}
                >   
                  <div className='todo-item-title'>{todo.title}</div>
                    <div>{todo.description}</div>
                </div>
              ))}
              { this.state.isFormVisible ? 
              <form onSubmit={this.handleSubmit}>
                <input 
                  type="text" 
                  name='title' 
                  value={this.state.currentTodo.title} 
                  onChange={this.handleTitleChange}
                  placeholder='Title'
                />
                <input 
                  type="text" 
                  name='description' 
                  value={this.state.currentTodo.description}
                  onChange={this.handleDescriptionChange}
                  placeholder='Description'
                />
                <div className='change-todo'>
                <input className="submit" type="submit" value='Submit'/>
                <button onClick={this.handleDelete} className='change-todo-delete'>delete</button>
                </div>
              </form> : <button onClick={this.handleAddButtonClick}>Add todo</button> }
        </div>
        )
    }
}

import React, { Component } from 'react'
import './dayPage.component.css'
export default class DayPageComponent extends Component {
    state = {
      title: 'sample',
      description: 'sample description',
    }
    handleTitleChange = (event) => {
        this.setState({title: event.target.value});
    }
    handleDescriptionChange = (event) => {
        this.setState({description: event.target.value});
    }
    handleSubmit = (event) => {
      event.preventDefault();
      console.log(this.state);
    }
    render() {
        return (
          <div className='day-page'>
            <div className='day-page-style'>
              {this.props.startDate.toLocaleDateString()}{' notes'}
            </div>
            <form onSubmit={this.handleSubmit}>
            <input 
              type="text" 
              name='title' 
              value={this.state.title} 
              onChange={this.handleTitleChange}
            />
            <input 
              type="text" 
              name='description' 
              value={this.state.description}
              onChange={this.handleDescriptionChange}
            />
            <input className="submit" type="submit" value='Submit'/>
            </form>
        </div>
        )
    }
}

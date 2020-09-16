import './month.component.css';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Day } from '..';
export default class MonthComponent extends Component {
    render() {
    const startDate = this.props.startDate;
    const title = startDate.toLocaleString('default', { month: 'long' });
    const tempDate = new Date(startDate);
    const days = [];
    let day = 1;
    tempDate.setDate(day);
    while (tempDate.getMonth() === startDate.getMonth()) {
    days.push(new Date(tempDate));
    day = day + 1;
    tempDate.setDate(day);
    }
    for (let i = startDate.getDay(); i > 0; i--) {
        days.unshift(null);
    }
    const dayTitles = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
    return (
      <div className="month">
        <div className="month-head">
          <Link to={`/year/${startDate.getFullYear()}/month/${startDate.getMonth() + 1}`}>
          {title}
          </Link>
        </div>
        <div className="month-body">
          {dayTitles.map((day, index) => <div key={'title' + index} className="month-body-title">{day}</div>)}
          {days.map((day, index) => <Day key={index} date={day} todos={this.props.todos}/>)}
        </div>
        </div>
      );
    }
  }
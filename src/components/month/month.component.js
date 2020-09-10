import './month.component.css';
import React, { Component } from 'react';
export default class MonthComponent extends Component {
    render() {
    const startDate = this.props.startDate;
    const title = startDate.toLocaleString('default', { month: 'long' });
    const tempDate = new Date(startDate);
    const days = [];
    for (let day = 1; day <= 30; day++) {
    days.push(day);
    tempDate.setDate(day);
    };
    const dayTitles = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];
    return (
      <div className="month">
        <div className="month-head">
          {title}
        </div>
        <div className="month-body">
          {dayTitles.map(day => <div className="month-body-title">{day}</div>)}
          {days.map(day => <div className="month-body-day">{day}</div>)}
        </div>
        </div>
      );
    }
  }
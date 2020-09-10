import './year.component.css';
import React, { Component } from 'react';
import { Month } from '..';
const currentYear = new Date().getFullYear();
export default class YearComponent extends Component {
  state = this.stateForYear(currentYear);
  stateForYear(year) {
    return {
      currentYear: year,
      months: Array(12).fill(null).map((x, index) => {
        return {
          number: index,
          startDate: new Date(year, index, 1),
        }
      })
    }
  }
  yearNext = () => {
    this.setState(this.stateForYear(this.state.currentYear + 1));
  }
  yearLast = () => {
    this.setState(this.stateForYear(this.state.currentYear - 1));
  }
  render() {
    return (
      <div className="year">
        <div className="year-head">
          <button type="button" onClick={this.yearLast}>{this.state.currentYear-1}{' год'}</button>
            {'календарь на '}{this.state.currentYear}{' год'}
          <button type="button" onClick={this.yearNext}>{this.state.currentYear+1}{' год'}</button>
        </div>
        <div className="year-body-wrap">
            <div className="year-body-section">
          {this.state.months.map(month => (
            <Month startDate={month.startDate}/>
          ))}
          </div>
        </div>
      </div>
    );
  }
}
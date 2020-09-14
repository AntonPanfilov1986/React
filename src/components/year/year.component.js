import './year.component.css';
import React, { Component } from 'react';
import { Month } from '..';
import { Link } from 'react-router-dom';
export default class YearComponent extends Component {
// state = {
//   currentYear: new Date().getFullYear(), 
// };
// yearNext = () => {
//   this.setState({currentYear: this.state.currentYear + 1});
// }
// yearLast = () => {
//   this.setState({currentYear: this.state.currentYear - 1});
// }
render() {
  const months = Array(12).fill(null).map((x, index) => new Date(this.props.year, index, 1));
    return (
      <div className="year">
        <div className="year-head">
          <Link to={`/year/${this.props.year-1}`}>
            <button type="button">{'year '}{this.props.year-1}</button>
          </Link>
            {this.props.year} {' calendar'}
          <Link to={`/year/${Number(this.props.year)+1}`}>
    <button type="button">{'year '}{Number(this.props.year)+1}</button>
          </Link>
        </div>
        <div className="year-body-wrap">
            <div className="year-body-section">
          {months.map(startDate => (
            <Month key={startDate.toISOString()} startDate={startDate}/>
          ))}
          </div>
        </div>
      </div>
    );
  }
}
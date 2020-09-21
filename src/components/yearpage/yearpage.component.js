import './yearpage.component.css';
import React, { Component } from 'react';
import { Month } from '..';
import { Link } from 'react-router-dom';
import { get } from 'lodash';
export default class YearComponent extends Component {

render() {
  const months = Array(12).fill(null).map((x, index) => index + 1);
    return (
      <div className="year">
        <div className="year-head">
          <Link to={`/year/${this.props.year-1}`}>
            <button type="button">{'year '}{this.props.year-1}</button>
          </Link>
            {this.props.year} {' calendar'}
          <Link to={`/year/${Number(this.props.year) + 1}`}>
            <button type="button">{'year '}{Number(this.props.year)+1}</button>
          </Link>
        </div>
        <div className="year-body-wrap">
          <div className="year-body-section">
            {months.map(month => (
              <Month 
                key={month}
                year={this.props.year}
                month={month}
                todos={get(this.props.todos, month, {})}/>
           ))}
          </div>
        </div>
      </div>
    );
  }
}
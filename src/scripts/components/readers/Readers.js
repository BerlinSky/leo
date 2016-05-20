import React from 'react';
import {Link} from 'react-router';

export default class Readers extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <h2>Readers</h2>
        <div><Link to="/">Back to Home</Link></div>
        <div><Link to="newReader">Add New Reader</Link></div>
        <div>
          <div className="InputAddOn">
            <span className="InputAddOn-item">Item #1:</span>
            <input className="InputAddOn-field" />
            <button className="InputAddOn-item">…</button>
          </div>
        </div>
      </div>
    )
  }
}
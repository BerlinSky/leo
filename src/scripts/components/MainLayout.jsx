import React from 'react';

export default class MainLayout extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="mainLayout">
        <h2>Hello from main layout</h2>
        {this.props.children}
      </div>
    )
  }
}
'use strict';

class MainLayout extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="mainLayout">
        {this.props.children}
      </div>
    )
  }
}

window.MainLayout = MainLayout;

'use strict';

const { Router, Route, IndexRoute, Link, browserHistory } = ReactRouter

class MainLayout extends React.Component {
	constructor() {
		super();
	}
  render() {
    return (
      <div className="app">
      	<AppNav />

        <main>
          "{this.props.children}"
        </main>

        <Footer />
      </div>
    )
  }
}

class MainContent extends React.Component {
	constructor() {
		super();
	}
  render() {
    return (
      <div className="mainArea">
          {this.props.children}
      </div>
    )
  }
}

class ReaderSupport extends React.Component {
	constructor() {
		super();
	}
  render() {
    return (
      <h2>
        Reader Support
      </h2>
    )
  }
}

class Library extends React.Component {
	constructor() {
		super();
	}
  render() {
    return (
      <h2>
        Library Management
      </h2>
    )
  }
}

class Books extends React.Component {
	constructor() {
		super();
	}
  render() {
    return (
      <h2>
        Book Categories
      </h2>
    )
  }
}

class Librarians extends React.Component {
	constructor() {
		super();
	}
  render() {
    return (
      <h2>
        Librarian Association
      </h2>
    )
  }
}

class Home extends React.Component {
	render() {
		return (
			<h1>Home Page 2</h1>
		)
	}
};



ReactDOM.render(
  <LandingNav />,
  document.getElementById('app')
);



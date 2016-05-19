'use strict';

const { Router, Route, IndexRoute, Link, browserHistory } = ReactRouter

class NewReader extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <h2>New Reader</h2>
      </div>
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

jQuery(function() {
  ReactDOM.render((
    <Router history={browserHistory}>
      <Route path="/" component={MainLayout}>
        <IndexRoute component={LandingNav} />
        <Route path="readers" component={Readers} />
        <Route path="newReader" component={NewReader} />
        <Route path="library" component={Library} />
        <Route path="books" component={Books} />
        <Route path="librarians" component={Librarians} />
      </Route>
    </Router>
  ), document.getElementById('app'))
})





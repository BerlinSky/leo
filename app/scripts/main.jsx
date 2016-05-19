'use strict';

const { Router, Route, IndexRoute, Link, browserHistory } = ReactRouter

class Readers extends React.Component {
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





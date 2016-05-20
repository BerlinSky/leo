import React from 'react';
import ReactDOM from 'react-dom';
import jQuery from 'jquery';

import {hashHistory, Router, Route, Redirect, IndexRoute, Link} from 'react-router';

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

class LandingNav extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="pictureFrame">
        
        <div className="pictureFrame__panel pictureFrame__panel--one">
          <div className="postStamp">
            <Link to="readers">
              <img className="postStamp__img" src="images/window-checked.ico" alt="" />
            </Link>
            <div className="postStamp__text">
              <h3 className="postStamp_textBox--heading">News</h3>
              <span className="postStamp__textBox--body">For Readers</span>
            </div>
          </div>
        </div>
        <div className="pictureFrame__panel pictureFrame__panel--two"> 
          <div className="postStamp">
            <Link to="library">
              <img className="postStamp__img" src="images/analytics.ico" alt="" />
            </Link>
            <h3 className="postStamp_textBox--heading">Tour</h3>
            <span className="postStamp__textBox--body">For a library</span>
          </div>
        </div>
        <div className="pictureFrame__panel pictureFrame__panel--three">
          <div className="postStamp">
            <Link to="library">
              <img className="postStamp__img" src="images/checklist.ico" alt="" />
            </Link>
            <h3 className="postStamp_textBox--heading">Photos</h3>
            <span className="postStamp__textBox--body">An Artist</span>
          </div>
        </div>
        <div className="pictureFrame__panel pictureFrame__panel--four">
          <div className="postStamp">
            <Link to="library">
              <img className="postStamp__img" src="images/html.ico" alt="" />
            </Link>
            <h3 className="postStamp_textBox--heading">Join</h3>
            <span className="postStamp__textBox--body">An Artist</span>
          </div>
        </div>
        <div className="pictureFrame__panel pictureFrame__panel--five">
          <div className="postStamp">
            <Link to="library">
              <img className="postStamp__img" src="images/shop.ico" alt="" />
            </Link>
            <h3 className="postStamp_textBox--heading">Store</h3>
            <span className="postStamp__textBox--body">An Artist</span>
          </div>
        </div>

      </div>
    )
  }
}

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

jQuery(function() {
  ReactDOM.render((
    <Router history={hashHistory}>
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




import React from 'react';
import {Link} from 'react-router';

export default class LandingNav extends React.Component {
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

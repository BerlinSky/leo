'use strict';

class LandingNav extends React.Component {
	constructor() {
		super();
	}
	
  render() {
    return (
      <div className="pictureFrame">
        
        <div className="pictureFrame__panel pictureFrame__panel--one">
          <div className="postStamp">
        		<img className="postStamp__img" src="images/window-checked.ico" alt="" />
          	<div className="postStamp__text">
          		<h3 className="postStamp_textBox--heading">News</h3>
          		<span className="postStamp__textBox--body">An Artist</span>
          	</div>
          </div>
        </div>
        <div className="pictureFrame__panel pictureFrame__panel--two"> 
        	<div className="postStamp">
        		<img className="postStamp__img" src="images/analytics.ico" alt="" />
          		<h3 className="postStamp_textBox--heading">Tour</h3>
          		<span className="postStamp__textBox--body">An Artist</span>
          </div>
        </div>
        <div className="pictureFrame__panel pictureFrame__panel--three">
        	<div className="postStamp">
        		<img className="postStamp__img" src="images/checklist.ico" alt="" />
        		<h3 className="postStamp_textBox--heading">Photos</h3>
        		<span className="postStamp__textBox--body">An Artist</span>
          </div>
        </div>
        <div className="pictureFrame__panel pictureFrame__panel--four">
        	<div className="postStamp">
        		<img className="postStamp__img" src="images/html.ico" alt="" />
        		<h3 className="postStamp_textBox--heading">Join</h3>
        		<span className="postStamp__textBox--body">An Artist</span>
          </div>
        </div>
        <div className="pictureFrame__panel pictureFrame__panel--five">
        	<div className="postStamp">
        		<img className="postStamp__img" src="images/shop.ico" alt="" />
        		<h3 className="postStamp_textBox--heading">Store</h3>
        		<span className="postStamp__textBox--body">An Artist</span>
          </div>
        </div>

      </div>
    )
  }
}

window.LandingNav = LandingNav;


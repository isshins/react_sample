import React, {Component} from 'react';
import {Link} from 'react-router';

export default class Footer extends Component {

  render () {
    return (
      <footer>
        <div className="footer">
          <div className="content_wrap">
            <div className="inner_wrap">
              <div className="column">
                <div className="title">
                  CONTACT
                </div>
                <div className="body">
                  contact@gmail.com
                </div>
              </div>
              <div className="column">
                <div className="title">
                  SITEMAP
                </div>
                <div className="body">
                  <Link to="/">Home</Link>
                  <Link to="/information">Information</Link>
                  <Link to="/members">Member</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}

import React, {Component} from 'react';
import {Link} from 'react-router';

export default class Header extends Component {

  render () {
    const {window_h, window_w} = this.props;
    return (
      <header>
        <div className="header">
          <div className="content_wrap">
            <div className="header_right">
              <Link to="/">
                <img src={window_w >= 'number' ? "..../data/img/" : "..../data/img/"} alt="inftechlabslogo" />
              </Link>
            </div>
            <div className="header_left">
              <nav>
                <ul className="page_nav row">
                  <li><Link to="">Home</Link></li>
                  <li><Link to="">Information</Link></li>
                  <li><Link to="">Menber</Link></li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

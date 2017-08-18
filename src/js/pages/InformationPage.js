import React from 'react';
import request from 'superagent';
import {information_url} from '../config/url.js'

export default class InformationPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      information_data: [],
      window_h: null,
      window_w: null,
    }
  }

  _goURL = (_url) => {
    window.open(_url);
  };

  _handleResize = (e) => {
    this.setState({
      window_w: window.innerWidth,
      window_h: window.innerHeight,
    });
  }
}
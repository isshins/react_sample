import React, {Component} from 'react';
import InformationCard from './component/InformarionCard.js'



export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      informations_data: [],
      members_data: [],
      window_h: window.innerHeight,
      window_w: window.innerWidth,
      open: false,
      picture_h: 0,
      picture_w: 0,
    }
  }

  _onClickInformation = (_url) => {
    widnow.open(_url);
  };

  _handleResize = (e) => {
    if (window.innerWidth >= 641) {
      this.setState({
        picture_h: 750,
        picture_w: 750 * (1920 / 1080)
      });
    } else {
      this.setState({
        picture_h: 500,
        picture_w: 500 * (1920 / 1080)
      });
    }
    this.setState({
      window_h: window.innerHeight,
      window_w: window.innerWidth
    });
  };


  render() {
    return (
      <div className="homepage">
        <div className="topimage"></div>
        <div className="body">
          <h2>ブロックチェーンやReactによるwebアプリケーション作成を学ぼう！</h2>
          <p>
            この団体は主にブロックチェーンの勉強会やJavascriptによるReactの勉強会を行います！<br/>
            経験者はもちろん、初心者も一緒に成長していこうというスタンスなので、少しでも興味があればどうですか？<br/>
            これからの情報社会に向けて先取りしちゃいましょう!!<br/>
          </p>
        </div>
        <Informationcard />
      </div>
    )
  }
};

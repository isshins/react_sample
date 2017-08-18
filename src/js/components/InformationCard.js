import React from 'react';
import {Card, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import request from 'superagent'


export default class InformationCard extends Component {


  render () {
    let {thumnail, title, description} = this.props.data;
    return (
      <Card>
        <CardMedia>
          <img src={thumnail} /*alt*/ />
        </CardMedia>
        <CardTitle title={title} />
        <CardText>
          {description}
        </CardText>
      </Card>
    );
  }
}

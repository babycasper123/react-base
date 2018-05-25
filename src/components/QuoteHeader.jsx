import React from 'react';
import { render } from 'react-dom';


export default class QuoteHeader extends React.Component {

  constructor(props) {
    super(props);
  }


  render() {
    return (
        <div className="col-xs-12">
          <h2 className="quoteWrapper">"Lorem ipsum fermentum pharetra ullamcorper laoreet tempus molestie faucibus curae a donec, aliquam cursus eget enim lobortis"</h2>
        </div>
    );
  }
}
import React from 'react';
import { render } from 'react-dom';



export default class Header extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="col-xs-12">
        <div className="purple-navheader"></div>
        <div>
          <input className="nav-search" type="text" />
          <span><i className="fa fa-search nav-search-icon"></i></span>
        </div>
        <nav className="navbar amaris-nav">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1"
              aria-expanded="false">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand amarisLogo" href="#"></a>
          </div>
          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav navbar-right">
              <li>
                <a href="#">HOME</a>
              </li>
              <li>
                <a href="#">STYLE DEMO</a>
              </li>
              <li>
                <a href="#">FULL WIDTH</a>
              </li>
              <li>
                <a href="#">DROPDOWN</a>
              </li>
              <li>
                <a href="#">PORTFOLIO</a>
              </li>
              <li>
                <a href="#">GALLERY</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>

    );

  }
}
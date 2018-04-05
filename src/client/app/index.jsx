import React from 'react';
import {render} from 'react-dom';
import AwesomeComponent from './AwesomeComponent.jsx';
import $ from '../../../node_modules/jquery';
import bootstrap3 from '../../../node_modules/bootstrap3/dist/css/bootstrap.min.css';
import Header from './header.jsx';



class App extends React.Component {


  render () {
    const name = "vishnu";
    return (
      <div>
        <Header />
        <p> Hello to react proto</p>
        <AwesomeComponent title={name}/>
      </div>
    );
  }
}

render(<App/>, document.getElementById('app'));
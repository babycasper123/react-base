import React from 'react';
import { render } from 'react-dom';

//Node modules import

import 'jquery';
import bootstrap3 from '../node_modules/bootstrap3/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap3/dist/js/bootstrap.min.js';
import fontawesome from '../node_modules/font-awesome/css/font-awesome.css';


// Pre-importing styles here coz have to override in styleDOTscss
import Slickcarousel from '../node_modules/slick-carousel/slick/slick.css';
import SlickcarouselTheme from '../node_modules/slick-carousel/slick/slick-theme.css';
import './assets/scripts/dist/slick/slick.min.js';

//Styles imports
import './assets/styles/style.scss';
import './assets/styles/responsive.scss';
import './assets/scripts/script.js';


// Components import

import Header from './components/header.jsx';
import QuoteHeader from './components/QuoteHeader.jsx';
import Slider from './components/Slider.jsx';
import ThumbSmall from './components/ThumbSmall.jsx';
import ThumbLarge from './components/ThumbLarge.jsx';
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx';


class App extends React.Component {

  render() {
    return (
      <div className="container">
        <div className="row">
          <Header />
          <QuoteHeader />
          <Slider />
          <ThumbSmall />
          <ThumbLarge />
          <Contact />
          <Footer />
        </div>
      </div>
    );
  }
}

render(<App />, document.getElementById('app'));
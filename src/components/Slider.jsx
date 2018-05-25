import React from 'react';
import { render } from 'react-dom';


// Image imports
import slider1 from '../assets/images/slider1.jpg';
import slider2 from '../assets/images/slider2.jpg';
import slider3 from '../assets/images/slider3.jpg';
import slider4 from '../assets/images/slider4.jpg';
import slider5 from '../assets/images/slider5.jpg';



export default class Slider extends React.Component {

    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div className="col-xs-12">
                <div className="slider">
                    <div>
                        <img className="slideimg" src={slider1} alt="Slider1"/>
                        <div className="slide-texts">
                            <h3 className="slide-heading">Slider 1 Caption</h3>
                            <p className="slide-content">Lorem ipsum fermentum pharetra ullamcorper laoreet tempus molestie faucibus curae a donec, aliquam cursus eget enim lobortis hac laoreet dapibus eleifend.</p>
                        </div>
                    </div>
                    <div>
                        <img className="slideimg" src={slider2} alt="Slider2"/>
                        <div className="slide-texts">
                            <h3 className="slide-heading">Slider 2 Caption</h3>
                            <p className="slide-content">Lorem ipsum fermentum pharetra ullamcorper laoreet tempus molestie faucibus curae a donec, aliquam cursus eget enim lobortis hac laoreet dapibus eleifend.</p>
                        </div>
                        </div>
                    <div>
                        <img className="slideimg" src={slider3} alt="Slider3"/>
                        <div className="slide-texts">
                            <h3 className="slide-heading">Slider 3 Caption</h3>
                            <p className="slide-content">Lorem ipsum fermentum pharetra ullamcorper laoreet tempus molestie faucibus curae a donec, aliquam cursus eget enim lobortis hac laoreet dapibus eleifend.</p>
                        </div>
                    </div>
                    <div>
                        <img className="slideimg" src={slider4} alt="Slider4"/>
                        <div className="slide-texts">
                            <h3 className="slide-heading">Slider 4 Caption</h3>
                            <p className="slide-content">Lorem ipsum fermentum pharetra ullamcorper laoreet tempus molestie faucibus curae a donec, aliquam cursus eget enim lobortis hac laoreet dapibus eleifend.</p>
                        </div>
                    </div>
                    <div>
                        <img className="slideimg" src={slider5} alt="Slider5"/>
                        <div className="slide-texts">
                            <h3 className="slide-heading">Slider 5 Caption</h3>
                            <p className="slide-content">Lorem ipsum fermentum pharetra ullamcorper laoreet tempus molestie faucibus curae a donec, aliquam cursus eget enim lobortis hac laoreet dapibus eleifend.</p>
                        </div>
                    </div>

                </div>
            </div>


        );
    }
}



















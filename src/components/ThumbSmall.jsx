import React from 'react';
import { render } from 'react-dom';

import user48x24 from '../assets/images/user48x48.png';


export default class ThumbSmall extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="col-xs-12">
                <div className="row">
                    <div className="col-sm-12 col-md-4">
                        <div className="media thmb-container-s">
                            <div className="media-left">
                                <img src={user48x24} className="media-object" />
                            </div>
                            <div className="media-body">
                                <h4 className="media-heading thumb-heading-s">John Doe</h4>
                                <p>Lorem ipsum augue ac ligula ac aenean dapibus aptent augue in, quis posuere lobortis ultrices potenti luctus lacus vitae ac massa className tempus erat et sapien platea lectus purus.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-4">
                        <div className="media thmb-container-s">
                            <div className="media-left">
                                <img src={user48x24} className="media-object" />
                            </div>
                            <div className="media-body">
                                <h4 className="media-heading thumb-heading-s">John Doe</h4>
                                <p>Lorem ipsum augue ac ligula ac aenean dapibus aptent augue in, quis posuere lobortis ultrices potenti luctus lacus vitae ac massa className tempus erat et sapien platea lectus purus.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-4">
                        <div className="media thmb-container-s">
                            <div className="media-left">
                                <img src={user48x24} className="media-object" />
                            </div>
                            <div className="media-body">
                                <h4 className="media-heading thumb-heading-s">John Doe</h4>
                                <p>Lorem ipsum augue ac ligula ac aenean dapibus aptent augue in, quis posuere lobortis ultrices potenti luctus lacus vitae ac massa className tempus erat et sapien platea lectus purus.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
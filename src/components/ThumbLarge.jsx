import React from 'react';
import { render } from 'react-dom';

import user260x260 from '../assets/images/user260x180.jpg';


export default class ThumbLarge extends React.Component {


    render() {
        return (
            <div className="col-xs-12">
                <div className="thmb-row-l">
                    <div className="row">
                        <div className="col-sm-6 col-md-4">
                            <div className="thumbnail thmb-container-l">
                                <img src={user260x260} alt="user260x180" />
                                <div className="caption">
                                    <h3 className="thumb-heading-l">Thumbnail label</h3>
                                    <p>Lorem ipsum augue ac ligula ac aenean dapibus aptent augue in, quis posuere lobortis ultrices potenti luctus lacus vitae ac massa, className.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-4">
                            <div className="thumbnail thmb-container-l">
                                <img src={user260x260} alt="user260x180" />
                                <div className="caption">
                                    <h3 className="thumb-heading-l">Thumbnail label</h3>
                                    <p>Lorem ipsum augue ac ligula ac aenean dapibus aptent augue in, quis posuere lobortis ultrices potenti luctus lacus vitae ac massa, className.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-4">
                            <div className="thumbnail thmb-container-l">
                                <img src={user260x260} alt="user260x180" />
                                <div className="caption">
                                    <h3 className="thumb-heading-l">Thumbnail label</h3>
                                    <p>Lorem ipsum augue ac ligula ac aenean dapibus aptent augue in, quis posuere lobortis ultrices potenti luctus lacus vitae ac massa, className.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}